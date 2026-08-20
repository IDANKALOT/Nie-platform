import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { PURPLE, PURPLE_BG } from '@/lib/theme'

const images = ['/images/everywhere-plaza.jpg', '/images/everywhere-beach.jpg', '/images/everywhere-heart.jpg', '/images/everywhere-city.jpg']

export default function Everywhere() {
  const t = useTranslations('home.everywhere')
  const captions = t.raw('captions') as string[]

  return (
    <section className="py-20" style={{ backgroundColor: PURPLE_BG }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: PURPLE }}>
            {t('eyebrow')}
          </span>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((src, i) => (
            <div key={src} className="relative rounded-2xl overflow-hidden aspect-[3/4] shadow-md">
              <Image
                src={src}
                alt={captions[i]}
                fill
                unoptimized
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent" />
              <p className="absolute bottom-4 left-4 right-4 text-white font-semibold text-sm leading-snug">
                {captions[i]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
