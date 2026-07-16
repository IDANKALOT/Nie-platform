import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { hasLocale, NextIntlClientProvider } from 'next-intl'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'
import '../globals.css'
import { Toaster } from '@/components/ui/sonner'
import { routing } from '@/i18n/routing'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

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
      template: '%s | Espalvo',
    },
    description: t('description'),
    keywords: t.raw('keywords') as string[],
    authors: [{ name: 'Espalvo' }],
    creator: 'Espalvo',
    openGraph: {
      type: 'website',
      locale: locale === 'da' ? 'da_DK' : 'en_US',
      siteName: 'Espalvo',
      title: t('title'),
      description: t('description'),
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Espalvo',
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
    <html lang={locale} className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        <NextIntlClientProvider>
          {children}
          <Toaster position="top-right" richColors />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
