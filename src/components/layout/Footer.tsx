import Link from 'next/link'
import { Shield, Mail, Phone } from 'lucide-react'

export default function Footer() {
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
              <span className="font-semibold text-lg">Espalvo</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Vi hjælper danske kunder med at få et spansk NIE-nummer gennem erfarne
              advokater og notarer i Spanien. Professionelt, sikkert og nemt.
            </p>
            <div className="mt-4 space-y-2">
              <a
                href="mailto:info@nienummerservice.dk"
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                info@nienummerservice.dk
              </a>
              <a
                href="tel:+4512345678"
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" />
                +45 12 34 56 78
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-sm mb-4 text-gray-200">Tjenester</h3>
            <ul className="space-y-2">
              {[
                { href: '/#how-it-works', label: 'Sådan fungerer det' },
                { href: '/#pricing', label: 'Priser' },
                { href: '/register', label: 'Start ansøgning' },
                { href: '/#faq', label: 'FAQ' },
              ].map((item) => (
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
            <h3 className="font-semibold text-sm mb-4 text-gray-200">Juridisk</h3>
            <ul className="space-y-2">
              {[
                { href: '/privatlivspolitik', label: 'Privatlivspolitik' },
                { href: '/cookiepolitik', label: 'Cookiepolitik' },
                { href: '/handelsbetingelser', label: 'Handelsbetingelser' },
                { href: '/gdpr', label: 'GDPR' },
              ].map((item) => (
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
            <strong className="text-gray-400">Vigtigt:</strong> Espalvo er et administrativt servicebureau og ikke et advokatfirma (jf. retsplejeloven). Vi yder ikke juridisk rådgivning. Vores samarbejdende advokater og notarer i Spanien er selvstændige erhvervsdrivende med et direkte retsforhold til kunden. Vi kan ikke garantere godkendelse af NIE-ansøgninger, da dette afgøres af spanske myndigheder. Advokat-, notar- og myndighedsomkostninger betales direkte af kunden og er ikke inkluderet i serviceprisen.
          </p>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} Espalvo. Alle rettigheder forbeholdes.
          </p>
          <p className="text-xs text-gray-600">
            CVR: [INDSÆT CVR] · info@nienummerservice.dk
          </p>
        </div>
      </div>
    </footer>
  )
}
