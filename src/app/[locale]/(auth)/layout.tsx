import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { Shield } from 'lucide-react'

export const dynamic = 'force-dynamic'

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  const t = useTranslations('auth.layout')

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#F5F7FA' }}>
      {/* Simple header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 h-14 flex items-center">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#1B3A6B' }}>
              <Shield className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="font-semibold text-gray-900">Espallo</span>
          </Link>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md">{children}</div>
      </main>

      <footer className="py-4 text-center">
        <p className="text-xs text-gray-400">
          {t('copyright', { year: new Date().getFullYear() })}{' '}
          <Link href="/privatlivspolitik" className="hover:underline">
            {t('privacyPolicy')}
          </Link>
        </p>
      </footer>
    </div>
  )
}
