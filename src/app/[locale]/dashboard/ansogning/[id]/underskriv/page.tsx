import { notFound, redirect } from 'next/navigation'
import { getTranslations } from 'next-intl/server'
import { createClient } from '@/lib/supabase/server'
import SignaturePage from '@/components/forms/SignaturePage'

interface Props {
  params: Promise<{ id: string }>
}

export default async function UnderscrivPage({ params }: Props) {
  const { id } = await params
  const t = await getTranslations('dashboard')
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  const { data: application } = await supabase
    .from('applications')
    .select('*, application_data(*)')
    .eq('id', id)
    .eq('user_id', user!.id)
    .single()

  if (!application) notFound()

  if (!application.application_data?.form_completed) {
    redirect(`/dashboard/ansogning/${id}/formular`)
  }

  const steps = [t('steps.form'), t('steps.signature'), t('steps.confirmation')]

  return (
    <div className="max-w-3xl">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-900">{t('underskriv.title')}</h2>
        <p className="text-sm text-gray-500 mt-1">
          {t('underskriv.subtitle')}
        </p>
      </div>

      {/* Progress */}
      <div className="mb-8 bg-white rounded-xl p-4 shadow-sm border border-gray-100">
        <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
          <span>{t('underskriv.stepLabel')}</span>
          <span>66%</span>
        </div>
        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
          <div className="h-full rounded-full w-2/3" style={{ backgroundColor: '#1B3A6B' }} />
        </div>
        <div className="flex justify-between mt-3">
          {steps.map((step, i) => (
            <span
              key={step}
              className="text-xs font-medium"
              style={i === 1 ? { color: '#1B3A6B' } : { color: i < 1 ? '#2D8E6C' : '#9CA3AF' }}
            >
              {step}
            </span>
          ))}
        </div>
      </div>

      <SignaturePage
        applicationId={id}
        existingSignatureUrl={application.application_data?.signature_url ?? null}
      />
    </div>
  )
}
