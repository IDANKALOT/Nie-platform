'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { createClient } from '@/lib/supabase/client'
import { toast } from 'sonner'
import type { Profile } from '@/types'

interface Props {
  profile: Profile | null
  userEmail: string
}

export default function ProfileSettings({ profile, userEmail }: Props) {
  const [name, setName] = useState(profile?.name ?? '')
  const [loading, setLoading] = useState(false)
  const supabase = createClient()

  async function handleSave(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)

    const { error } = await supabase
      .from('profiles')
      .update({ name })
      .eq('id', profile!.id)

    if (error) {
      toast.error('Fejl ved opdatering.')
    } else {
      toast.success('Profil opdateret.')
    }
    setLoading(false)
  }

  async function handleDeleteRequest() {
    const confirmed = confirm(
      'Er du sikker på, at du vil anmode om sletning af dine data? Dette kan ikke fortrydes.'
    )
    if (!confirmed) return

    toast.info('Din anmodning om datasletning er registreret. Vi kontakter dig inden for 30 dage.')
  }

  return (
    <div className="space-y-5">
      <Card className="bg-white shadow-sm">
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Personlige oplysninger</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSave} className="space-y-4">
            <div className="space-y-1.5">
              <Label>E-mail</Label>
              <Input value={userEmail} disabled className="bg-gray-50" />
              <p className="text-xs text-gray-400">E-mail kan ikke ændres</p>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="name">Navn</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Dit fulde navn"
              />
            </div>
            <Button type="submit" disabled={loading} style={{ backgroundColor: '#1B3A6B' }}>
              {loading ? 'Gemmer...' : 'Gem ændringer'}
            </Button>
          </form>
        </CardContent>
      </Card>

      <Card className="bg-white shadow-sm border-red-100">
        <CardHeader className="pb-3">
          <CardTitle className="text-base text-red-700">GDPR – Ret til sletning</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-500 mb-4">
            I henhold til GDPR har du ret til at få dine personoplysninger slettet fra vores systemer.
            Bemærk at en sletning kan påvirke din igangværende NIE-ansøgning.
          </p>
          <Button
            variant="outline"
            className="border-red-200 text-red-600 hover:bg-red-50"
            onClick={handleDeleteRequest}
          >
            Anmod om datasletning
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
