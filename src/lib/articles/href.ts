import { routing } from '@/i18n/routing'
import { articleSlugs, type ArticleRouteKey } from '@/content/articles/slugs'

/** Locale-prefixed relative URL for an article, e.g. articleHref('nie-number-spain', 'de') -> '/de/nie-nummer-spanien'. */
export function articleHref(routeKey: ArticleRouteKey, locale: string): string {
  const slugs: Record<string, string> = articleSlugs[routeKey]
  const slug = slugs[locale] ?? slugs[routing.defaultLocale]
  const prefix = locale === routing.defaultLocale ? '' : `/${locale}`
  return `${prefix}${slug}`
}

/**
 * If `pathname` (as returned by next-intl's usePathname, i.e. without locale
 * prefix) matches one of the known article slugs, returns the equivalent
 * slug for `targetLocale`. Returns null for any other route, so callers can
 * fall back to their normal locale-switch behavior.
 */
export function resolveArticleSwitchSlug(pathname: string, targetLocale: string): string | null {
  for (const slugs of Object.values(articleSlugs)) {
    const record: Record<string, string> = slugs
    if (Object.values(record).includes(pathname)) {
      return record[targetLocale] ?? null
    }
  }
  return null
}
