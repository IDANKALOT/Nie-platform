import { headers, cookies } from 'next/headers'
import { getLocale, getTranslations } from 'next-intl/server'
import GeoLanguageBannerClient from './GeoLanguageBannerClient'

export default async function GeoLanguageBanner() {
  const locale = await getLocale()
  if (locale !== 'da') return null

  const cookieStore = await cookies()
  if (cookieStore.get('geo_banner_dismissed')) return null

  const headerList = await headers()
  const country = headerList.get('x-vercel-ip-country')
  if (!country || country === 'DK') return null

  const t = await getTranslations({ locale: 'en', namespace: 'common.geoBanner' })

  return (
    <GeoLanguageBannerClient
      text={t('text')}
      switchLabel={t('switchButton')}
      dismissLabel={t('dismiss')}
    />
  )
}
