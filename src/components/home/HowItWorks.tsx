import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { FileText, PenLine, Building2, CheckCircle } from 'lucide-react'
import { PURPLE, PURPLE_PILL_BG } from '@/lib/theme'

const stepIcons = [FileText, PenLine, Building2, CheckCircle]

export default function HowItWorks() {
  const t = useTranslations('home.howItWorks')
  const steps = t.raw('steps') as { title: string; description: string }[]

  return (
    <section id="how-it-works" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-[1fr_auto] gap-12 items-center">
        <div>
          <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: PURPLE }}>
            {t('eyebrow')}
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">
            {t('heading')}
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-xl">
            {t('subheading')}
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8 max-w-xl">
            {steps.map((step, index) => {
              const Icon = stepIcons[index]
              return (
                <div key={step.title} className="flex flex-col items-start">
                  <div className="flex items-center gap-2 mb-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: PURPLE_PILL_BG }}
                    >
                      <Icon className="w-5 h-5" style={{ color: PURPLE }} />
                    </div>
                    <span
                      className="text-xs font-bold px-2 py-0.5 rounded-full text-white"
                      style={{ backgroundColor: PURPLE }}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="text-base font-semibold text-gray-900 mb-1">{step.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
                </div>
              )
            })}
          </div>
        </div>

        <div className="hidden md:flex justify-center">
          <Image
            src="/images/mascot-nie-folder.png"
            alt="Espallo"
            width={700}
            height={933}
            unoptimized
            className="w-[220px] h-auto drop-shadow-xl"
          />
        </div>
      </div>
    </section>
  )
}
