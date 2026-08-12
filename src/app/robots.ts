import type { MetadataRoute } from 'next'
import { routing } from '@/i18n/routing'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://espallo.com'

export default function robots(): MetadataRoute.Robots {
  const disallow = routing.locales.flatMap((locale) => {
    const prefix = locale === routing.defaultLocale ? '' : `/${locale}`
    return [`${prefix}/dashboard/`, `${prefix}/admin/`]
  })
  disallow.push('/api/')

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow,
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
