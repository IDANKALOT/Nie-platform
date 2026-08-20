'use client'

import { useTranslations } from 'next-intl'
import { Link, usePathname, useRouter } from '@/i18n/navigation'
import { LayoutDashboard, FileText, FolderOpen, Settings, LogOut } from 'lucide-react'
import { createClient } from '@/lib/supabase/client'
import Logo from '@/components/layout/Logo'
import { PURPLE, PURPLE_DARK } from '@/lib/theme'
import type { Profile } from '@/types'

interface Props {
  profile: Profile | null
}

export default function DashboardSidebar({ profile }: Props) {
  const t = useTranslations('dashboard.nav')
  const pathname = usePathname()
  const router = useRouter()
  const supabase = createClient()

  const navItems = [
    { href: '/dashboard', label: t('overview'), icon: LayoutDashboard },
    { href: '/dashboard/ansogning', label: t('myApplication'), icon: FileText },
    { href: '/dashboard/dokumenter', label: t('documents'), icon: FolderOpen },
    { href: '/dashboard/indstillinger', label: t('settings'), icon: Settings },
  ]

  async function handleLogout() {
    await supabase.auth.signOut()
    router.push('/login')
    router.refresh()
  }

  return (
    <aside className="hidden lg:flex flex-col w-64 bg-white border-r border-gray-200 shrink-0">
      {/* Logo */}
      <div className="p-5 border-b border-gray-100">
        <Link href="/" className="flex items-center gap-2">
          <Logo size={28} />
          <span className="font-semibold text-gray-900 text-sm">Espallo</span>
        </Link>
      </div>

      {/* Nav */}
      <nav className="flex-1 p-3 space-y-1">
        {navItems.map((item) => {
          const active = pathname === item.href || (item.href !== '/dashboard' && pathname.startsWith(item.href))
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                active
                  ? 'text-white shadow-sm'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
              style={active ? { backgroundColor: PURPLE } : undefined}
            >
              <item.icon className="w-4 h-4 shrink-0" />
              {item.label}
            </Link>
          )
        })}
      </nav>

      {/* User + logout */}
      <div className="p-3 border-t border-gray-100">
        <div className="flex items-center gap-3 px-3 py-2 rounded-lg mb-1">
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0"
            style={{ backgroundColor: PURPLE_DARK }}
          >
            {profile?.name?.[0]?.toUpperCase() ?? t('fallbackName')[0]}
          </div>
          <div className="min-w-0">
            <p className="text-xs font-medium text-gray-900 truncate">{profile?.name ?? t('fallbackName')}</p>
            <p className="text-xs text-gray-400 truncate">{profile?.email}</p>
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-500 hover:text-gray-700 hover:bg-gray-50 w-full transition-colors"
        >
          <LogOut className="w-4 h-4" />
          {t('logout')}
        </button>
      </div>
    </aside>
  )
}
