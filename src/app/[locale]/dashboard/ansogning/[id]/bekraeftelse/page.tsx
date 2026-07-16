import { notFound } from 'next/navigation'
import { getTranslations } from 'next-intl/server'
import { createClient } from '@/lib/supabase/server'
import { Link } from '@/i18n/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle2, FileText, ArrowRight, Home } from 'lucide-react'

interface Props {
  params: Promise<{ id: string }>
}

export default async function BekraeftelsePage({ params }: Props) {
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

  const steps = [t('steps.form'), t('steps.signature'), t('steps.confirmation')]

  return (
    <div className="max-w-2xl">
      <div className="mb-8 bg-white rounded-xl p-4 shadow-sm border border-gray-100">
        <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
          <span>{t('bekraeftelse.stepLabel')}</span>
          <span>100%</span>
        </div>
        <div className="h-2 rounded-full w-full" style={{ backgroundColor: '#2D8E6C' }} />
        <div className="flex justify-between mt-3">
          {steps.map((step) => (
            <span key={step} className="text-xs font-medium" style={{ color: '#2D8E6C' }}>
              {step}
            </span>
          ))}
        </div>
      </div>

      <Card className="bg-white shadow-sm text-center">
        <CardContent className="pt-10 pb-8">
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5"
            style={{ backgroundColor: '#EBF5F0' }}
          >
            <CheckCircle2 className="w-10 h-10" style={{ color: '#2D8E6C' }} />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">{t('bekraeftelse.title')}</h2>
          <p className="text-gray-500 text-sm leading-relaxed max-w-md mx-auto">
            {t('bekraeftelse.text')}
          </p>

          <div className="mt-6 p-4 rounded-xl text-left" style={{ backgroundColor: '#F5F7FA' }}>
            <p className="text-xs font-semibold text-gray-600 mb-2">{t('bekraeftelse.caseNumberLabel')}</p>
            <p className="font-mono font-bold text-gray-900">{application.case_number}</p>
          </div>

          <div className="mt-6 p-4 border border-amber-200 bg-amber-50 rounded-xl text-left">
            <p className="text-xs font-semibold text-amber-800 mb-1">{t('bekraeftelse.whatNextTitle')}</p>
            <ul className="text-xs text-amber-700 space-y-1 list-disc list-inside">
              <li>{t('bekraeftelse.whatNextItem1')}</li>
              <li>{t('bekraeftelse.whatNextItem2')}</li>
              <li>{t('bekraeftelse.whatNextItem3')}</li>
            </ul>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/dashboard/dokumenter">
              <Button variant="outline" className="w-full sm:w-auto">
                <FileText className="w-4 h-4 mr-2" />
                {t('bekraeftelse.viewDocuments')}
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button className="w-full sm:w-auto" style={{ backgroundColor: '#1B3A6B' }}>
                <Home className="w-4 h-4 mr-2" />
                {t('bekraeftelse.goToDashboard')}
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
