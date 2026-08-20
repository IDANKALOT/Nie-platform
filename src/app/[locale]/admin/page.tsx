import { createClient } from '@/lib/supabase/server'
import { getTranslations, getLocale } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { FileText, Clock, CheckCircle2, CreditCard, ArrowRight } from 'lucide-react'
import { type ApplicationStatus } from '@/types'
import { PURPLE } from '@/lib/theme'

const dateLocales: Record<string, string> = { da: 'da-DK', en: 'en-US', no: 'nb-NO', sv: 'sv-SE', de: 'de-DE', nl: 'nl-NL' }

export default async function AdminDashboardPage() {
  const t = await getTranslations('admin.dashboard')
  const tStatus = await getTranslations('status.application')
  const locale = await getLocale()
  const supabase = await createClient()

  const { data: applications } = await supabase
    .from('applications')
    .select('id, status, case_number, created_at, payment_status, profiles(name, email)')
    .order('created_at', { ascending: false })

  const stats = {
    total: applications?.length ?? 0,
    received: applications?.filter((a) => a.status === 'received').length ?? 0,
    processing: applications?.filter((a) =>
      ['documents_generated', 'lawyer_processing', 'notary_processing', 'processing_spain'].includes(a.status)
    ).length ?? 0,
    completed: applications?.filter((a) => a.status === 'completed').length ?? 0,
    paid: applications?.filter((a) => a.payment_status === 'paid').length ?? 0,
  }

  const recent = applications?.slice(0, 10) ?? []

  const statusColors: Record<string, string> = {
    received: 'bg-blue-100 text-blue-700',
    documents_generated: 'bg-purple-100 text-purple-700',
    lawyer_processing: 'bg-amber-100 text-amber-700',
    notary_processing: 'bg-orange-100 text-orange-700',
    processing_spain: 'bg-indigo-100 text-indigo-700',
    completed: 'bg-green-100 text-green-700',
  }

  const statCards = [
    { label: t('statNew'), value: stats.received, icon: FileText, color: PURPLE },
    { label: t('statProcessing'), value: stats.processing, icon: Clock, color: '#D97706' },
    { label: t('statCompleted'), value: stats.completed, icon: CheckCircle2, color: '#2D8E6C' },
    { label: t('statPaid'), value: stats.paid, icon: CreditCard, color: '#7C3AED' },
  ]

  return (
    <div className="space-y-6 max-w-6xl">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">{t('heading')}</h2>
        <p className="text-gray-500 text-sm mt-1">{t('subtitle')}</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {statCards.map((stat) => (
          <Card key={stat.label} className="bg-white shadow-sm">
            <CardContent className="pt-5 pb-4">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center mb-3"
                style={{ backgroundColor: stat.color + '20' }}
              >
                <stat.icon className="w-4.5 h-4.5" style={{ color: stat.color }} />
              </div>
              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              <p className="text-xs text-gray-500 mt-0.5">{stat.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent applications */}
      <Card className="bg-white shadow-sm">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-base">{t('recentApplications')}</CardTitle>
            <Link
              href="/admin/ansogninger"
              className="text-xs font-medium flex items-center gap-1 hover:underline"
              style={{ color: PURPLE }}
            >
              {t('viewAll')}
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500">{t('tableCase')}</th>
                  <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500">{t('tableName')}</th>
                  <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500">{t('tableStatus')}</th>
                  <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500">{t('tablePayment')}</th>
                  <th className="text-left px-6 py-3 text-xs font-semibold text-gray-500">{t('tableDate')}</th>
                  <th className="px-6 py-3" />
                </tr>
              </thead>
              <tbody>
                {recent.map((app) => (
                  <tr key={app.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-3 font-mono text-xs font-medium text-gray-700">
                      {app.case_number}
                    </td>
                    <td className="px-6 py-3 text-gray-700">
                      {(app.profiles as any)?.name ?? '–'}
                    </td>
                    <td className="px-6 py-3">
                      <span className={`text-xs px-2 py-1 rounded-full font-medium ${statusColors[app.status] ?? 'bg-gray-100 text-gray-600'}`}>
                        {tStatus(app.status as ApplicationStatus)}
                      </span>
                    </td>
                    <td className="px-6 py-3">
                      <span className={`text-xs font-medium ${app.payment_status === 'paid' ? 'text-green-600' : 'text-amber-600'}`}>
                        {app.payment_status === 'paid' ? t('paid') : t('pending')}
                      </span>
                    </td>
                    <td className="px-6 py-3 text-xs text-gray-400">
                      {new Date(app.created_at).toLocaleDateString(dateLocales[locale] ?? 'da-DK')}
                    </td>
                    <td className="px-6 py-3 text-right">
                      <Link
                        href={`/admin/ansogninger/${app.id}`}
                        className="text-xs font-medium hover:underline"
                        style={{ color: PURPLE }}
                      >
                        {t('viewCase')}
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {recent.length === 0 && (
              <p className="text-center text-sm text-gray-400 py-10">{t('empty')}</p>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
