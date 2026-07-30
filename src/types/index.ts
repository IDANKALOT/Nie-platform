export type UserRole = 'customer' | 'admin'

export type ApplicationStatus =
  | 'received'
  | 'documents_generated'
  | 'lawyer_processing'
  | 'notary_processing'
  | 'processing_spain'
  | 'completed'

export type DocumentType =
  | 'passport'
  | 'ex18_filled'
  | 'power_of_attorney'
  | 'signature'
  | 'other'

export interface Profile {
  id: string
  role: UserRole
  name: string
  email: string
  created_at: string
}

export interface Application {
  id: string
  user_id: string
  status: ApplicationStatus
  case_number: string
  assigned_lawyer_id: string | null
  payment_status: 'pending' | 'paid' | 'refunded'
  created_at: string
  updated_at: string
  profiles?: Profile
}

export interface ApplicationData {
  id: string
  application_id: string
  // Personal
  full_name: string
  date_of_birth: string
  nationality: string
  passport_number: string
  passport_issue_date: string
  passport_expiry_date: string
  address: string
  postal_code: string
  city: string
  country: string
  phone: string
  email: string
  // Spanish purpose
  nie_purpose: NiePurpose
  nie_purpose_other: string | null
  // Additional
  marital_status: MaritalStatus
  gender: Gender
  place_of_birth: string
  father_name: string | null
  mother_name: string | null
  // Signature
  signature_url: string | null
  signature_city: string | null
  form_completed: boolean
}

export type NiePurpose =
  | 'property_purchase'
  | 'bank_account'
  | 'work'
  | 'investment'
  | 'other'

export type MaritalStatus =
  | 'single'
  | 'married'
  | 'divorced'
  | 'widowed'
  | 'partnership'

export type Gender = 'male' | 'female' | 'other'

export interface Document {
  id: string
  application_id: string
  file_url: string
  file_name: string
  type: DocumentType
  uploaded_by: string
  created_at: string
}

export interface Note {
  id: string
  application_id: string
  admin_id: string
  note: string
  created_at: string
  profiles?: Profile
}

export interface Package {
  id: string
  name: string
  description: string
  price_cents: number
  currency: string
  features: string[]
  is_active: boolean
  sort_order: number
  created_at: string
  updated_at: string
}

export interface Lawyer {
  id: string
  name: string
  email: string
  city: string
  country: string
  specialization: string
  active: boolean
}

export const STATUS_ORDER: ApplicationStatus[] = [
  'received',
  'documents_generated',
  'lawyer_processing',
  'notary_processing',
  'processing_spain',
  'completed',
]

export const NIE_PURPOSE_LABELS: Record<NiePurpose, string> = {
  property_purchase: 'Ejendomskøb',
  bank_account: 'Bankkonto',
  work: 'Arbejde',
  investment: 'Investering',
  other: 'Andet',
}
