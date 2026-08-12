import type { ReactNode } from 'react'
import { Link } from '@/i18n/navigation'
import ArticleFaq, { type ArticleFaqItem } from './ArticleFaq'
import ArticleCta from './ArticleCta'

export interface ArticleLayoutProps {
  breadcrumbHome: string
  breadcrumbLabel: string
  h1: string
  lastUpdated: string
  updatedLabel: string
  intro: ReactNode
  children: ReactNode
  faqHeading?: string
  faq?: ArticleFaqItem[]
  ctaHeading: string
  ctaText: string
  ctaButton: string
  disclaimer: string
  metaDescription: string
  canonicalUrl: string
}

export default function ArticleLayout({
  breadcrumbHome,
  breadcrumbLabel,
  h1,
  lastUpdated,
  updatedLabel,
  intro,
  children,
  faqHeading,
  faq,
  ctaHeading,
  ctaText,
  ctaButton,
  disclaimer,
  metaDescription,
  canonicalUrl,
}: ArticleLayoutProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: h1,
        description: metaDescription,
        dateModified: lastUpdated,
        url: canonicalUrl,
        author: { '@type': 'Organization', name: 'Espallo', url: 'https://espallo.com' },
        publisher: { '@type': 'Organization', name: 'Espallo', url: 'https://espallo.com' },
      },
      ...(faq && faq.length > 0
        ? [
            {
              '@type': 'FAQPage',
              mainEntity: faq.map((item) => ({
                '@type': 'Question',
                name: item.question,
                acceptedAnswer: { '@type': 'Answer', text: item.answer },
              })),
            },
          ]
        : []),
    ],
  }

  return (
    <article className="max-w-3xl mx-auto px-4 py-16 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <nav aria-label="breadcrumb" className="text-sm text-gray-400 mb-6 flex items-center gap-2">
        <Link href="/" className="hover:text-gray-600">
          {breadcrumbHome}
        </Link>
        <span>/</span>
        <span className="text-gray-600">{breadcrumbLabel}</span>
      </nav>

      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 leading-tight">{h1}</h1>
      <p className="text-sm text-gray-500 mb-10">
        {updatedLabel}: {lastUpdated} &middot; Espallo
      </p>

      <div className="text-lg text-gray-600 leading-relaxed mb-10">{intro}</div>

      <div className="article-body max-w-none text-gray-700 leading-relaxed">{children}</div>

      <div className="my-10">
        <ArticleCta heading={ctaHeading} text={ctaText} button={ctaButton} />
        <p className="text-xs text-gray-400 mt-3">{disclaimer}</p>
      </div>

      {faq && faq.length > 0 && (
        <div className="mt-10">
          <ArticleFaq heading={faqHeading ?? ''} items={faq} />
        </div>
      )}
    </article>
  )
}
