import { createClient } from '@/lib/supabase/server'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import StatusStepper from '@/components/dashboard/StatusStepper'
import { Plus, ArrowRight } from 'lucide-react'
import { STATUS_LABELS, type ApplicationStatus } from '@/types'

export default async function AnsogningPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  const { data: applications } = await supabase
    .from('applications')
    .select('*, application_data(*), notes(*)')
    .eq('user_id', user!.id)
    .order('created_at', { ascending: false })

  return (
    <div className="space-y-6 max-w-4xl">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Mine ansøgninger</h2>
          <p className="text-sm text-gray-500 mt-0.5">Oversigt over alle dine NIE-ansøgninger</p>
        </div>
        <Link href="/dashboard/ansogning/ny">
          <Button size="sm" style={{ backgroundColor: '#1B3A6B' }}>
            <Plus className="w-4 h-4 mr-2" />
            Ny ansøgning
          </Button>
        </Link>
      </div>

      {!applications?.length ? (
        <Card className="border-dashed border-2 border-gray-200">
          <CardContent className="py-10 text-center">
            <p className="text-gray-500 text-sm">Ingen ansøgninger endnu.</p>
            <Link href="/dashboard/ansogning/ny" className="mt-4 inline-block">
              <Button style={{ backgroundColor: '#1B3A6B' }}>Start ansøgning</Button>
            </Link>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {applications.map((app) => (
            <Card key={app.id} className="bg-white shadow-sm">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-semibold text-gray-900">
                    Sag #{app.case_number}
                  </CardTitle>
                  <span className="text-xs text-gray-400">
                    {new Date(app.created_at).toLocaleDateString('da-DK')}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <StatusStepper currentStatus={app.status as ApplicationStatus} />

                {/* Notes from admin */}
                {app.notes?.length > 0 && (
                  <div className="p-3 bg-blue-50 border border-blue-100 rounded-lg">
                    <p className="text-xs font-semibold text-blue-800 mb-1">Besked fra sagsbehandler:</p>
                    <p className="text-xs text-blue-700">{app.notes[app.notes.length - 1].note}</p>
                  </div>
                )}

                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">
                    Betaling: {app.payment_status === 'paid' ? '✓ Betalt' : '⏳ Afventer'}
                  </span>
                  {!app.application_data?.form_completed && (
                    <Link href={`/dashboard/ansogning/${app.id}/formular`}>
                      <Button size="sm" variant="outline">
                        Fortsæt udfyldelse
                        <ArrowRight className="w-3 h-3 ml-1" />
                      </Button>
                    </Link>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
