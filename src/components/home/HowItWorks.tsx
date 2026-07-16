import { useTranslations } from 'next-intl'
import { FileText, PenLine, Building2, CheckCircle } from 'lucide-react'

const stepIcons = [FileText, PenLine, Building2, CheckCircle]

export default function HowItWorks() {
  const t = useTranslations('home.howItWorks')
  const steps = t.raw('steps') as { title: string; description: string }[]

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: '#2D8E6C' }}>
            {t('eyebrow')}
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">
            {t('heading')}
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-xl mx-auto">
            {t('subheading')}
          </p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute hidden lg:block top-10 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = stepIcons[index]
              return (
                <div key={step.title} className="relative flex flex-col items-center text-center group">
                  <div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center mb-5 shadow-md transition-transform group-hover:-translate-y-1"
                    style={{ backgroundColor: '#F0F4FF' }}
                  >
                    <Icon className="w-8 h-8" style={{ color: '#1B3A6B' }} />
                  </div>
                  <div
                    className="absolute top-0 right-0 sm:right-auto sm:left-14 text-xs font-bold px-2 py-0.5 rounded-full text-white"
                    style={{ backgroundColor: '#2D8E6C' }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <h3 className="text-base font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
