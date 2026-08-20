'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Eye, EyeOff, UserPlus, CheckCircle2 } from 'lucide-react'
import { createClient } from '@/lib/supabase/client'
import { toast } from 'sonner'
import { PURPLE } from '@/lib/theme'

export default function RegisterPage() {
  const t = useTranslations('auth.register')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [consent, setConsent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)
  const supabase = createClient()

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault()
    if (!consent) {
      toast.error(t('errorConsent'))
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
          <h2 className="text-xl font-bold text-gray-900 mb-2">{t('confirmTitle')}</h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-6">
            {t('confirmTextBefore')} <strong>{email}</strong>{t('confirmTextAfter')}
          </p>
          <Link href="/login">
            <Button variant="outline" className="w-full">{t('goToLogin')}</Button>
          </Link>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="shadow-lg border-gray-100">
      <CardHeader className="text-center pb-2">
        <CardTitle className="text-2xl font-bold" style={{ color: PURPLE }}>
          {t('title')}
        </CardTitle>
        <CardDescription>
          {t('subtitle')}
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-4">
        <form onSubmit={handleRegister} className="space-y-4">
          <div className="space-y-1.5">
            <Label htmlFor="name">{t('nameLabel')}</Label>
            <Input
              id="name"
              placeholder={t('namePlaceholder')}
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              autoComplete="name"
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="email">{t('emailLabel')}</Label>
            <Input
              id="email"
              type="email"
              placeholder={t('emailPlaceholder')}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="password">{t('passwordLabel')}</Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder={t('passwordPlaceholder')}
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
              className="mt-0.5 w-4 h-4 rounded border-gray-300 accent-[#7C5CFC]"
            />
            <label htmlFor="consent" className="text-xs text-gray-500 leading-relaxed cursor-pointer">
              {t('consentPrefix')}{' '}
              <Link href="/privatlivspolitik" className="underline" style={{ color: PURPLE }}>
                {t('consentLink')}
              </Link>{' '}
              {t('consentSuffix')}
            </label>
          </div>

          <Button
            type="submit"
            className="w-full h-11 font-semibold"
            disabled={loading}
            style={{ backgroundColor: PURPLE }}
          >
            {loading ? t('submitting') : (
              <>
                {t('submit')}
                <UserPlus className="w-4 h-4 ml-2" />
              </>
            )}
          </Button>
        </form>

        <div className="mt-5 text-center text-sm text-gray-500">
          {t('haveAccount')}{' '}
          <Link href="/login" className="font-medium hover:underline" style={{ color: PURPLE }}>
            {t('loginHere')}
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
