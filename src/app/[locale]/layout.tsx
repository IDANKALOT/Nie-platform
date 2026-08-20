import type { Metadata } from 'next'
import { Inter, Caveat } from 'next/font/google'
import { hasLocale, NextIntlClientProvider } from 'next-intl'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'
import '../globals.css'
import { Analytics } from '@vercel/analytics/next'
import { Toaster } from '@/components/ui/sonner'
import { routing } from '@/i18n/routing'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const caveat = Caveat({
  subsets: ['latin'],
  variable: '--font-hand',
  display: 'swap',
})

const ogLocales: Record<string, string> = {
  da: 'da_DK',
  en: 'en_US',
  no: 'nb_NO',
  sv: 'sv_SE',
  de: 'de_DE',
  nl: 'nl_NL',
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'common.meta' })

  return {
    title: {
      default: t('title'),
      template: '%s | Espallo',
    },
    description: t('description'),
    keywords: t.raw('keywords') as string[],
    authors: [{ name: 'Espallo' }],
    creator: 'Espallo',
    openGraph: {
      type: 'website',
      locale: ogLocales[locale] ?? 'en_US',
      siteName: 'Espallo',
      title: t('title'),
      description: t('description'),
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Espallo',
      description: t('description'),
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  setRequestLocale(locale)

  return (
    <html lang={locale} className={`${inter.variable} ${caveat.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        <NextIntlClientProvider>
          {children}
          <Toaster position="top-right" richColors />
        </NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  )
}
