import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/navigation'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'legal.privacy' })
  return { title: `${t('title')} – Espallo`, description: t('metaDescription') }
}

export default async function PrivatlivspolitikPage() {
  const t = await getTranslations('legal.privacy')
  const s2Items = t.raw('s2.items') as { label: string; text: string }[]
  const s3Items = t.raw('s3.items') as { label: string; text: string }[]
  const processors = t.raw('s4.processors') as { label: string; text: string }[]
  const s5Items = t.raw('s5.items') as string[]
  const s6Items = t.raw('s6.items') as { label: string; text: string }[]

  return (
    <div className="max-w-3xl mx-auto px-4 py-16 sm:px-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">{t('title')}</h1>
      <p className="text-sm text-gray-500 mb-10">{t('lastUpdated')}</p>

      <div className="prose prose-gray max-w-none space-y-8 text-gray-700 leading-relaxed">

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">{t('s1.heading')}</h2>
          <p>{t('s1.body')}</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">{t('s2.heading')}</h2>
          <p>{t('s2.intro')}</p>
          <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
            {s2Items.map((item) => (
              <li key={item.label}><strong>{item.label}</strong> {item.text}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">{t('s3.heading')}</h2>
          <div className="space-y-3 text-sm">
            {s3Items.map((item) => (
              <div key={item.label} className="p-3 bg-gray-50 rounded-lg">
                <strong>{item.label}</strong> {item.text}
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">{t('s4.heading')}</h2>
          <p>{t('s4.body')}</p>
          <p className="mt-2">{t('s4.processorsIntro')}</p>
          <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
            {processors.map((item) => (
              <li key={item.label}><strong>{item.label}</strong> {item.text}</li>
            ))}
          </ul>
          <p className="mt-2 text-sm">{t('s4.note')}</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">{t('s5.heading')}</h2>
          <p>{t('s5.intro')}</p>
          <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
            {s5Items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">{t('s6.heading')}</h2>
          <p>{t('s6.intro')}</p>
          <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
            {s6Items.map((item) => (
              <li key={item.label}><strong>{item.label}</strong> {item.text}</li>
            ))}
          </ul>
          <p className="mt-3">
            {t('s6.contactBefore')}
            <a href="https://www.datatilsynet.dk" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">{t('s6.contactLinkText')}</a>
            {t('s6.contactAfter')}
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">{t('s7.heading')}</h2>
          <p>
            {t('s7.before')}
            <Link href="/cookiepolitik" className="text-blue-600 underline">{t('s7.linkText')}</Link>
            {t('s7.after')}
          </p>
        </section>

      </div>
    </div>
  )
}
