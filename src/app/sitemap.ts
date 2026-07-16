import type { MetadataRoute } from 'next'
import { routing } from '@/i18n/routing'
import { getPathname } from '@/i18n/navigation'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://nienummerservice.dk'

function localizedEntry(
  href: string,
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'],
  priority: number
): MetadataRoute.Sitemap[number] {
  const languages = Object.fromEntries(
    routing.locales.map((locale) => [
      locale,
      `${baseUrl}${getPathname({ locale, href })}`,
    ])
  )

  return {
    url: languages[routing.defaultLocale],
    lastModified: new Date(),
    changeFrequency,
    priority,
    alternates: { languages },
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    localizedEntry('/', 'monthly', 1),
    localizedEntry('/register', 'monthly', 0.9),
    localizedEntry('/login', 'yearly', 0.5),
    localizedEntry('/privatlivspolitik', 'yearly', 0.3),
    localizedEntry('/handelsbetingelser', 'yearly', 0.3),
    localizedEntry('/cookiepolitik', 'yearly', 0.3),
  ]
}
