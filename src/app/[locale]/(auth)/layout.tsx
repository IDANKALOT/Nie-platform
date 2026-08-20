import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import Logo from '@/components/layout/Logo'
import { PURPLE_BG } from '@/lib/theme'

export const dynamic = 'force-dynamic'

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  const t = useTranslations('auth.layout')

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: PURPLE_BG }}>
      {/* Simple header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 h-14 flex items-center">
          <Link href="/" className="flex items-center gap-2">
            <Logo size={28} />
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
