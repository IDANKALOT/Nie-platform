import { z } from 'zod'

export const ex18Schema = z.object({
  // Personal
  full_name: z.string().min(2, 'Fulde navn er påkrævet'),
  date_of_birth: z.string().min(1, 'Fødselsdato er påkrævet'),
  nationality: z.string().min(1, 'Nationalitet er påkrævet'),
  passport_number: z.string().min(3, 'Pasnummer er påkrævet'),
  passport_issue_date: z.string().min(1, 'Udstedelsesdato er påkrævet'),
  passport_expiry_date: z.string().min(1, 'Udløbsdato er påkrævet'),
  address: z.string().min(5, 'Adresse er påkrævet'),
  postal_code: z.string().min(3, 'Postnummer er påkrævet'),
  city: z.string().min(2, 'By er påkrævet'),
  country: z.string().min(2, 'Land er påkrævet'),
  phone: z.string().min(8, 'Telefonnummer er påkrævet'),
  email: z.string().email('Ugyldig e-mailadresse'),
  // Spanish purpose
  nie_purpose: z.enum(['property_purchase', 'bank_account', 'work', 'investment', 'other'], {
    error: 'Vælg formål med NIE-nummer',
  }),
  nie_purpose_other: z.string().optional(),
  // Additional
  marital_status: z.enum(['single', 'married', 'divorced', 'widowed', 'partnership'], {
    error: 'Vælg civilstatus',
  }),
  gender: z.enum(['male', 'female', 'other'], {
    error: 'Vælg køn',
  }),
  place_of_birth: z.string().min(2, 'Fødested er påkrævet'),
})

export type EX18FormData = z.infer<typeof ex18Schema>
