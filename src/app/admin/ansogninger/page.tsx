import { createClient } from '@/lib/supabase/server'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { STATUS_LABELS, type ApplicationStatus } from '@/types'

interface SearchParams {
  search?: string
  status?: string
}

interface Props {
  searchParams: Promise<SearchParams>
}

export default async function AdminAnsogningerPage({ searchParams }: Props) {
  const params = await searchParams
  const supabase = await createClient()

  let query = supabase
    .from('applications')
    .select('*, profiles(name, email), application_data(full_name, passport_number)')
    .order('created_at', { ascending: false })

  if (params.status && params.status !== 'all') {
    query = query.eq('status', params.status)
  }

  const { data: applications } = await query

  // Client-side search filter
  const filtered = params.search
    ? applications?.filter((app) => {
        const s = params.search!.toLowerCase()
        return (
          app.case_number?.toLowerCase().includes(s) ||
          (app.profiles as any)?.name?.toLowerCase().includes(s) ||
          (app.profiles as any)?.email?.toLowerCase().includes(s) ||
          (app.application_data as any)?.passport_number?.toLowerCase().includes(s)
        )
      })
    : applications

  const statusColors: Record<string, string> = {
    received: 'bg-blue-100 text-blue-700',
    documents_generated: 'bg-purple-100 text-purple-700',
    lawyer_processing: 'bg-amber-100 text-amber-700',
    notary_processing: 'bg-orange-100 text-orange-700',
    processing_spain: 'bg-indigo-100 text-indigo-700',
    completed: 'bg-green-100 text-green-700',
  }

  return (
    <div className="space-y-6 max-w-7xl">
      <div>
        <h2 className="text-xl font-bold text-gray-900">Alle ansøgninger</h2>
        <p className="text-sm text-gray-500 mt-0.5">{filtered?.length ?? 0} ansøgninger</p>
      </div>

      {/* Search + filter */}
      <form className="flex flex-col sm:flex-row gap-3">
        <input
          type="search"
          name="search"
          defaultValue={params.search}
          placeholder="Søg på navn, e-mail, sagsnummer, pasnummer..."
          className="flex-1 h-9 px-3 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200"
        />
        <select
          name="status"
          defaultValue={params.status ?? 'all'}
          className="h-9 px-3 text-sm border border-gray-200 rounded-lg bg-white focus:outline-none"
        >
          <option value="all">Alle statusser</option>
          {Object.entries(STATUS_LABELS).map(([value, label]) => (
            <option key={value} value={value}>{label}</option>
          ))}
        </select>
        <button
          type="submit"
          className="h-9 px-4 text-sm font-medium text-white rounded-lg"
          style={{ backgroundColor: '#1B3A6B' }}
        >
          Søg
        </button>
      </form>

      <Card className="bg-white shadow-sm">
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100">
                  {['Sagsnummer', 'Navn', 'E-mail', 'Status', 'Betaling', 'Dato', ''].map((h) => (
                    <th key={h} className="text-left px-5 py-3 text-xs font-semibold text-gray-500">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filtered?.map((app) => (
                  <tr key={app.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                    <td className="px-5 py-3 font-mono text-xs font-medium">{app.case_number}</td>
                    <td className="px-5 py-3 text-gray-700">{(app.profiles as any)?.name ?? '–'}</td>
                    <td className="px-5 py-3 text-gray-500 text-xs">{(app.profiles as any)?.email ?? '–'}</td>
                    <td className="px-5 py-3">
                      <span className={`text-xs px-2 py-1 rounded-full font-medium ${statusColors[app.status] ?? ''}`}>
                        {STATUS_LABELS[app.status as ApplicationStatus]}
                      </span>
                    </td>
                    <td className="px-5 py-3">
                      <span className={`text-xs font-medium ${app.payment_status === 'paid' ? 'text-green-600' : 'text-amber-600'}`}>
                        {app.payment_status === 'paid' ? 'Betalt' : 'Afventer'}
                      </span>
                    </td>
                    <td className="px-5 py-3 text-xs text-gray-400">
                      {new Date(app.created_at).toLocaleDateString('da-DK')}
                    </td>
                    <td className="px-5 py-3 text-right">
                      <Link
                        href={`/admin/ansogninger/${app.id}`}
                        className="text-xs font-medium hover:underline"
                        style={{ color: '#1B3A6B' }}
                      >
                        Åbn →
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {!filtered?.length && (
              <p className="text-center text-sm text-gray-400 py-10">Ingen ansøgninger fundet.</p>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
