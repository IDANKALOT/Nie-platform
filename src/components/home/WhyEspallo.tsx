import { useTranslations } from 'next-intl'
import { UserRound, Zap, ShieldCheck, Heart } from 'lucide-react'
import { PURPLE, PURPLE_PILL_BG } from '@/lib/theme'

const icons = [UserRound, Zap, ShieldCheck, Heart]

export default function WhyEspallo() {
  const t = useTranslations('home.whyEspallo')
  const cards = t.raw('cards') as { title: string; description: string }[]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: PURPLE }}>
          {t('eyebrow')}
        </span>
        <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900 mb-10">
          {t('headingPrefix')} <span style={{ color: PURPLE }}>{t('headingHighlight')}</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((card, i) => {
            const Icon = icons[i]
            return (
              <div
                key={card.title}
                className="p-6 rounded-2xl border border-gray-100"
                style={{ backgroundColor: PURPLE_PILL_BG }}
              >
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center mb-4 shadow-sm">
                  <Icon className="w-5 h-5" style={{ color: PURPLE }} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1.5">{card.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{card.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
