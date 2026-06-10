'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Eye, EyeOff, UserPlus, CheckCircle2 } from 'lucide-react'
import { createClient } from '@/lib/supabase/client'
import { toast } from 'sonner'

export default function RegisterPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [consent, setConsent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)
  const router = useRouter()
  const supabase = createClient()

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault()
    if (!consent) {
      toast.error('Du skal acceptere vores privatlivspolitik for at fortsætte.')
      return
    }
    setLoading(true)

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { name },
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    })

    if (error) {
      toast.error(error.message)
      setLoading(false)
      return
    }

    setDone(true)
  }

  if (done) {
    return (
      <Card className="shadow-lg border-gray-100 text-center">
        <CardContent className="pt-10 pb-8">
          <div className="flex justify-center mb-4">
            <CheckCircle2 className="w-14 h-14" style={{ color: '#2D8E6C' }} />
          </div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">Bekræft din e-mail</h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-6">
            Vi har sendt en bekræftelsesmail til <strong>{email}</strong>.
            Klik på linket i mailen for at aktivere din konto.
          </p>
          <Link href="/login">
            <Button variant="outline" className="w-full">Gå til login</Button>
          </Link>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="shadow-lg border-gray-100">
      <CardHeader className="text-center pb-2">
        <CardTitle className="text-2xl font-bold" style={{ color: '#1B3A6B' }}>
          Opret konto
        </CardTitle>
        <CardDescription>
          Start din NIE-ansøgningsproces i dag
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-4">
        <form onSubmit={handleRegister} className="space-y-4">
          <div className="space-y-1.5">
            <Label htmlFor="name">Fulde navn</Label>
            <Input
              id="name"
              placeholder="Dit fulde navn"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              autoComplete="name"
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="email">E-mail</Label>
            <Input
              id="email"
              type="email"
              placeholder="din@email.dk"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="password">Adgangskode</Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Mindst 8 tegn"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={8}
                autoComplete="new-password"
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <div className="flex items-start gap-3 pt-1">
            <input
              type="checkbox"
              id="consent"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              className="mt-0.5 w-4 h-4 rounded border-gray-300 accent-blue-700"
            />
            <label htmlFor="consent" className="text-xs text-gray-500 leading-relaxed cursor-pointer">
              Jeg accepterer{' '}
              <Link href="/privatlivspolitik" className="underline" style={{ color: '#1B3A6B' }}>
                privatlivspolitikken
              </Link>{' '}
              og samtykker til behandling af mine personoplysninger i forbindelse med min NIE-ansøgning.
            </label>
          </div>

          <Button
            type="submit"
            className="w-full h-11 font-semibold"
            disabled={loading}
            style={{ backgroundColor: '#1B3A6B' }}
          >
            {loading ? 'Opretter konto...' : (
              <>
                Opret konto
                <UserPlus className="w-4 h-4 ml-2" />
              </>
            )}
          </Button>
        </form>

        <div className="mt-5 text-center text-sm text-gray-500">
          Har du allerede en konto?{' '}
          <Link href="/login" className="font-medium hover:underline" style={{ color: '#1B3A6B' }}>
            Log ind her
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
