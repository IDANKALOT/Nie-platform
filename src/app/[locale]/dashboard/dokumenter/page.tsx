import { createClient } from '@/lib/supabase/server'
import { getTranslations, getLocale } from 'next-intl/server'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import PayButton from '@/components/dashboard/PayButton'
import { FileText, Download, Eye, Lock } from 'lucide-react'
import type { Document } from '@/types'

const typeColors: Record<string, string> = {
  ex18_filled: 'bg-blue-100 text-blue-700',
  power_of_attorney: 'bg-purple-100 text-purple-700',
  signature: 'bg-green-100 text-green-700',
  passport: 'bg-amber-100 text-amber-700',
  other: 'bg-gray-100 text-gray-600',
}

const dateLocales: Record<string, string> = { da: 'da-DK', en: 'en-US', no: 'nb-NO', sv: 'sv-SE', de: 'de-DE', nl: 'nl-NL' }

export default async function DokumenterPage() {
  const t = await getTranslations('dashboard.documents')
  const locale = await getLocale()
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  const { data: applications } = await supabase
    .from('applications')
    .select('id, case_number, payment_status, documents(*)')
    .eq('user_id', user!.id)
    .order('created_at', { ascending: false })

  const allDocuments = applications
    ?.filter((app) => app.payment_status === 'paid')
    .flatMap((app) =>
      (app.documents ?? []).map((doc: Document) => ({
        ...doc,
        case_number: app.case_number,
      }))
    ) ?? []

  const lockedApplications = applications?.filter(
    (app) => app.payment_status !== 'paid' && (app.documents?.length ?? 0) > 0
  ) ?? []

  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h2 className="text-xl font-bold text-gray-900">{t('heading')}</h2>
        <p className="text-sm text-gray-500 mt-0.5">{t('subtitle')}</p>
      </div>

      {lockedApplications.length > 0 && (
        <div className="space-y-3">
          {lockedApplications.map((app) => (
            <div
              key={app.id}
              className="bg-amber-50 rounded-xl border border-amber-200 p-4 flex items-center gap-4"
            >
              <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 bg-amber-100">
                <Lock className="w-5 h-5 text-amber-700" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-amber-900">
                  {t('paymentRequired', { caseNumber: app.case_number })}
                </p>
                <p className="text-xs text-amber-700 mt-0.5">{t('paymentRequiredSubtext')}</p>
              </div>
              <PayButton applicationId={app.id} label={t('payToUnlock')} />
            </div>
          ))}
        </div>
      )}

      {allDocuments.length === 0 && lockedApplications.length === 0 ? (
        <Card className="border-dashed border-2 border-gray-200">
          <CardContent className="py-10 text-center">
            <FileText className="w-10 h-10 text-gray-300 mx-auto mb-3" />
            <p className="text-gray-500 text-sm">{t('emptyText')}</p>
            <p className="text-gray-400 text-xs mt-1">
              {t('emptySubtext')}
            </p>
          </CardContent>
        </Card>
      ) : allDocuments.length > 0 ? (
        <div className="space-y-3">
          {allDocuments.map((doc) => (
            <div
              key={doc.id}
              className="bg-white rounded-xl border border-gray-100 p-4 flex items-center gap-4 shadow-sm"
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                style={{ backgroundColor: '#EBF0FF' }}
              >
                <FileText className="w-5 h-5" style={{ color: '#1B3A6B' }} />
              </div>

              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">{doc.file_name}</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className={`text-xs px-2 py-0.5 rounded-full ${typeColors[doc.type] ?? 'bg-gray-100 text-gray-600'}`}>
                    {t.has(`types.${doc.type}`) ? t(`types.${doc.type}`) : doc.type}
                  </span>
                  <span className="text-xs text-gray-400">{t('caseLabel', { caseNumber: doc.case_number })}</span>
                  <span className="text-xs text-gray-400">
                    {new Date(doc.created_at).toLocaleDateString(dateLocales[locale] ?? 'da-DK')}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <a href={doc.file_url} target="_blank" rel="noopener noreferrer">
                  <Button size="sm" variant="outline" className="gap-1.5">
                    <Eye className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">{t('view')}</span>
                  </Button>
                </a>
                <a href={doc.file_url} download={doc.file_name}>
                  <Button size="sm" variant="outline" className="gap-1.5">
                    <Download className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">{t('download')}</span>
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  )
}
