-- NIE Platform Database Schema
-- Run this in your Supabase SQL Editor

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- =====================
-- PROFILES
-- =====================
CREATE TABLE profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  role TEXT NOT NULL DEFAULT 'customer' CHECK (role IN ('customer', 'admin')),
  name TEXT NOT NULL DEFAULT '',
  email TEXT NOT NULL DEFAULT '',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Auto-create profile on signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, name, role)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'name', ''),
    'customer'
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE OR REPLACE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- =====================
-- APPLICATIONS
-- =====================
CREATE TABLE applications (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  status TEXT NOT NULL DEFAULT 'received' CHECK (
    status IN ('received', 'documents_generated', 'lawyer_processing', 'notary_processing', 'processing_spain', 'completed')
  ),
  case_number TEXT NOT NULL UNIQUE,
  assigned_lawyer_id UUID REFERENCES lawyers(id) ON DELETE SET NULL,
  payment_status TEXT NOT NULL DEFAULT 'pending' CHECK (payment_status IN ('pending', 'paid', 'refunded')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- =====================
-- APPLICATION DATA (EX-18)
-- =====================
CREATE TABLE application_data (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  application_id UUID REFERENCES applications(id) ON DELETE CASCADE UNIQUE NOT NULL,
  -- Personal
  full_name TEXT,
  date_of_birth DATE,
  nationality TEXT,
  passport_number TEXT,
  passport_issue_date DATE,
  passport_expiry_date DATE,
  address TEXT,
  postal_code TEXT,
  city TEXT,
  country TEXT,
  phone TEXT,
  email TEXT,
  -- Spanish purpose
  nie_purpose TEXT CHECK (nie_purpose IN ('property_purchase', 'bank_account', 'work', 'investment', 'other')),
  nie_purpose_other TEXT,
  -- Additional
  marital_status TEXT CHECK (marital_status IN ('single', 'married', 'divorced', 'widowed', 'partnership')),
  gender TEXT CHECK (gender IN ('male', 'female', 'other')),
  place_of_birth TEXT,
  -- Status
  signature_url TEXT,
  form_completed BOOLEAN NOT NULL DEFAULT FALSE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- =====================
-- DOCUMENTS
-- =====================
CREATE TABLE documents (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  application_id UUID REFERENCES applications(id) ON DELETE CASCADE NOT NULL,
  file_url TEXT NOT NULL,
  file_name TEXT NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('passport', 'ex18_filled', 'power_of_attorney', 'signature', 'other')),
  uploaded_by UUID REFERENCES profiles(id),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- =====================
-- NOTES
-- =====================
CREATE TABLE notes (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  application_id UUID REFERENCES applications(id) ON DELETE CASCADE NOT NULL,
  admin_id UUID REFERENCES profiles(id) NOT NULL,
  note TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- =====================
-- LAWYERS
-- =====================
CREATE TABLE lawyers (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  city TEXT NOT NULL,
  country TEXT NOT NULL DEFAULT 'Spain',
  specialization TEXT,
  active BOOLEAN NOT NULL DEFAULT TRUE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- =====================
-- ROW LEVEL SECURITY
-- =====================

ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE application_data ENABLE ROW LEVEL SECURITY;
ALTER TABLE documents ENABLE ROW LEVEL SECURITY;
ALTER TABLE notes ENABLE ROW LEVEL SECURITY;
ALTER TABLE lawyers ENABLE ROW LEVEL SECURITY;

-- Profiles
CREATE POLICY "Users can read own profile" ON profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON profiles
  FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Admins can read all profiles" ON profiles
  FOR SELECT USING (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
  );

-- Applications
CREATE POLICY "Users can read own applications" ON applications
  FOR SELECT USING (user_id = auth.uid());

CREATE POLICY "Users can insert own applications" ON applications
  FOR INSERT WITH CHECK (user_id = auth.uid());

CREATE POLICY "Admins can do everything on applications" ON applications
  FOR ALL USING (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
  );

-- Application data
CREATE POLICY "Users can read own application data" ON application_data
  FOR SELECT USING (
    EXISTS (SELECT 1 FROM applications WHERE id = application_id AND user_id = auth.uid())
  );

CREATE POLICY "Users can insert own application data" ON application_data
  FOR INSERT WITH CHECK (
    EXISTS (SELECT 1 FROM applications WHERE id = application_id AND user_id = auth.uid())
  );

CREATE POLICY "Users can update own application data" ON application_data
  FOR UPDATE USING (
    EXISTS (SELECT 1 FROM applications WHERE id = application_id AND user_id = auth.uid())
  );

CREATE POLICY "Admins can do everything on application_data" ON application_data
  FOR ALL USING (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
  );

-- Documents
CREATE POLICY "Users can read own documents" ON documents
  FOR SELECT USING (
    EXISTS (SELECT 1 FROM applications WHERE id = application_id AND user_id = auth.uid())
  );

CREATE POLICY "Users can insert own documents" ON documents
  FOR INSERT WITH CHECK (
    EXISTS (SELECT 1 FROM applications WHERE id = application_id AND user_id = auth.uid())
  );

CREATE POLICY "Admins can do everything on documents" ON documents
  FOR ALL USING (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
  );

-- Notes (admin only create/read)
CREATE POLICY "Admins can manage notes" ON notes
  FOR ALL USING (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
  );

CREATE POLICY "Users can read notes on own applications" ON notes
  FOR SELECT USING (
    EXISTS (SELECT 1 FROM applications WHERE id = application_id AND user_id = auth.uid())
  );

-- Lawyers (readable by all authenticated)
CREATE POLICY "Authenticated users can read lawyers" ON lawyers
  FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY "Admins can manage lawyers" ON lawyers
  FOR ALL USING (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role = 'admin')
  );

-- =====================
-- STORAGE BUCKETS
-- =====================
-- Run in Supabase dashboard or via API:
-- INSERT INTO storage.buckets (id, name, public) VALUES ('documents', 'documents', true);

-- Storage policies
CREATE POLICY "Users can upload own documents"
  ON storage.objects FOR INSERT
  WITH CHECK (
    bucket_id = 'documents' AND
    auth.role() = 'authenticated'
  );

CREATE POLICY "Public documents readable"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'documents');

-- =====================
-- SAMPLE DATA
-- =====================
INSERT INTO lawyers (name, email, city, specialization) VALUES
  ('García & Asociados', 'garcia@example.es', 'Madrid', 'NIE-ansøgninger, ejendomshandler'),
  ('López Notaría', 'lopez@example.es', 'Barcelona', 'Notariale services, NIE'),
  ('Martínez Legal', 'martinez@example.es', 'Málaga', 'NIE, residency, ejendom'),
  ('Fernández & Partners', 'fernandez@example.es', 'Valencia', 'NIE-ansøgninger, skatteret');
