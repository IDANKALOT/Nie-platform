import type { Metadata } from 'next'
import Hero from '@/components/home/Hero'
import HowItWorks from '@/components/home/HowItWorks'
import Pricing from '@/components/home/Pricing'
import About from '@/components/home/About'
import Lawyers from '@/components/home/Lawyers'
import FAQ from '@/components/home/FAQ'
import Contact from '@/components/home/Contact'

export const metadata: Metadata = {
  title: 'NIE Nummer Service – Få dit spanske NIE-nummer nemt og sikkert',
  description:
    'Professionel hjælp til at få dit spanske NIE-nummer. Vi håndterer hele processen med erfarne advokater og notarer i Spanien. Fast pris 215 EUR. Ingen tur til Spanien nødvendig.',
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
