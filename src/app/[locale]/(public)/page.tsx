import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { routing } from '@/i18n/routing'
import { getPathname } from '@/i18n/navigation'
import Hero from '@/components/home/Hero'
import HowItWorks from '@/components/home/HowItWorks'
import Pricing from '@/components/home/Pricing'
import About from '@/components/home/About'
import Lawyers from '@/components/home/Lawyers'
import FAQ from '@/components/home/FAQ'
import Contact from '@/components/home/Contact'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'home.meta' })

  const languages = Object.fromEntries(
    routing.locales.map((l) => [l, getPathname({ locale: l, href: '/' })])
  )

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      languages: { ...languages, 'x-default': languages[routing.defaultLocale] },
    },
  }
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Pricing />
      <About />
      <Lawyers />
      <FAQ />
      <Contact />
    </>
  )
}
