import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import { Button } from '@/components/ui/button'
import { ArrowRight, CheckCircle2, Clock, Shield } from 'lucide-react'

const PURPLE = '#7C5CFC'
const PURPLE_DARK = '#5B3DF0'
const PURPLE_BG = '#F5F3FF'
const PURPLE_PILL_BG = '#EDE9FE'

export default function Hero() {
  const t = useTranslations('home.hero')

  const trustItems = [
    { icon: CheckCircle2, text: t('trustFixedPrice') },
    { icon: Clock, text: t('trustResponseTime') },
    { icon: Shield, text: t('trustGdpr') },
  ]

  return (
    <section
      className="relative overflow-hidden"
      style={{ background: `linear-gradient(180deg, ${PURPLE_BG} 0%, #FFFFFF 70%)` }}
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 grid md:grid-cols-2 gap-12 md:gap-8 items-center">
        {/* Text column */}
        <div className="text-center md:text-left">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-8"
            style={{ backgroundColor: PURPLE_PILL_BG }}
          >
            <Shield className="w-3.5 h-3.5" style={{ color: PURPLE_DARK }} />
            <span className="text-xs font-medium" style={{ color: PURPLE_DARK }}>
              {t('badge')}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            {t('headlinePrefix')}{' '}
            <span className="relative inline-block">
              <span className="relative z-10" style={{ color: PURPLE }}>
                {t('headlineHighlight')}
              </span>
            </span>{' '}
            {t('headlineSuffix')}
          </h1>

          <p className="text-lg sm:text-xl text-gray-500 max-w-xl mx-auto md:mx-0 mb-8 leading-relaxed">
            {t('subtitle')}
          </p>

          {/* Trust checklist */}
          <div className="flex flex-col gap-3 mb-10 items-center md:items-start">
            {trustItems.map((item) => (
              <div key={item.text} className="flex items-center gap-2.5 text-gray-700">
                <item.icon className="w-4 h-4 flex-shrink-0" style={{ color: PURPLE }} />
                <span className="text-sm font-medium">{item.text}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link href="/register">
              <Button
                size="lg"
                className="text-base px-8 h-12 font-semibold shadow-lg hover:shadow-xl transition-all"
                style={{ backgroundColor: PURPLE, color: 'white' }}
              >
                {t('ctaPrimary')}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <a href="#how-it-works">
              <Button
                size="lg"
                variant="outline"
                className="text-base px-8 h-12 border-gray-200 text-gray-700 hover:bg-gray-50"
              >
                {t('ctaSecondary')}
              </Button>
            </a>
          </div>
        </div>

        {/* Mascot column */}
        <div className="relative flex justify-center md:justify-end">
          <div
            className="absolute w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] rounded-full blur-3xl opacity-40"
            style={{ backgroundColor: PURPLE }}
          />
          <div className="relative w-[240px] sm:w-[340px]">
            <Image
              src="/images/mascot.png"
              alt="Espallo"
              width={1536}
              height={1024}
              priority
              unoptimized
              className="w-full h-auto drop-shadow-xl"
            />
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <p className="text-xs text-gray-400 leading-relaxed text-center border-t border-gray-100 pt-6">
          {t('disclaimer')}
        </p>
      </div>
    </section>
  )
}
