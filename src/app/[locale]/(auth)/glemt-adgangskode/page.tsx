'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle2, ArrowLeft } from 'lucide-react'
import { createClient } from '@/lib/supabase/client'
import { toast } from 'sonner'
import { PURPLE } from '@/lib/theme'

export default function ForgotPasswordPage() {
  const t = useTranslations('auth.forgotPassword')
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
      toast.error(t('error'))
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
          <h2 className="text-xl font-bold text-gray-900 mb-2">{t('sentTitle')}</h2>
          <p className="text-gray-500 text-sm mb-6">
            {t('sentTextBefore')}{email}{t('sentTextAfter')}
          </p>
          <Link href="/login">
            <Button variant="outline" className="w-full">
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t('backToLogin')}
            </Button>
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
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1.5">
            <Label htmlFor="email">{t('emailLabel')}</Label>
            <Input
              id="email"
              type="email"
              placeholder={t('emailPlaceholder')}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <Button
            type="submit"
            className="w-full h-11"
            disabled={loading}
            style={{ backgroundColor: PURPLE }}
          >
            {loading ? t('submitting') : t('submit')}
          </Button>
        </form>
        <div className="mt-4 text-center">
          <Link href="/login" className="text-sm text-gray-500 hover:underline flex items-center justify-center gap-1">
            <ArrowLeft className="w-3 h-3" />
            {t('backToLogin')}
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
