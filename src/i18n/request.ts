import { hasLocale } from 'next-intl'
import { getRequestConfig } from 'next-intl/server'
import { routing } from './routing'

const namespaces = [
  'common',
  'home',
  'auth',
  'dashboard',
  'admin',
  'forms',
  'legal',
  'status',
] as const

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale

  const messages = Object.fromEntries(
    await Promise.all(
      namespaces.map(async (ns) => [
        ns,
        (await import(`../../messages/${locale}/${ns}.json`)).default,
      ])
    )
  )

  return { locale, messages }
})
