import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { CheckCircle2, Clock, LayoutDashboard, FileText, CalendarClock, MessageSquare, Settings } from 'lucide-react'
import { PURPLE, PURPLE_DARK, PURPLE_PILL_BG } from '@/lib/theme'

export default function DashboardPreview() {
  const t = useTranslations('home.dashboardPreview')
  const steps = t.raw('steps') as { label: string; done: boolean }[]
  const sidebarItems = [LayoutDashboard, FileText, CalendarClock, MessageSquare, Settings]

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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

        <div className="relative grid md:grid-cols-[auto_1fr] gap-8 items-center max-w-4xl mx-auto">
          <div className="relative hidden md:flex justify-center">
            <Image
              src="/images/mascot-laptop.png"
              alt="Espallo"
              width={700}
              height={700}
              unoptimized
              className="w-[200px] h-auto drop-shadow-xl"
            />
            <p
              className="absolute -top-8 -left-4 text-sm font-medium max-w-[140px]"
              style={{ color: PURPLE_DARK }}
            >
              {t('annotation')}
            </p>
          </div>

          {/* Fake dashboard window */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-xl overflow-hidden">
            <div className="flex">
              <div className="w-12 sm:w-14 border-r border-gray-100 py-4 flex flex-col items-center gap-4" style={{ backgroundColor: '#FAFAFF' }}>
                {sidebarItems.map((Icon, i) => (
                  <Icon
                    key={i}
                    className="w-4 h-4"
                    style={i === 0 ? { color: PURPLE } : { color: '#C4C4D0' }}
                  />
                ))}
              </div>
              <div className="flex-1 p-4 sm:p-6">
                <p className="text-xs text-gray-400 mb-3">{t('windowTitle')}</p>
                <div className="space-y-2.5">
                  {steps.map((step) => (
                    <div
                      key={step.label}
                      className="flex items-center justify-between px-3 py-2.5 rounded-lg"
                      style={{ backgroundColor: step.done ? PURPLE_PILL_BG : '#F9FAFB' }}
                    >
                      <span className="text-sm font-medium text-gray-800">{step.label}</span>
                      {step.done ? (
                        <span className="flex items-center gap-1 text-xs font-medium" style={{ color: PURPLE }}>
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          {t('statusDone')}
                        </span>
                      ) : (
                        <span className="flex items-center gap-1 text-xs font-medium text-gray-400">
                          <Clock className="w-3.5 h-3.5" />
                          {t('statusInProgress')}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
