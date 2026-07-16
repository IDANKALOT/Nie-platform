'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
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
  const t = useTranslations('dashboard.profile')
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
      toast.error(t('saveError'))
    } else {
      toast.success(t('saveSuccess'))
    }
    setLoading(false)
  }

  async function handleDeleteRequest() {
    const confirmed = confirm(t('deleteConfirm'))
    if (!confirmed) return

    toast.info(t('deleteToast'))
  }

  return (
    <div className="space-y-5">
      <Card className="bg-white shadow-sm">
        <CardHeader className="pb-3">
          <CardTitle className="text-base">{t('personalInfoTitle')}</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSave} className="space-y-4">
            <div className="space-y-1.5">
              <Label>{t('emailLabel')}</Label>
              <Input value={userEmail} disabled className="bg-gray-50" />
              <p className="text-xs text-gray-400">{t('emailHint')}</p>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="name">{t('nameLabel')}</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={t('namePlaceholder')}
              />
            </div>
            <Button type="submit" disabled={loading} style={{ backgroundColor: '#1B3A6B' }}>
              {loading ? t('saving') : t('save')}
            </Button>
          </form>
        </CardContent>
      </Card>

      <Card className="bg-white shadow-sm border-red-100">
        <CardHeader className="pb-3">
          <CardTitle className="text-base text-red-700">{t('gdprTitle')}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-500 mb-4">
            {t('gdprText')}
          </p>
          <Button
            variant="outline"
            className="border-red-200 text-red-600 hover:bg-red-50"
            onClick={handleDeleteRequest}
          >
            {t('deleteButton')}
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
