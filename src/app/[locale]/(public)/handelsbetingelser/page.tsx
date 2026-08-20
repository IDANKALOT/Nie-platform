import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'legal.terms' })
  return { title: `${t('title')} – Espallo`, description: t('metaDescription') }
}

export default async function HandelsbetingelserPage() {
  const t = await getTranslations('legal.terms')
  const s2Items = t.raw('s2.items') as string[]

  return (
    <div className="max-w-3xl mx-auto px-4 py-16 sm:px-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">{t('title')}</h1>
      <p className="text-sm text-gray-500 mb-10">{t('lastUpdated')}</p>

      <div className="prose prose-gray max-w-none space-y-8 text-gray-700 leading-relaxed">

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">{t('s1.heading')}</h2>
          <p>{t('s1.body')}</p>
          <p className="mt-3 p-4 bg-amber-50 border border-amber-200 rounded-xl text-sm text-amber-800">
            <strong>{t('s1.noticeLabel')}</strong> Espallo <strong>{t('s1.noticeBoldPart')}</strong>{t('s1.noticeRest')}
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">{t('s2.heading')}</h2>
          <p>{t('s2.intro')}</p>
          <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
            {s2Items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="mt-3 text-sm">
            <strong>{t('s2.notIncludedLabel')}</strong> {t('s2.notIncludedText')}
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">{t('s3.heading')}</h2>
          <p>{t('s3.body1')}</p>
          <p className="mt-2">{t('s3.body2')}</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">{t('s4.heading')}</h2>
          <p>{t('s4.body')}</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">{t('s5.heading')}</h2>
          <p>{t('s5.body')}</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">{t('s6.heading')}</h2>
          <p>{t('s6.body1')}</p>
          <p className="mt-2">
            {t('s6.body2Before')}<strong>{t('s6.body2Bold')}</strong>{t('s6.body2After')}
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">{t('s7.heading')}</h2>
          <p>{t('s7.body')}</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">{t('s8.heading')}</h2>
          <p>
            {t('s8.before')}
            <a href="https://www.naevneneshus.dk" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
              {t('s8.linkText')}
            </a>
            {t('s8.after')}
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">{t('s9.heading')}</h2>
          <p>{t('s9.body')}</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">{t('s10.heading')}</h2>
          <p>
            {t('s10.line1')}<br />
            {t('s10.line2')}<br />
            {t('s10.line3')}
          </p>
        </section>
      </div>
    </div>
  )
}
