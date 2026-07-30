import { createClient } from '@/lib/supabase/server'
import { getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import StatusStepper from '@/components/dashboard/StatusStepper'
import PaymentStatCard from '@/components/dashboard/PaymentStatCard'
import { FileText, FolderOpen, CreditCard, ArrowRight, Plus } from 'lucide-react'
import { type ApplicationStatus } from '@/types'

export default async function DashboardPage() {
  const t = await getTranslations('dashboard.page')
  const tStatus = await getTranslations('status.application')
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  const { data: applications } = await supabase
    .from('applications')
    .select('*, application_data(*), documents(*)')
    .eq('user_id', user!.id)
    .order('created_at', { ascending: false })

  const latest = applications?.[0]

  const statusColors: Record<string, string> = {
    received: 'bg-blue-100 text-blue-700',
    documents_generated: 'bg-purple-100 text-purple-700',
    lawyer_processing: 'bg-amber-100 text-amber-700',
    notary_processing: 'bg-orange-100 text-orange-700',
    processing_spain: 'bg-indigo-100 text-indigo-700',
    completed: 'bg-green-100 text-green-700',
  }

  return (
    <div className="space-y-6 max-w-5xl">
      {/* Welcome */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900">{t('greeting')}</h2>
        <p className="text-gray-500 mt-1">{t('subtitle')}</p>
      </div>

      {!latest ? (
        /* No application yet */
        <Card className="border-dashed border-2 border-gray-200 bg-white/50">
          <CardContent className="py-12 text-center">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4"
              style={{ backgroundColor: '#EBF0FF' }}
            >
              <FileText className="w-7 h-7" style={{ color: '#1B3A6B' }} />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">{t('noApplicationTitle')}</h3>
            <p className="text-sm text-gray-500 mb-6 max-w-xs mx-auto">
              {t('noApplicationText')}
            </p>
            <Link href="/dashboard/ansogning/ny">
              <Button style={{ backgroundColor: '#1B3A6B' }}>
                <Plus className="w-4 h-4 mr-2" />
                {t('startApplication')}
              </Button>
            </Link>
          </CardContent>
        </Card>
      ) : (
        <>
          {/* Current application status */}
          <Card className="bg-white shadow-sm">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">{t('caseLabel', { caseNumber: latest.case_number })}</CardTitle>
                <span
                  className={`text-xs font-medium px-3 py-1 rounded-full ${statusColors[latest.status] ?? 'bg-gray-100 text-gray-600'}`}
                >
                  {tStatus(latest.status as ApplicationStatus)}
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <StatusStepper currentStatus={latest.status as ApplicationStatus} />
            </CardContent>
          </Card>

          {/* Quick stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                icon: FileText,
                label: t('statApplicationStatus'),
                value: tStatus(latest.status as ApplicationStatus) ?? '–',
                href: '/dashboard/ansogning',
              },
              {
                icon: FolderOpen,
                label: t('statDocuments'),
                value: `${latest.documents?.length ?? 0} ${t('filesSuffix')}`,
                href: '/dashboard/dokumenter',
              },
            ].map((stat) => (
              <Link key={stat.label} href={stat.href}>
                <Card className="bg-white hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="pt-5 pb-4">
                    <div className="flex items-center justify-between mb-2">
                      <stat.icon className="w-5 h-5 text-gray-400" />
                      <ArrowRight className="w-4 h-4 text-gray-300" />
                    </div>
                    <p className="text-xs text-gray-400">{stat.label}</p>
                    <p className="font-semibold text-gray-900 mt-0.5">{stat.value}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}

            {latest.payment_status === 'paid' ? (
              <Link href="/dashboard/dokumenter">
                <Card className="bg-white hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="pt-5 pb-4">
                    <div className="flex items-center justify-between mb-2">
                      <CreditCard className="w-5 h-5 text-gray-400" />
                      <ArrowRight className="w-4 h-4 text-gray-300" />
                    </div>
                    <p className="text-xs text-gray-400">{t('statPayment')}</p>
                    <p className="font-semibold text-gray-900 mt-0.5">{t('paid')}</p>
                  </CardContent>
                </Card>
              </Link>
            ) : (
              <PaymentStatCard
                applicationId={latest.id}
                label={t('statPayment')}
                value={t('pending')}
              />
            )}
          </div>

          {/* Form completion prompt */}
          {latest.application_data && !latest.application_data.form_completed && (
            <Card className="border-amber-200 bg-amber-50">
              <CardContent className="py-4 flex items-center justify-between gap-4">
                <div>
                  <p className="font-medium text-amber-800 text-sm">{t('incompleteTitle')}</p>
                  <p className="text-xs text-amber-600 mt-0.5">
                    {t('incompleteText')}
                  </p>
                </div>
                <Link href={`/dashboard/ansogning/${latest.id}/formular`}>
                  <Button size="sm" className="bg-amber-600 hover:bg-amber-700 text-white shrink-0">
                    {t('continueButton')}
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          )}
        </>
      )}
    </div>
  )
}
