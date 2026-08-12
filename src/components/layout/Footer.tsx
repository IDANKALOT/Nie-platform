import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { Shield, Mail, Phone } from 'lucide-react'

export default function Footer() {
  const t = useTranslations('common.footer')
  const tNav = useTranslations('common.nav')

  const serviceLinks = [
    { href: '/#how-it-works', label: tNav('howItWorks') },
    { href: '/#pricing', label: tNav('pricing') },
    { href: '/register', label: tNav('startApplication') },
    { href: '/#faq', label: tNav('faq') },
  ]

  const legalLinks = [
    { href: '/privatlivspolitik', label: t('privacyPolicy') },
    { href: '/cookiepolitik', label: t('cookiePolicy') },
    { href: '/handelsbetingelser', label: t('terms') },
    { href: '/gdpr', label: t('gdpr') },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#2A5298' }}>
                <Shield className="w-4 h-4 text-white" />
              </div>
              <span className="font-semibold text-lg">Espallo</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              {t('tagline')}
            </p>
            <div className="mt-4 space-y-2">
              <a
                href="mailto:info@espallo.com"
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                info@espallo.com
              </a>
              <a
                href="tel:+34603527252"
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" />
                +34 603 527 252
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-sm mb-4 text-gray-200">{t('servicesHeading')}</h3>
            <ul className="space-y-2">
              {serviceLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-sm mb-4 text-gray-200">{t('legalHeading')}</h3>
            <ul className="space-y-2">
              {legalLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Legal disclaimer */}
        <div className="mt-8 p-4 bg-gray-800/50 rounded-xl">
          <p className="text-xs text-gray-500 leading-relaxed">
            <strong className="text-gray-400">{t('disclaimerLabel')}</strong> {t('disclaimer')}
          </p>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-gray-600">
            {t('copyright', { year: new Date().getFullYear() })}
          </p>
        </div>
      </div>
    </footer>
  )
}
