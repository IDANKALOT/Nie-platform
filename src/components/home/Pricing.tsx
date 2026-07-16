import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { Button } from '@/components/ui/button'
import { CheckCircle2, Info } from 'lucide-react'

export default function Pricing() {
  const t = useTranslations('home.pricing')
  const included = t.raw('included') as string[]

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: '#2D8E6C' }}>
            {t('eyebrow')}
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">
            {t('heading')}
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            {t('subheading')}
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            {/* Header */}
            <div className="p-8 text-center" style={{ background: 'linear-gradient(135deg, #1B3A6B, #2A5298)' }}>
              <span className="text-white/70 text-sm font-medium">{t('servicePrice')}</span>
              <div className="mt-2 flex items-baseline justify-center gap-1">
                <span className="text-5xl font-bold text-white">215</span>
                <span className="text-2xl font-semibold text-white/80">EUR</span>
              </div>
              <p className="mt-2 text-white/70 text-sm">{t('priceNote')}</p>
            </div>

            {/* Features */}
            <div className="p-8">
              <p className="text-sm font-semibold text-gray-900 mb-4">{t('includedLabel')}</p>
              <ul className="space-y-3">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2
                      className="w-4 h-4 mt-0.5 flex-shrink-0"
                      style={{ color: '#2D8E6C' }}
                    />
                    <span className="text-sm text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Disclaimer */}
              <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-xl flex gap-3">
                <Info className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                <p className="text-xs text-amber-700 leading-relaxed">
                  <strong>{t('disclaimerLabel')}</strong> {t('disclaimer')}
                </p>
              </div>

              <Link href="/register" className="block mt-6">
                <Button
                  className="w-full h-12 text-base font-semibold"
                  style={{ backgroundColor: '#1B3A6B' }}
                >
                  {t('cta')}
                </Button>
              </Link>

              <p className="text-center text-xs text-gray-400 mt-3">
                {t('note')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
