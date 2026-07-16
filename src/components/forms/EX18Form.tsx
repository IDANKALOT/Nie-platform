'use client'

import { useEffect, useMemo } from 'react'
import { useTranslations } from 'next-intl'
import { useRouter } from '@/i18n/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { getEX18Schema, type EX18FormData } from '@/lib/validations'
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

export default function EX18Form({ applicationId, initialData }: Props) {
  const t = useTranslations('forms.ex18')
  const tValidation = useTranslations('forms')
  const router = useRouter()
  const supabase = createClient()

  const purposes = [
    { value: 'property_purchase', label: t('purposes.property_purchase') },
    { value: 'bank_account', label: t('purposes.bank_account') },
    { value: 'work', label: t('purposes.work') },
    { value: 'investment', label: t('purposes.investment') },
    { value: 'other', label: t('purposes.other') },
  ] as const

  const maritalStatuses = [
    { value: 'single', label: t('maritalStatuses.single') },
    { value: 'married', label: t('maritalStatuses.married') },
    { value: 'divorced', label: t('maritalStatuses.divorced') },
    { value: 'widowed', label: t('maritalStatuses.widowed') },
    { value: 'partnership', label: t('maritalStatuses.partnership') },
  ] as const

  const genders = [
    { value: 'male', label: t('genders.male') },
    { value: 'female', label: t('genders.female') },
    { value: 'other', label: t('genders.other') },
  ] as const

  const schema = useMemo(() => getEX18Schema(tValidation), [tValidation])

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<EX18FormData>({
    resolver: zodResolver(schema),
    defaultValues: initialData ?? {},
  })

  // Autosave every 30 seconds
  useEffect(() => {
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

  async function upsertData(data: Partial<EX18FormData> & { form_completed: boolean }) {
    return supabase
      .from('application_data')
      .upsert(
        { ...data, application_id: applicationId },
        { onConflict: 'application_id' }
      )
  }

  async function onSave(data: EX18FormData) {
    const { error } = await upsertData({ ...data, form_completed: false })
    if (error) {
      toast.error(t('saveError') + error.message)
      return
    }
    toast.success(t('saveSuccess'))
  }

  async function onSubmit(data: EX18FormData) {
    const { error } = await upsertData({ ...data, form_completed: true })
    if (error) {
      toast.error(t('submitError') + error.message)
      return
    }
    router.push(`/dashboard/ansogning/${applicationId}/underskriv`)
  }

  function onValidationError() {
    toast.error(t('validationError'))
    setTimeout(() => {
      document.querySelector('.text-red-500')?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }, 50)
  }

  const watchPurpose = watch('nie_purpose')

  return (
    <form onSubmit={handleSubmit(onSubmit, onValidationError)} className="space-y-6">
      {/* Personal data */}
      <Card className="bg-white shadow-sm">
        <CardHeader className="pb-3">
          <CardTitle className="text-base" style={{ color: '#1B3A6B' }}>
            {t('personalInfoTitle')}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label htmlFor="full_name">{t('fullNameLabel')}</Label>
              <Input id="full_name" {...register('full_name')} placeholder={t('fullNamePlaceholder')} />
              {errors.full_name && <p className="text-xs text-red-500">{errors.full_name.message}</p>}
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="date_of_birth">{t('dateOfBirthLabel')}</Label>
              <Input id="date_of_birth" type="date" {...register('date_of_birth')} />
              {errors.date_of_birth && <p className="text-xs text-red-500">{errors.date_of_birth.message}</p>}
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="nationality">{t('nationalityLabel')}</Label>
              <Input id="nationality" {...register('nationality')} placeholder={t('nationalityPlaceholder')} />
              {errors.nationality && <p className="text-xs text-red-500">{errors.nationality.message}</p>}
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="place_of_birth">{t('placeOfBirthLabel')}</Label>
              <Input id="place_of_birth" {...register('place_of_birth')} placeholder={t('placeOfBirthPlaceholder')} />
              {errors.place_of_birth && <p className="text-xs text-red-500">{errors.place_of_birth.message}</p>}
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="country">{t('countryLabel')}</Label>
              <Input id="country" {...register('country')} placeholder={t('countryPlaceholder')} />
              {errors.country && <p className="text-xs text-red-500">{errors.country.message}</p>}
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="father_name">{t('fatherNameLabel')}</Label>
              <Input id="father_name" {...register('father_name')} placeholder={t('parentNamePlaceholder')} />
              {errors.father_name && <p className="text-xs text-red-500">{errors.father_name.message}</p>}
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="mother_name">{t('motherNameLabel')}</Label>
              <Input id="mother_name" {...register('mother_name')} placeholder={t('parentNamePlaceholder')} />
              {errors.mother_name && <p className="text-xs text-red-500">{errors.mother_name.message}</p>}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Passport */}
      <Card className="bg-white shadow-sm">
        <CardHeader className="pb-3">
          <CardTitle className="text-base" style={{ color: '#1B3A6B' }}>{t('passportInfoTitle')}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="space-y-1.5">
              <Label htmlFor="passport_number">{t('passportNumberLabel')}</Label>
              <Input id="passport_number" {...register('passport_number')} placeholder={t('passportNumberPlaceholder')} />
              {errors.passport_number && <p className="text-xs text-red-500">{errors.passport_number.message}</p>}
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="passport_issue_date">{t('passportIssueDateLabel')}</Label>
              <Input id="passport_issue_date" type="date" {...register('passport_issue_date')} />
              {errors.passport_issue_date && <p className="text-xs text-red-500">{errors.passport_issue_date.message}</p>}
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="passport_expiry_date">{t('passportExpiryDateLabel')}</Label>
              <Input id="passport_expiry_date" type="date" {...register('passport_expiry_date')} />
              {errors.passport_expiry_date && <p className="text-xs text-red-500">{errors.passport_expiry_date.message}</p>}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Address */}
      <Card className="bg-white shadow-sm">
        <CardHeader className="pb-3">
          <CardTitle className="text-base" style={{ color: '#1B3A6B' }}>{t('contactAddressTitle')}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-1.5">
            <Label htmlFor="address">{t('addressLabel')}</Label>
            <Input id="address" {...register('address')} placeholder={t('addressPlaceholder')} />
            {errors.address && <p className="text-xs text-red-500">{errors.address.message}</p>}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div className="space-y-1.5">
              <Label htmlFor="postal_code">{t('postalCodeLabel')}</Label>
              <Input id="postal_code" {...register('postal_code')} placeholder={t('postalCodePlaceholder')} />
              {errors.postal_code && <p className="text-xs text-red-500">{errors.postal_code.message}</p>}
            </div>
            <div className="col-span-2 space-y-1.5">
              <Label htmlFor="city">{t('cityLabel')}</Label>
              <Input id="city" {...register('city')} placeholder={t('cityPlaceholder')} />
              {errors.city && <p className="text-xs text-red-500">{errors.city.message}</p>}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label htmlFor="phone">{t('phoneLabel')}</Label>
              <Input id="phone" {...register('phone')} placeholder={t('phonePlaceholder')} />
              {errors.phone && <p className="text-xs text-red-500">{errors.phone.message}</p>}
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="email">{t('emailLabel')}</Label>
              <Input id="email" type="email" {...register('email')} placeholder={t('emailPlaceholder')} />
              {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="signature_city">{t('signatureCityLabel')}</Label>
              <Input id="signature_city" {...register('signature_city')} placeholder={t('signatureCityPlaceholder')} />
              <p className="text-xs text-gray-400">{t('signatureCityHint')}</p>
              {errors.signature_city && <p className="text-xs text-red-500">{errors.signature_city.message}</p>}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* NIE Purpose */}
      <Card className="bg-white shadow-sm">
        <CardHeader className="pb-3">
          <CardTitle className="text-base" style={{ color: '#1B3A6B' }}>{t('purposeTitle')}</CardTitle>
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
              <Label htmlFor="nie_purpose_other">{t('purposeOtherLabel')}</Label>
              <Textarea id="nie_purpose_other" {...register('nie_purpose_other')} rows={2} />
            </div>
          )}
        </CardContent>
      </Card>

      {/* Additional info */}
      <Card className="bg-white shadow-sm">
        <CardHeader className="pb-3">
          <CardTitle className="text-base" style={{ color: '#1B3A6B' }}>{t('additionalInfoTitle')}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label>{t('maritalStatusLabel')}</Label>
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
              <Label>{t('genderLabel')}</Label>
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
          {t('saveDraft')}
        </Button>
        <Button
          type="submit"
          className="ml-auto"
          style={{ backgroundColor: '#1B3A6B' }}
          disabled={isSubmitting}
        >
          {isSubmitting ? t('submitting') : t('continueToSignature')}
          {!isSubmitting && <ArrowRight className="w-4 h-4 ml-2" />}
        </Button>
      </div>
    </form>
  )
}
