import { createClient } from '@/lib/supabase/server'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { FileText, Download, Eye } from 'lucide-react'

const typeLabels: Record<string, string> = {
  ex18_filled: 'EX-18 (udfyldt)',
  power_of_attorney: 'Fuldmagt',
  signature: 'Underskrift',
  passport: 'Pas',
  other: 'Andet',
}

const typeColors: Record<string, string> = {
  ex18_filled: 'bg-blue-100 text-blue-700',
  power_of_attorney: 'bg-purple-100 text-purple-700',
  signature: 'bg-green-100 text-green-700',
  passport: 'bg-amber-100 text-amber-700',
  other: 'bg-gray-100 text-gray-600',
}

export default async function DokumenterPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  const { data: applications } = await supabase
    .from('applications')
    .select('id, case_number, documents(*)')
    .eq('user_id', user!.id)
    .order('created_at', { ascending: false })

  const allDocuments = applications?.flatMap((app) =>
    (app.documents ?? []).map((doc: any) => ({
      ...doc,
      case_number: app.case_number,
    }))
  ) ?? []

  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h2 className="text-xl font-bold text-gray-900">Mine dokumenter</h2>
        <p className="text-sm text-gray-500 mt-0.5">Download og se dine NIE-relaterede dokumenter</p>
      </div>

      {allDocuments.length === 0 ? (
        <Card className="border-dashed border-2 border-gray-200">
          <CardContent className="py-10 text-center">
            <FileText className="w-10 h-10 text-gray-300 mx-auto mb-3" />
            <p className="text-gray-500 text-sm">Ingen dokumenter endnu.</p>
            <p className="text-gray-400 text-xs mt-1">
              Dokumenter genereres automatisk, når du har indsendt din ansøgning.
            </p>
          </CardContent>
        </Card>
      ) : (
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
                    {typeLabels[doc.type] ?? doc.type}
                  </span>
                  <span className="text-xs text-gray-400">Sag #{doc.case_number}</span>
                  <span className="text-xs text-gray-400">
                    {new Date(doc.created_at).toLocaleDateString('da-DK')}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <a href={doc.file_url} target="_blank" rel="noopener noreferrer">
                  <Button size="sm" variant="outline" className="gap-1.5">
                    <Eye className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Vis</span>
                  </Button>
                </a>
                <a href={doc.file_url} download={doc.file_name}>
                  <Button size="sm" variant="outline" className="gap-1.5">
                    <Download className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Download</span>
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
