import { notFound } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import AdminApplicationActions from '@/components/admin/AdminApplicationActions'
import { STATUS_LABELS, STATUS_ORDER, type ApplicationStatus } from '@/types'
import { FileText, Download } from 'lucide-react'
import Link from 'next/link'

interface Props {
  params: Promise<{ id: string }>
}

export default async function AdminApplicationDetailPage({ params }: Props) {
  const { id } = await params
  const supabase = await createClient()

  const { data: application } = await supabase
    .from('applications')
    .select('*, profiles(*), application_data(*), documents(*), notes(*, profiles(name))')
    .eq('id', id)
    .single()

  if (!application) notFound()

  const d = application.application_data as any
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
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <h2 className="text-xl font-bold text-gray-900">Sag #{application.case_number}</h2>
            <span className={`text-xs px-2 py-1 rounded-full font-medium ${statusColors[application.status] ?? ''}`}>
              {STATUS_LABELS[application.status as ApplicationStatus]}
            </span>
          </div>
          <p className="text-sm text-gray-500">
            Oprettet {new Date(application.created_at).toLocaleDateString('da-DK')} ·{' '}
            {(application.profiles as any)?.email}
          </p>
        </div>
        <AdminApplicationActions
          applicationId={id}
          currentStatus={application.status as ApplicationStatus}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Application data */}
        <div className="lg:col-span-2 space-y-5">
          {d && (
            <>
              <Card className="bg-white shadow-sm">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">Personlige oplysninger</CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-2 gap-3">
                  {[
                    ['Fulde navn', d.full_name],
                    ['Fødselsdato', d.date_of_birth],
                    ['Nationalitet', d.nationality],
                    ['Fødested', d.place_of_birth],
                    ['Køn', d.gender],
                    ['Civilstatus', d.marital_status],
                    ['Telefon', d.phone],
                    ['E-mail', d.email],
                  ].map(([label, value]) => (
                    <div key={label}>
                      <p className="text-xs text-gray-400">{label}</p>
                      <p className="text-sm font-medium text-gray-800">{value || '–'}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="bg-white shadow-sm">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">Pas & adresse</CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-2 gap-3">
                  {[
                    ['Pasnummer', d.passport_number],
                    ['Udstedelsesdato', d.passport_issue_date],
                    ['Udløbsdato', d.passport_expiry_date],
                    ['Adresse', d.address],
                    ['Postnr. & by', `${d.postal_code} ${d.city}`],
                    ['Land', d.country],
                    ['NIE formål', d.nie_purpose],
                  ].map(([label, value]) => (
                    <div key={label}>
                      <p className="text-xs text-gray-400">{label}</p>
                      <p className="text-sm font-medium text-gray-800">{value || '–'}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Signature */}
              {d.signature_url && (
                <Card className="bg-white shadow-sm">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm">Digital underskrift</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={d.signature_url}
                      alt="Underskrift"
                      className="max-h-20 object-contain border border-gray-100 rounded p-2"
                    />
                  </CardContent>
                </Card>
              )}
            </>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-5">
          {/* Documents */}
          <Card className="bg-white shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm">Dokumenter</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {application.documents?.length === 0 && (
                <p className="text-xs text-gray-400">Ingen dokumenter endnu</p>
              )}
              {application.documents?.map((doc: any) => (
                <div key={doc.id} className="flex items-center gap-2">
                  <FileText className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                  <span className="text-xs text-gray-700 flex-1 truncate">{doc.file_name}</span>
                  <a href={doc.file_url} download className="text-gray-400 hover:text-gray-600">
                    <Download className="w-3.5 h-3.5" />
                  </a>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Notes */}
          <Card className="bg-white shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm">Noter</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {application.notes?.map((note: any) => (
                <div key={note.id} className="p-2 bg-gray-50 rounded text-xs">
                  <p className="text-gray-600">{note.note}</p>
                  <p className="text-gray-400 mt-1">
                    {note.profiles?.name} · {new Date(note.created_at).toLocaleDateString('da-DK')}
                  </p>
                </div>
              ))}
              {!application.notes?.length && (
                <p className="text-xs text-gray-400">Ingen noter endnu</p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
