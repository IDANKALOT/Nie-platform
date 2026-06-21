import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from '@/components/ui/sonner'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'NIE Spanien – Få dit spanske NIE-nummer nemt og sikkert',
    template: '%s | NIE Spanien',
  },
  description:
    'Professionel hjælp til at få dit spanske NIE-nummer. Vi håndterer hele processen med erfarne advokater og notarer i Spanien. Fast pris 215 EUR.',
  keywords: [
    'NIE nummer Spanien',
    'NIE nummer danskere',
    'spansk NIE nummer',
    'NIE ansøgning Spanien',
    'NIE nummer hjælp',
    'spansk identifikationsnummer',
  ],
  authors: [{ name: 'NIE Spanien' }],
  creator: 'NIE Spanien',
  openGraph: {
    type: 'website',
    locale: 'da_DK',
    siteName: 'NIE Spanien',
    title: 'NIE Spanien – Få dit spanske NIE-nummer nemt og sikkert',
    description:
      'Professionel hjælp til at få dit spanske NIE-nummer. Fast pris 215 EUR.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NIE Spanien',
    description: 'Professionel hjælp til at få dit spanske NIE-nummer.',
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="da" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        {children}
        <Toaster position="top-right" richColors />
      </body>
    </html>
  )
}
