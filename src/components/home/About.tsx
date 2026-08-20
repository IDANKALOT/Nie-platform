import { useTranslations } from 'next-intl'
import { Users, Award, Globe, HeartHandshake } from 'lucide-react'
import { PURPLE, PURPLE_PILL_BG } from '@/lib/theme'

const valueIcons = [Award, Globe, Users, HeartHandshake]

export default function About() {
  const t = useTranslations('home.about')
  const stats = t.raw('stats') as { number: string; label: string }[]
  const values = t.raw('values') as { title: string; description: string }[]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Text */}
          <div>
            <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: PURPLE }}>
              {t('eyebrow')}
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
              {t('heading')}
            </h2>
            <p className="mt-5 text-gray-500 leading-relaxed">
              {t('paragraph1')}
            </p>
            <p className="mt-4 text-gray-500 leading-relaxed">
              {t('paragraph2')}
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center p-4 rounded-xl" style={{ backgroundColor: PURPLE_PILL_BG }}>
                  <div className="text-2xl font-bold" style={{ color: PURPLE }}>{stat.number}</div>
                  <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Values grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {values.map((value, index) => {
              const Icon = valueIcons[index]
              return (
                <div
                  key={value.title}
                  className="p-6 rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all"
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
                    style={{ backgroundColor: PURPLE_PILL_BG }}
                  >
                    <Icon className="w-5 h-5" style={{ color: PURPLE }} />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">{value.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
