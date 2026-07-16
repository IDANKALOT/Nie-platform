import { z } from 'zod'
import type { useTranslations } from 'next-intl'

type FormsTranslator = ReturnType<typeof useTranslations>

export function getEX18Schema(t: FormsTranslator) {
  return z.object({
    // Personal
    full_name: z.string().min(2, t('validation.fullName')),
    date_of_birth: z.string().min(1, t('validation.dateOfBirth')),
    nationality: z.string().min(1, t('validation.nationality')),
    passport_number: z.string().min(3, t('validation.passportNumber')),
    passport_issue_date: z.string().min(1, t('validation.passportIssueDate')),
    passport_expiry_date: z.string().min(1, t('validation.passportExpiryDate')),
    address: z.string().min(5, t('validation.address')),
    postal_code: z.string().min(3, t('validation.postalCode')),
    city: z.string().min(2, t('validation.city')),
    country: z.string().min(2, t('validation.country')),
    phone: z.string().min(8, t('validation.phone')),
    email: z.string().email(t('validation.email')),
    // Spanish purpose
    nie_purpose: z.enum(['property_purchase', 'bank_account', 'work', 'investment', 'other'], {
      error: t('validation.niePurpose'),
    }),
    nie_purpose_other: z.string().optional(),
    // Additional
    marital_status: z.enum(['single', 'married', 'divorced', 'widowed', 'partnership'], {
      error: t('validation.maritalStatus'),
    }),
    gender: z.enum(['male', 'female', 'other'], {
      error: t('validation.gender'),
    }),
    place_of_birth: z.string().min(2, t('validation.placeOfBirth')),
    father_name: z.string().min(1, t('validation.fatherName')),
    mother_name: z.string().min(1, t('validation.motherName')),
    signature_city: z.string().min(1, t('validation.signatureCity')),
  })
}

export type EX18FormData = z.infer<ReturnType<typeof getEX18Schema>>
