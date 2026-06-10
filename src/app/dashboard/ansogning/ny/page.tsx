import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'

export default async function NewApplicationPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  // Check for existing incomplete application
  const { data: existing } = await supabase
    .from('applications')
    .select('id, status, application_data(form_completed)')
    .eq('user_id', user!.id)
    .neq('status', 'completed')
    .single()

  if (existing) {
    redirect(`/dashboard/ansogning/${existing.id}/formular`)
  }

  // Create new application
  const caseNumber = `NIE-${Date.now().toString().slice(-6)}`

  const { data: application, error } = await supabase
    .from('applications')
    .insert({
      user_id: user!.id,
      status: 'received',
      case_number: caseNumber,
      payment_status: 'pending',
    })
    .select()
    .single()

  if (error || !application) {
    redirect('/dashboard')
  }

  // Create empty application_data
  await supabase.from('application_data').insert({
    application_id: application.id,
    form_completed: false,
  })

  redirect(`/dashboard/ansogning/${application.id}/formular`)
}
