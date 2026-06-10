import { createClient } from '@/lib/supabase/server'
import ProfileSettings from '@/components/dashboard/ProfileSettings'

export default async function IndstillingerPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user!.id)
    .single()

  return (
    <div className="max-w-2xl space-y-6">
      <div>
        <h2 className="text-xl font-bold text-gray-900">Indstillinger</h2>
        <p className="text-sm text-gray-500 mt-0.5">Administrer din konto og personlige data</p>
      </div>
      <ProfileSettings profile={profile} userEmail={user!.email ?? ''} />
    </div>
  )
}
