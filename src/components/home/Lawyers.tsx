import { useTranslations } from 'next-intl'
import { MapPin, Star } from 'lucide-react'
import { PURPLE, PURPLE_PILL_BG, PURPLE_DARK } from '@/lib/theme'

type Lawyer = {
  name: string
  city: string
  specialization: string
  description: string
}

export default function Lawyers() {
  const t = useTranslations('home.lawyers')
  const lawyers = t.raw('list') as Lawyer[]
  const rating = 5

  return (
    <section id="lawyers" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: PURPLE }}>
            {t('eyebrow')}
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">
            {t('heading')}
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-xl mx-auto">
            {t('subheading')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {lawyers.map((lawyer) => (
            <div
              key={lawyer.name}
              className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-md transition-shadow"
            >
              {/* Avatar placeholder */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg mb-4"
                style={{ backgroundColor: PURPLE_DARK }}
              >
                {lawyer.name[0]}
              </div>

              <div className="flex items-center gap-0.5 mb-2">
                {Array.from({ length: rating }).map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <h3 className="font-semibold text-gray-900 text-sm mb-1">{lawyer.name}</h3>

              <div className="flex items-center gap-1 text-xs text-gray-400 mb-3">
                <MapPin className="w-3 h-3" />
                {lawyer.city}
              </div>

              <p className="text-xs text-gray-500 leading-relaxed mb-3">{lawyer.description}</p>

              <span
                className="inline-block text-xs px-2 py-1 rounded-md"
                style={{ backgroundColor: PURPLE_PILL_BG, color: PURPLE }}
              >
                {lawyer.specialization}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
