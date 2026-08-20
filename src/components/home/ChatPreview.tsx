import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { ArrowRight, MessageCircle, FileQuestion, CalendarClock, UserRound } from 'lucide-react'
import { PURPLE, PURPLE_DARK, PURPLE_PILL_BG, PURPLE_BG } from '@/lib/theme'

const linkIcons = [MessageCircle, FileQuestion, CalendarClock, UserRound]

export default function ChatPreview() {
  const t = useTranslations('home.chatPreview')
  const links = t.raw('links') as string[]

  return (
    <section className="py-20" style={{ backgroundColor: PURPLE_BG }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Chat bubble */}
          <div className="flex items-start gap-3">
            <Image
              src="/images/mascot.png"
              alt="Espallo"
              width={56}
              height={56}
              unoptimized
              className="w-14 h-14 object-contain flex-shrink-0"
            />
            <div
              className="rounded-2xl rounded-tl-sm px-5 py-4 shadow-sm max-w-xs"
              style={{ backgroundColor: PURPLE_PILL_BG }}
            >
              <p className="text-sm font-medium text-gray-900">{t('greeting')}</p>
            </div>
          </div>

          {/* Quick links card */}
          <div className="relative">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-3 space-y-1">
              {links.map((link, i) => {
                const Icon = linkIcons[i]
                return (
                  <div
                    key={link}
                    className="flex items-center justify-between gap-3 px-3 py-2.5 rounded-xl hover:bg-gray-50 transition-colors"
                  >
                    <span className="flex items-center gap-2.5 text-sm font-medium text-gray-700">
                      <Icon className="w-4 h-4" style={{ color: PURPLE }} />
                      {link}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-gray-300 flex-shrink-0" />
                  </div>
                )
              })}
            </div>
            <p
              className="hidden md:block absolute -right-4 -top-10 text-sm font-medium max-w-[160px] text-right"
              style={{ color: PURPLE_DARK }}
            >
              {t('annotation')}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
