import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import { articleSlugs, type ArticleRouteKey } from '@/content/articles/slugs'
import ArticleLayout from '@/components/articles/ArticleLayout'
import type { ArticleContent } from '@/content/articles/types'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://espallo.com'

/**
 * Builds the generateStaticParams/generateMetadata/Page trio for one
 * physical route folder that serves an article topic under a specific slug.
 * `folderSlug` must match the slug string this folder was named after (see
 * src/content/articles/slugs.ts) — the locales that resolve to that exact
 * slug "own" this folder; any other locale hitting it 404s instead of
 * silently rendering duplicate content under the wrong URL.
 */
export function createArticlePage(
  routeKey: ArticleRouteKey,
  folderSlug: string,
  contentByLocale: Record<string, ArticleContent>
) {
  const slugsForTopic: Record<string, string> = articleSlugs[routeKey]
  const ownerLocales: string[] = routing.locales.filter((l) => slugsForTopic[l] === folderSlug)

  function urlFor(locale: string): string {
    const prefix = locale === routing.defaultLocale ? '' : `/${locale}`
    return `${baseUrl}${prefix}${slugsForTopic[locale]}`
  }

  function generateStaticParams() {
    return ownerLocales.map((locale) => ({ locale }))
  }

  async function generateMetadata({
    params,
  }: {
    params: Promise<{ locale: string }>
  }): Promise<Metadata> {
    const { locale } = await params
    if (!ownerLocales.includes(locale)) return {}

    const content = contentByLocale[locale]
    const languages = Object.fromEntries(routing.locales.map((l) => [l, urlFor(l)]))

    return {
      title: content.title,
      description: content.description,
      alternates: {
        canonical: languages[locale],
        languages: { ...languages, 'x-default': languages[routing.defaultLocale] },
      },
    }
  }

  async function Page({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params
    if (!ownerLocales.includes(locale)) notFound()

    const content = contentByLocale[locale]

    return (
      <ArticleLayout
        breadcrumbHome={content.breadcrumbHome}
        breadcrumbLabel={content.breadcrumbLabel}
        h1={content.h1}
        lastUpdated={content.lastUpdated}
        updatedLabel={content.updatedLabel}
        intro={content.intro}
        faqHeading={content.faqHeading}
        faq={content.faq}
        ctaHeading={content.ctaHeading}
        ctaText={content.ctaText}
        ctaButton={content.ctaButton}
        disclaimer={content.disclaimer}
        metaDescription={content.description}
        canonicalUrl={urlFor(locale)}
      >
        {content.body}
      </ArticleLayout>
    )
  }

  return { generateStaticParams, generateMetadata, Page }
}
