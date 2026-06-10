'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ex18Schema, type EX18FormData } from '@/lib/validations'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { createClient } from '@/lib/supabase/client'
import { toast } from 'sonner'
import { ArrowRight, Save } from 'lucide-react'

interface Props {
  applicationId: string
  initialData: Partial<EX18FormData> | null
}

const purposes = [
  { value: 'property_purchase', label: 'Ejendomskøb' },
  { value: 'bank_account', label: 'Bankkonto' },
  { value: 'work', label: 'Arbejde' },
  { value: 'investment', label: 'Investering' },
  { value: 'other', label: 'Andet' },
] as const

const maritalStatuses = [
  { value: 'single', label: 'Ugift' },
  { value: 'married', label: 'Gift' },
  { value: 'divorced', label: 'Skilt' },
  { value: 'widowed', label: 'Enke/enkemand' },
  { value: 'partnership', label: 'Registreret partner' },
] as const

const genders = [
  { value: 'male', label: 'Mand' },
  { value: 'female', label: 'Kvinde' },
  { value: 'other', label: 'Andet' },
] as const

export default function EX18Form({ applicationId, initialData }: Props) {
  const router = useRouter()
  const supabase = createClient()

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isDirty },
  } = useForm<EX18FormData>({
    resolver: zodResolver(ex18Schema),
    defaultValues: initialData ?? {},
  })

  // Autosave every 30 seconds
  useEffect(() => {
    const values = watch()
    const interval = setInterval(async () => {
      const current = watch()
      if (Object.keys(current).some((k) => current[k as keyof EX18FormData])) {
        await supabase
          .from('application_data')
          .update(current)
          .eq('application_id', applicationId)
      }
    }, 30000)

    return () => clearInterval(interval)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [applicationId])

  async function onSave(data: EX18FormData) {
    const { error } = await supabase
      .from('application_data')
      .update({ ...data, form_completed: false })
      .eq('application_id', applicationId)

    if (error) {
      toast.error('Fejl ved gemning. Prøv igen.')
      return
    }
    toast.success('Gemt!')
  }

  async function onSubmit(data: EX18FormData) {
    const { error } = await supabase
      .from('application_data')
      .update({ ...data, form_completed: true })
      .eq('application_id', applicationId)

    if (error) {
      toast.error('Fejl ved indsendelse.')
      return
    }

    toast.success('Formular fuldført! Gå til underskrift.')
    router.push(`/dashboard/ansogning/${applicationId}/underskriv`)
  }

  const watchPurpose = watch('nie_purpose')

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Personal data */}
      <Card className="bg-white shadow-sm">
        <CardHeader className="pb-3">
          <CardTitle className="text-base" style={{ color: '#1B3A6B' }}>
            Personlige oplysninger
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label htmlFor="full_name">Fulde navn *</Label>
              <Input id="full_name" {...register('full_name')} placeholder="Som i passet" />
              {errors.full_name && <p className="text-xs text-red-500">{errors.full_name.message}</p>}
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="date_of_birth">Fødselsdato *</Label>
              <Input id="date_of_birth" type="date" {...register('date_of_birth')} />
              {errors.date_of_birth && <p className="text-xs text-red-500">{errors.date_of_birth.message}</p>}
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="nationality">Nationalitet *</Label>
              <Input id="nationality" {...register('nationality')} placeholder="Dansk" />
              {errors.nationality && <p className="text-xs text-red-500">{errors.nationality.message}</p>}
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="place_of_birth">Fødested *</Label>
              <Input id="place_of_birth" {...register('place_of_birth')} placeholder="By, Land" />
              {errors.place_of_birth && <p className="text-xs text-red-500">{errors.place_of_birth.message}</p>}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Passport */}
      <Card className="bg-white shadow-sm">
        <CardHeader className="pb-3">
          <CardTitle className="text-base" style={{ color: '#1B3A6B' }}>Pasoplysninger</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="space-y-1.5">
              <Label htmlFor="passport_number">Pasnummer *</Label>
              <Input id="passport_number" {...register('passport_number')} placeholder="AB123456" />
              {errors.passport_number && <p className="text-xs text-red-500">{errors.passport_number.message}</p>}
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="passport_issue_date">Udstedelsesdato *</Label>
              <Input id="passport_issue_date" type="date" {...register('passport_issue_date')} />
              {errors.passport_issue_date && <p className="text-xs text-red-500">{errors.passport_issue_date.message}</p>}
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="passport_expiry_date">Udløbsdato *</Label>
              <Input id="passport_expiry_date" type="date" {...register('passport_expiry_date')} />
              {errors.passport_expiry_date && <p className="text-xs text-red-500">{errors.passport_expiry_date.message}</p>}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Address */}
      <Card className="bg-white shadow-sm">
        <CardHeader className="pb-3">
          <CardTitle className="text-base" style={{ color: '#1B3A6B' }}>Adresse</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-1.5">
            <Label htmlFor="address">Adresse *</Label>
            <Input id="address" {...register('address')} placeholder="Gadenavn og nummer" />
            {errors.address && <p className="text-xs text-red-500">{errors.address.message}</p>}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="space-y-1.5">
              <Label htmlFor="postal_code">Postnummer *</Label>
              <Input id="postal_code" {...register('postal_code')} placeholder="2100" />
              {errors.postal_code && <p className="text-xs text-red-500">{errors.postal_code.message}</p>}
            </div>
            <div className="col-span-2 space-y-1.5">
              <Label htmlFor="city">By *</Label>
              <Input id="city" {...register('city')} placeholder="København" />
              {errors.city && <p className="text-xs text-red-500">{errors.city.message}</p>}
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="country">Land *</Label>
              <Input id="country" {...register('country')} placeholder="Danmark" />
              {errors.country && <p className="text-xs text-red-500">{errors.country.message}</p>}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label htmlFor="phone">Telefonnummer *</Label>
              <Input id="phone" {...register('phone')} placeholder="+45 12 34 56 78" />
              {errors.phone && <p className="text-xs text-red-500">{errors.phone.message}</p>}
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="email">E-mail *</Label>
              <Input id="email" type="email" {...register('email')} placeholder="din@email.dk" />
              {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* NIE Purpose */}
      <Card className="bg-white shadow-sm">
        <CardHeader className="pb-3">
          <CardTitle className="text-base" style={{ color: '#1B3A6B' }}>Formål med NIE-nummer</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {purposes.map((p) => (
              <label
                key={p.value}
                className={`flex items-center gap-2 p-3 rounded-lg border cursor-pointer transition-all text-sm ${
                  watchPurpose === p.value
                    ? 'border-blue-300 bg-blue-50 font-medium'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                style={watchPurpose === p.value ? { borderColor: '#1B3A6B', backgroundColor: '#EBF0FF' } : undefined}
              >
                <input
                  type="radio"
                  value={p.value}
                  {...register('nie_purpose')}
                  className="accent-blue-700"
                />
                {p.label}
              </label>
            ))}
          </div>
          {errors.nie_purpose && <p className="text-xs text-red-500">{errors.nie_purpose.message}</p>}
          {watchPurpose === 'other' && (
            <div className="space-y-1.5">
              <Label htmlFor="nie_purpose_other">Beskriv formålet *</Label>
              <Textarea id="nie_purpose_other" {...register('nie_purpose_other')} rows={2} />
            </div>
          )}
        </CardContent>
      </Card>

      {/* Additional info */}
      <Card className="bg-white shadow-sm">
        <CardHeader className="pb-3">
          <CardTitle className="text-base" style={{ color: '#1B3A6B' }}>Yderligere oplysninger</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label>Civilstatus *</Label>
              <div className="space-y-2">
                {maritalStatuses.map((m) => (
                  <label key={m.value} className="flex items-center gap-2 text-sm cursor-pointer">
                    <input type="radio" value={m.value} {...register('marital_status')} className="accent-blue-700" />
                    {m.label}
                  </label>
                ))}
              </div>
              {errors.marital_status && <p className="text-xs text-red-500">{errors.marital_status.message}</p>}
            </div>
            <div className="space-y-2">
              <Label>Køn *</Label>
              <div className="space-y-2">
                {genders.map((g) => (
                  <label key={g.value} className="flex items-center gap-2 text-sm cursor-pointer">
                    <input type="radio" value={g.value} {...register('gender')} className="accent-blue-700" />
                    {g.label}
                  </label>
                ))}
              </div>
              {errors.gender && <p className="text-xs text-red-500">{errors.gender.message}</p>}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Actions */}
      <div className="flex items-center gap-3 pb-6">
        <Button
          type="button"
          variant="outline"
          onClick={handleSubmit(onSave)}
        >
          <Save className="w-4 h-4 mr-2" />
          Gem kladde
        </Button>
        <Button
          type="submit"
          className="ml-auto"
          style={{ backgroundColor: '#1B3A6B' }}
        >
          Fortsæt til underskrift
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </form>
  )
}
