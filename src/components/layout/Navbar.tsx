'use client'

import { useState, useEffect } from 'react'
import { useLocale, useTranslations } from 'next-intl'
import { Link, usePathname } from '@/i18n/navigation'
import { routing } from '@/i18n/routing'
import { Button } from '@/components/ui/button'
import { Menu, X, Shield } from 'lucide-react'
import { createClient } from '@/lib/supabase/client'
import { resolveArticleSwitchSlug } from '@/lib/articles/href'
import type { User } from '@supabase/supabase-js'

const localeLabels: Record<string, string> = {
  da: 'DA',
  en: 'EN',
  no: 'NO',
  sv: 'SV',
  de: 'DE',
  nl: 'NL',
}

function setLocaleCookie(locale: string) {
  document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=${60 * 60 * 24 * 365}`
}

export default function Navbar() {
  const t = useTranslations('common.nav')
  const locale = useLocale()
  const [isOpen, setIsOpen] = useState(false)
  const [user, setUser] = useState<User | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const supabase = createClient()

  const navItems = [
    { href: '/#how-it-works', label: t('howItWorks') },
    { href: '/#pricing', label: t('pricing') },
    { href: '/#about', label: t('about') },
    { href: '/#faq', label: t('faq') },
    { href: '/#contact', label: t('contact') },
  ]

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_, session) => {
      setUser(session?.user ?? null)
    })
    supabase.auth.getUser().then(({ data }) => setUser(data.user))
    return () => subscription.unsubscribe()
  }, [supabase.auth])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isHomePage = pathname === '/'

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || !isHomePage
          ? 'bg-white border-b border-gray-200 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#1B3A6B' }}>
              <Shield className="w-4 h-4 text-white" />
            </div>
            <span
              className={`font-semibold text-lg transition-colors ${
                scrolled || !isHomePage ? 'text-gray-900' : 'text-white'
              }`}
            >
              Espallo
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:opacity-80 ${
                  scrolled || !isHomePage ? 'text-gray-700' : 'text-white/90'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <div className="flex items-center gap-1 text-xs font-medium">
              {routing.locales.map((l) => (
                <Link
                  key={l}
                  href={resolveArticleSwitchSlug(pathname, l) ?? pathname}
                  locale={l}
                  onClick={() => setLocaleCookie(l)}
                  className={`px-1.5 py-0.5 rounded transition-colors ${
                    l === locale
                      ? scrolled || !isHomePage
                        ? 'text-gray-900 font-semibold'
                        : 'text-white font-semibold'
                      : scrolled || !isHomePage
                        ? 'text-gray-400 hover:text-gray-700'
                        : 'text-white/50 hover:text-white/80'
                  }`}
                >
                  {localeLabels[l]}
                </Link>
              ))}
            </div>
            {user ? (
              <Link href="/dashboard">
                <Button size="sm" style={{ backgroundColor: '#1B3A6B' }}>
                  {t('mySite')}
                </Button>
              </Link>
            ) : (
              <>
                <Link href="/login">
                  <Button
                    variant="ghost"
                    size="sm"
                    className={scrolled || !isHomePage ? 'text-gray-700' : 'text-white hover:bg-white/10'}
                  >
                    {t('login')}
                  </Button>
                </Link>
                <Link href="/register">
                  <Button size="sm" style={{ backgroundColor: '#1B3A6B' }}>
                    {t('startApplication')}
                  </Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile hamburger */}
          <button
            className={`md:hidden p-2 rounded-lg ${scrolled || !isHomePage ? 'text-gray-700' : 'text-white'}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label={t('toggleMenu')}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 shadow-lg">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-sm font-medium text-gray-700 py-2"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2 border-t border-gray-100 flex items-center gap-3 flex-wrap">
              <span className="text-xs text-gray-400">{t('language')}</span>
              {routing.locales.map((l) => (
                <Link
                  key={l}
                  href={resolveArticleSwitchSlug(pathname, l) ?? pathname}
                  locale={l}
                  onClick={() => {
                    setLocaleCookie(l)
                    setIsOpen(false)
                  }}
                  className={`text-xs font-medium px-1.5 py-0.5 rounded ${
                    l === locale ? 'text-gray-900 font-semibold' : 'text-gray-400 hover:text-gray-700'
                  }`}
                >
                  {localeLabels[l]}
                </Link>
              ))}
            </div>
            <div className="pt-2 border-t border-gray-100 flex flex-col gap-2">
              {user ? (
                <Link href="/dashboard" onClick={() => setIsOpen(false)}>
                  <Button className="w-full" style={{ backgroundColor: '#1B3A6B' }}>
                    {t('mySite')}
                  </Button>
                </Link>
              ) : (
                <>
                  <Link href="/login" onClick={() => setIsOpen(false)}>
                    <Button variant="outline" className="w-full">{t('login')}</Button>
                  </Link>
                  <Link href="/register" onClick={() => setIsOpen(false)}>
                    <Button className="w-full" style={{ backgroundColor: '#1B3A6B' }}>
                      {t('startApplication')}
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
