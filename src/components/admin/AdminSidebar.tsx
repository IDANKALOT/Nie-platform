'use client'

import { useTranslations } from 'next-intl'
import { Link, usePathname, useRouter } from '@/i18n/navigation'
import {
  LayoutDashboard, FileText, Users, Settings, LogOut, Scale, Package
} from 'lucide-react'
import { createClient } from '@/lib/supabase/client'
import Logo from '@/components/layout/Logo'
import { PURPLE, PURPLE_DARK } from '@/lib/theme'
import type { Profile } from '@/types'

interface Props { profile: Profile | null }

export default function AdminSidebar({ profile }: Props) {
  const t = useTranslations('admin.nav')
  const pathname = usePathname()
  const router = useRouter()
  const supabase = createClient()

  const navItems = [
    { href: '/admin', label: t('dashboard'), icon: LayoutDashboard },
    { href: '/admin/ansogninger', label: t('applications'), icon: FileText },
    { href: '/admin/pakker', label: t('packages'), icon: Package },
    { href: '/admin/advokater', label: t('lawyers'), icon: Scale },
    { href: '/admin/brugere', label: t('users'), icon: Users },
    { href: '/admin/indstillinger', label: t('settings'), icon: Settings },
  ]

  async function handleLogout() {
    await supabase.auth.signOut()
    router.push('/login')
    router.refresh()
  }

  return (
    <aside className="hidden lg:flex flex-col w-64 bg-gray-900 text-white shrink-0">
      <div className="p-5 border-b border-gray-700">
        <Link href="/" className="flex items-center gap-2">
          <Logo size={28} />
          <div>
            <span className="font-semibold text-sm block">Espallo</span>
            <span className="text-xs text-gray-400">Admin Panel</span>
          </div>
        </Link>
      </div>

      <nav className="flex-1 p-3 space-y-1">
        {navItems.map((item) => {
          const active = pathname === item.href || (item.href !== '/admin' && pathname.startsWith(item.href))
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                active ? 'text-white' : 'text-gray-300 hover:bg-gray-800 hover:text-white'
              }`}
              style={active ? { backgroundColor: PURPLE } : undefined}
            >
              <item.icon className="w-4 h-4 shrink-0" />
              {item.label}
            </Link>
          )
        })}
      </nav>

      <div className="p-3 border-t border-gray-700">
        <div className="flex items-center gap-3 px-3 py-2 rounded-lg mb-1">
          <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0" style={{ backgroundColor: PURPLE_DARK }}>
            {profile?.name?.[0]?.toUpperCase() ?? 'A'}
          </div>
          <div className="min-w-0">
            <p className="text-xs font-medium text-white truncate">{profile?.name}</p>
            <p className="text-xs text-gray-400 truncate">{t('administrator')}</p>
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-gray-800 w-full transition-colors"
        >
          <LogOut className="w-4 h-4" />
          {t('logout')}
        </button>
      </div>
    </aside>
  )
}
