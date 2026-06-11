-- Fix infinite recursion in RLS policies
-- The admin policies were checking profiles from within profiles, causing a loop

-- Step 1: Create a security definer function that bypasses RLS to check admin status
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM profiles
    WHERE id = auth.uid() AND role = 'admin'
  );
$$;

-- Step 2: Fix profiles table (remove recursive policy, replace with function)
DROP POLICY IF EXISTS "Admins can read all profiles" ON profiles;
CREATE POLICY "Admins can read all profiles" ON profiles
  FOR SELECT USING (is_admin());

-- Step 3: Fix all other tables that had the same recursion issue
DROP POLICY IF EXISTS "Admins can do everything on applications" ON applications;
CREATE POLICY "Admins can do everything on applications" ON applications
  FOR ALL USING (is_admin());

DROP POLICY IF EXISTS "Admins can do everything on application_data" ON application_data;
CREATE POLICY "Admins can do everything on application_data" ON application_data
  FOR ALL USING (is_admin());

DROP POLICY IF EXISTS "Admins can do everything on documents" ON documents;
CREATE POLICY "Admins can do everything on documents" ON documents
  FOR ALL USING (is_admin());

DROP POLICY IF EXISTS "Admins can manage notes" ON notes;
CREATE POLICY "Admins can manage notes" ON notes
  FOR ALL USING (is_admin());

DROP POLICY IF EXISTS "Admins can manage lawyers" ON lawyers;
CREATE POLICY "Admins can manage lawyers" ON lawyers
  FOR ALL USING (is_admin());
