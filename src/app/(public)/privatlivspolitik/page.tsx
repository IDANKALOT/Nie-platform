import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privatlivspolitik – NIE Nummer Service',
  description: 'Læs hvordan NIE Nummer Service behandler dine personoplysninger.',
}

export default function PrivatlivspolitikPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16 sm:px-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Privatlivspolitik</h1>
      <p className="text-sm text-gray-500 mb-10">Sidst opdateret: juni 2025</p>

      <div className="prose prose-gray max-w-none space-y-8 text-gray-700 leading-relaxed">

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Den dataansvarlige</h2>
          <p>
            NIE Nummer Service (CVR: [INDSÆT CVR]) er dataansvarlig for behandlingen af de
            personoplysninger, vi indsamler om dig i forbindelse med brug af vores tjeneste.
            Kontakt: info@nienummerservice.dk
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">2. Hvilke oplysninger vi behandler</h2>
          <p>Vi behandler følgende kategorier af personoplysninger:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
            <li><strong>Kontaktoplysninger:</strong> Navn, e-mailadresse, telefonnummer</li>
            <li><strong>Identifikationsoplysninger:</strong> Pasnummer, udstedelsesdato, udløbsdato</li>
            <li><strong>Personoplysninger:</strong> Fødselsdato, fødested, nationalitet, køn, civilstatus</li>
            <li><strong>Adresseoplysninger:</strong> Bopælsadresse, postnummer, by, land</li>
            <li><strong>Digital underskrift:</strong> Billedfil af din digitale underskrift</li>
            <li><strong>Tekniske data:</strong> IP-adresse, browsertype (via cookies)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">3. Formål og retsgrundlag</h2>
          <div className="space-y-3 text-sm">
            <div className="p-3 bg-gray-50 rounded-lg">
              <strong>Levering af vores service (kontrakt, art. 6(1)(b) GDPR):</strong> Vi behandler dine
              oplysninger for at kunne udfylde og indsende din NIE-ansøgning samt koordinere med
              samarbejdende advokater og notarer i Spanien.
            </div>
            <div className="p-3 bg-gray-50 rounded-lg">
              <strong>Retlig forpligtelse (art. 6(1)(c) GDPR):</strong> Vi er forpligtet til at opbevare
              visse oplysninger af regnskabsmæssige årsager i henhold til bogføringsloven.
            </div>
            <div className="p-3 bg-gray-50 rounded-lg">
              <strong>Berettiget interesse (art. 6(1)(f) GDPR):</strong> Vi behandler tekniske data for
              at sikre og forbedre vores platform.
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Videregivelse af oplysninger</h2>
          <p>
            Vi videregiver dine personoplysninger til de samarbejdende advokater eller notarer i
            Spanien, der behandler din NIE-ansøgning. Dette er nødvendigt for at levere vores service.
          </p>
          <p className="mt-2">
            Vi benytter følgende databehandlere (leverandører):
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
            <li><strong>Supabase Inc. (USA):</strong> Databaser og fillagring. Overførsel sker med
            standardkontraktklausuler (SCC) godkendt af EU-Kommissionen.</li>
            <li><strong>Vercel Inc. (USA):</strong> Hosting af platformen. Overførsel sker med SCC.</li>
          </ul>
          <p className="mt-2 text-sm">
            Vi sælger aldrig dine personoplysninger til tredjeparter.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Opbevaring</h2>
          <p>
            Vi opbevarer dine oplysninger så længe det er nødvendigt for at levere vores service og
            overholde retlige forpligtelser:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
            <li>Ansøgningsdata: 5 år efter afsluttet sag (bogføringsloven)</li>
            <li>Kontooplysninger: Slettes 2 år efter din konto deaktiveres</li>
            <li>Tekniske logs: 90 dage</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Dine rettigheder</h2>
          <p>Du har følgende rettigheder i henhold til GDPR:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
            <li><strong>Indsigt:</strong> Du kan anmode om en kopi af dine oplysninger</li>
            <li><strong>Berigtigelse:</strong> Du kan få forkerte oplysninger rettet</li>
            <li><strong>Sletning:</strong> Du kan anmode om sletning (begrænset af retlige forpligtelser)</li>
            <li><strong>Begrænsning:</strong> Du kan anmode om begrænsning af behandlingen</li>
            <li><strong>Dataportabilitet:</strong> Du kan modtage dine data i et maskinlæsbart format</li>
            <li><strong>Indsigelse:</strong> Du kan gøre indsigelse mod behandling baseret på berettiget interesse</li>
          </ul>
          <p className="mt-3">
            For at udøve dine rettigheder kontaktes vi på info@nienummerservice.dk. Du kan også klage til
            Datatilsynet: <a href="https://www.datatilsynet.dk" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">datatilsynet.dk</a>, Borgergade 28, 5., 1300 København K.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">7. Cookies</h2>
          <p>
            Vi anvender cookies for at sikre funktionaliteten af vores platform og til
            analyseformål. Se vores{' '}
            <a href="/cookiepolitik" className="text-blue-600 underline">cookiepolitik</a> for
            nærmere oplysninger.
          </p>
        </section>

      </div>
    </div>
  )
}
