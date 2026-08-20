import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { PURPLE, PURPLE_DARKER } from '@/lib/theme'

export default function CtaBanner() {
  const t = useTranslations('home.ctaBanner')

  return (
    <section className="py-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="relative overflow-hidden rounded-3xl px-6 py-10 sm:px-12 sm:py-12 flex flex-col sm:flex-row items-center gap-8"
          style={{ background: `linear-gradient(135deg, ${PURPLE_DARKER}, #2A1D7A)` }}
        >
          <Image
            src="/images/mascot.png"
            alt="Espallo"
            width={220}
            height={147}
            unoptimized
            className="hidden sm:block w-44 h-auto flex-shrink-0"
          />

          <div className="flex-1 text-center sm:text-left">
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#C9B8FF' }}>
              {t('eyebrow')}
            </span>
            <h2 className="mt-1 text-2xl sm:text-3xl font-bold text-white">
              {t('heading')}
            </h2>
            <p className="mt-1 text-sm" style={{ color: '#C9B8FF' }}>
              {t('subtext')}
            </p>
          </div>

          <div className="flex flex-col items-center sm:items-end gap-2 flex-shrink-0">
            <Link href="/register">
              <Button
                size="lg"
                className="text-base px-8 h-12 font-semibold shadow-lg hover:shadow-xl transition-all"
                style={{ backgroundColor: PURPLE, color: 'white' }}
              >
                {t('button')}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <p className="text-xs" style={{ color: '#C9B8FF' }}>{t('priceCaption')}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
