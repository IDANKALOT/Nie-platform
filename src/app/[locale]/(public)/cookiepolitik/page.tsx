import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'legal.cookies' })
  return { title: `${t('title')} – Espallo`, description: t('metaDescription') }
}

export default async function CookiepolitikPage() {
  const t = await getTranslations('legal.cookies')
  const necessaryItems = t.raw('s2.necessaryItems') as { name: string; text: string }[]

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

          <div className="space-y-4">
            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <div className="bg-gray-50 px-4 py-2">
                <h3 className="font-semibold text-sm text-gray-900">{t('s2.necessaryTitle')}</h3>
              </div>
              <div className="p-4 text-sm space-y-2">
                {necessaryItems.map((item) => (
                  <div key={item.name} className="flex gap-4">
                    <span className="font-mono text-xs bg-gray-100 px-2 py-0.5 rounded w-40 shrink-0">{item.name}</span>
                    <span className="text-gray-600">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <div className="bg-gray-50 px-4 py-2">
                <h3 className="font-semibold text-sm text-gray-900">{t('s2.functionalTitle')}</h3>
              </div>
              <div className="p-4 text-sm">
                <p className="text-gray-600">{t('s2.functionalText')}</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">{t('s3.heading')}</h2>
          <p>{t('s3.body1')}</p>
          <p className="mt-2">{t('s3.body2')}</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">{t('s4.heading')}</h2>
          <p>
            {t('s4.before')}
            <a href="mailto:info@espallo.com" className="text-blue-600 underline">
              info@espallo.com
            </a>
          </p>
        </section>

      </div>
    </div>
  )
}
