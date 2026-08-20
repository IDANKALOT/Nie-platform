import { redirect, notFound } from 'next/navigation'
import { getTranslations } from 'next-intl/server'
import { createClient } from '@/lib/supabase/server'
import EX18Form from '@/components/forms/EX18Form'
import { PURPLE } from '@/lib/theme'

interface Props {
  params: Promise<{ id: string }>
}

export default async function FormularPage({ params }: Props) {
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

  if (application.application_data?.form_completed) {
    redirect(`/dashboard/ansogning/${id}/underskriv`)
  }

  const steps = [t('steps.form'), t('steps.signature'), t('steps.confirmation')]

  return (
    <div className="max-w-3xl">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-900">{t('formular.title')}</h2>
        <p className="text-sm text-gray-500 mt-1">
          {t('formular.subtitle')}
        </p>
      </div>

      {/* Progress bar */}
      <div className="mb-8 bg-white rounded-xl p-4 shadow-sm border border-gray-100">
        <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
          <span>{t('formular.stepLabel')}</span>
          <span>33%</span>
        </div>
        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
          <div className="h-full rounded-full w-1/3" style={{ backgroundColor: PURPLE }} />
        </div>
        <div className="flex justify-between mt-3">
          {steps.map((step, i) => (
            <span
              key={step}
              className={`text-xs font-medium ${i === 0 ? 'font-semibold' : 'text-gray-400'}`}
              style={i === 0 ? { color: PURPLE } : undefined}
            >
              {step}
            </span>
          ))}
        </div>
      </div>

      <EX18Form
        applicationId={id}
        initialData={application.application_data}
      />
    </div>
  )
}
