'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle2, ArrowLeft } from 'lucide-react'
import { createClient } from '@/lib/supabase/client'
import { toast } from 'sonner'

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)
  const supabase = createClient()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/nulstil-adgangskode`,
    })

    if (error) {
      toast.error('Der opstod en fejl. Prøv igen.')
      setLoading(false)
      return
    }

    setSent(true)
  }

  if (sent) {
    return (
      <Card className="shadow-lg border-gray-100 text-center">
        <CardContent className="pt-10 pb-8">
          <CheckCircle2 className="w-14 h-14 mx-auto mb-4" style={{ color: '#2D8E6C' }} />
          <h2 className="text-xl font-bold text-gray-900 mb-2">Mail sendt</h2>
          <p className="text-gray-500 text-sm mb-6">
            Tjek din indbakke ({email}) for et link til at nulstille din adgangskode.
          </p>
          <Link href="/login">
            <Button variant="outline" className="w-full">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Tilbage til login
            </Button>
          </Link>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="shadow-lg border-gray-100">
      <CardHeader className="text-center pb-2">
        <CardTitle className="text-2xl font-bold" style={{ color: '#1B3A6B' }}>
          Glemt adgangskode
        </CardTitle>
        <CardDescription>
          Indtast din e-mail, så sender vi dig et nulstillingslink.
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1.5">
            <Label htmlFor="email">E-mail</Label>
            <Input
              id="email"
              type="email"
              placeholder="din@email.dk"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <Button
            type="submit"
            className="w-full h-11"
            disabled={loading}
            style={{ backgroundColor: '#1B3A6B' }}
          >
            {loading ? 'Sender...' : 'Send nulstillingslink'}
          </Button>
        </form>
        <div className="mt-4 text-center">
          <Link href="/login" className="text-sm text-gray-500 hover:underline flex items-center justify-center gap-1">
            <ArrowLeft className="w-3 h-3" />
            Tilbage til login
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
