import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookiepolitik – Espallo',
  description: 'Læs om vores brug af cookies på Espallo.',
}

export default function CookiepolitikPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16 sm:px-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Cookiepolitik</h1>
      <p className="text-sm text-gray-500 mb-10">Sidst opdateret: juni 2025</p>

      <div className="prose prose-gray max-w-none space-y-8 text-gray-700 leading-relaxed">

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Hvad er cookies?</h2>
          <p>
            Cookies er små tekstfiler, der gemmes på din enhed, når du besøger et website.
            De bruges til at huske dine præferencer og sikre, at platformen fungerer korrekt.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Cookies vi anvender</h2>

          <div className="space-y-4">
            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <div className="bg-gray-50 px-4 py-2">
                <h3 className="font-semibold text-sm text-gray-900">Nødvendige cookies</h3>
              </div>
              <div className="p-4 text-sm space-y-2">
                <div className="flex gap-4">
                  <span className="font-mono text-xs bg-gray-100 px-2 py-0.5 rounded w-40 shrink-0">sb-auth-token</span>
                  <span className="text-gray-600">Autentificeringscookie fra Supabase. Holder dig logget ind. Udløber efter sessionen eller 1 uge.</span>
                </div>
                <div className="flex gap-4">
                  <span className="font-mono text-xs bg-gray-100 px-2 py-0.5 rounded w-40 shrink-0">cookie-consent</span>
                  <span className="text-gray-600">Gemmer dit samtykke til cookies. Udløber efter 1 år.</span>
                </div>
              </div>
            </div>

            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <div className="bg-gray-50 px-4 py-2">
                <h3 className="font-semibold text-sm text-gray-900">Funktionelle cookies</h3>
              </div>
              <div className="p-4 text-sm">
                <p className="text-gray-600">Vi anvender ingen tredjeparts analytiske eller markedsføringscookies.</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Samtykke og afvisning</h2>
          <p>
            Nødvendige cookies kan ikke fravælges, da de er påkrævede for at platformen fungerer
            (f.eks. at forblive logget ind). Første gang du besøger siden, vises en cookiebanner
            hvor du kan acceptere eller afvise ikke-nødvendige cookies.
          </p>
          <p className="mt-2">
            Du kan til enhver tid slette cookies i din browsers indstillinger. Bemærk at dette
            vil logge dig ud af platformen.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Kontakt</h2>
          <p>
            Spørgsmål til vores cookiepolitik kan rettes til:{' '}
            <a href="mailto:info@espallo.com" className="text-blue-600 underline">
              info@espallo.com
            </a>
          </p>
        </section>

      </div>
    </div>
  )
}
