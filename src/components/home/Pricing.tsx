import { getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import { Button } from '@/components/ui/button'
import { createClient } from '@/lib/supabase/server'
import { CheckCircle2, Info } from 'lucide-react'
import type { Package } from '@/types'

export default async function Pricing() {
  const t = await getTranslations('home.pricing')
  const supabase = await createClient()

  const { data: packages } = await supabase
    .from('packages')
    .select('*')
    .eq('is_active', true)
    .order('sort_order', { ascending: true })

  if (!packages || packages.length === 0) return null

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

        <div className="flex flex-wrap justify-center gap-8">
          {(packages as Package[]).map((pkg) => {
            const price = `${(pkg.price_cents / 100).toFixed(0)} ${pkg.currency}`
            return (
              <div key={pkg.id} className="w-full max-w-sm">
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden h-full flex flex-col">
                  {/* Header */}
                  <div className="p-8 text-center" style={{ background: 'linear-gradient(135deg, #1B3A6B, #2A5298)' }}>
                    <span className="text-white/70 text-sm font-medium">{pkg.name}</span>
                    <div className="mt-2 flex items-baseline justify-center gap-1">
                      <span className="text-5xl font-bold text-white">{(pkg.price_cents / 100).toFixed(0)}</span>
                      <span className="text-2xl font-semibold text-white/80">{pkg.currency}</span>
                    </div>
                    <p className="mt-2 text-white/70 text-sm">{t('priceNote')}</p>
                  </div>

                  {/* Features */}
                  <div className="p-8 flex-1 flex flex-col">
                    {pkg.description && (
                      <p className="text-sm text-gray-500 mb-4">{pkg.description}</p>
                    )}
                    {pkg.features.length > 0 && (
                      <>
                        <p className="text-sm font-semibold text-gray-900 mb-4">{t('includedLabel')}</p>
                        <ul className="space-y-3">
                          {pkg.features.map((item) => (
                            <li key={item} className="flex items-start gap-3">
                              <CheckCircle2
                                className="w-4 h-4 mt-0.5 flex-shrink-0"
                                style={{ color: '#2D8E6C' }}
                              />
                              <span className="text-sm text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}

                    <div className="mt-auto pt-6">
                      <Link href="/register" className="block">
                        <Button
                          className="w-full h-12 text-base font-semibold"
                          style={{ backgroundColor: '#1B3A6B' }}
                        >
                          {t('cta', { price })}
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Disclaimer */}
        <div className="max-w-lg mx-auto mt-8 p-4 bg-amber-50 border border-amber-200 rounded-xl flex gap-3">
          <Info className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
          <p className="text-xs text-amber-700 leading-relaxed">
            <strong>{t('disclaimerLabel')}</strong> {t('disclaimer')}
          </p>
        </div>
        <p className="text-center text-xs text-gray-400 mt-3">
          {t('note')}
        </p>
      </div>
    </section>
  )
}
