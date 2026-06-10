'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Shield, LayoutDashboard, FileText, FolderOpen, Settings, LogOut } from 'lucide-react'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'
import type { Profile } from '@/types'

interface Props {
  profile: Profile | null
}

export default function DashboardHeader({ profile }: Props) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const supabase = createClient()

  const titles: Record<string, string> = {
    '/dashboard': 'Oversigt',
    '/dashboard/ansogning': 'Min ansøgning',
    '/dashboard/dokumenter': 'Dokumenter',
    '/dashboard/indstillinger': 'Indstillinger',
  }

  const currentTitle = Object.entries(titles).find(([key]) =>
    key === pathname || (key !== '/dashboard' && pathname.startsWith(key))
  )?.[1] ?? 'Dashboard'

  async function handleLogout() {
    await supabase.auth.signOut()
    router.push('/login')
    router.refresh()
  }

  return (
    <>
      <header className="bg-white border-b border-gray-200 px-4 sm:px-6 h-14 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-3">
          {/* Mobile menu button */}
          <button
            className="lg:hidden p-1.5 text-gray-500 hover:text-gray-700 rounded"
            onClick={() => setMobileOpen(true)}
          >
            <Menu className="w-5 h-5" />
          </button>
          <h1 className="font-semibold text-gray-900">{currentTitle}</h1>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500 hidden sm:block">{profile?.name}</span>
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold"
            style={{ backgroundColor: '#2A5298' }}
          >
            {profile?.name?.[0]?.toUpperCase() ?? 'K'}
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          <div className="absolute inset-0 bg-black/40" onClick={() => setMobileOpen(false)} />
          <div className="relative w-64 bg-white h-full flex flex-col shadow-xl">
            <div className="p-4 border-b flex items-center justify-between">
              <Link href="/" className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#1B3A6B' }}>
                  <Shield className="w-3.5 h-3.5 text-white" />
                </div>
                <span className="font-semibold text-sm">NIE Service</span>
              </Link>
              <button onClick={() => setMobileOpen(false)}>
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>
            <nav className="flex-1 p-3 space-y-1">
              {[
                { href: '/dashboard', label: 'Oversigt', icon: LayoutDashboard },
                { href: '/dashboard/ansogning', label: 'Min ansøgning', icon: FileText },
                { href: '/dashboard/dokumenter', label: 'Dokumenter', icon: FolderOpen },
                { href: '/dashboard/indstillinger', label: 'Indstillinger', icon: Settings },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50"
                >
                  <item.icon className="w-4 h-4" />
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="p-3 border-t">
              <button
                onClick={handleLogout}
                className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-500 w-full"
              >
                <LogOut className="w-4 h-4" />
                Log ud
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
