import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Handelsbetingelser – NIE Nummer Service',
  description: 'Læs vores handelsbetingelser for NIE Nummer Service.',
}

export default function HandelsbetingelserPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16 sm:px-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Handelsbetingelser</h1>
      <p className="text-sm text-gray-500 mb-10">Sidst opdateret: juni 2025</p>

      <div className="prose prose-gray max-w-none space-y-8 text-gray-700 leading-relaxed">

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Om NIE Nummer Service</h2>
          <p>
            NIE Nummer Service er et administrativt servicebureau, der hjælper danske kunder med at
            forberede og indsende ansøgninger om spansk NIE-nummer (Número de Identificación de Extranjero).
          </p>
          <p className="mt-3 p-4 bg-amber-50 border border-amber-200 rounded-xl text-sm text-amber-800">
            <strong>Vigtigt:</strong> NIE Nummer Service er <strong>ikke et advokatfirma</strong> og er
            ikke registreret som advokat i henhold til retsplejeloven. Vi yder ikke juridisk rådgivning.
            Vores ydelse består alene af administrativ bistand og formidling af kontakt til selvstændige,
            samarbejdende advokater og notarer i Spanien.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">2. Vores ydelse</h2>
          <p>Serviceprisen på 215 EUR (ekskl. moms) inkluderer:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
            <li>Digital formularudfyldelse af EX-18 ansøgning</li>
            <li>Digital underskrift af fuldmagtsdokument</li>
            <li>Automatisk generering og arkivering af ansøgningsdokumenter</li>
            <li>Koordinering og videreformidling til samarbejdende advokat eller notar i Spanien</li>
            <li>Løbende statusopdateringer via kundeplatform</li>
            <li>Kundesupport på dansk</li>
          </ul>
          <p className="mt-3 text-sm">
            <strong>Ikke inkluderet:</strong> Advokat-, notar- og myndighedsgebyrer i Spanien betales
            direkte af kunden til den pågældende samarbejdspartner. Disse gebyrer varierer og aftales
            direkte med advokaten/notaren.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">3. Samarbejdende advokater og notarer</h2>
          <p>
            De advokater og notarer, vi samarbejder med i Spanien, er selvstændige erhvervsdrivende,
            der er registrerede og autoriserede i overensstemmelse med spansk ret. De indgår et direkte
            retsforhold med kunden og er ansvarlige for den juridiske behandling af ansøgningen.
          </p>
          <p className="mt-2">
            NIE Nummer Service er ikke part i aftalen mellem kunden og advokaten/notaren og hæfter
            ikke for disses handlinger, rådgivning eller fejl.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Ingen garanti for godkendelse</h2>
          <p>
            Vi kan ikke garantere, at en NIE-ansøgning godkendes af de spanske myndigheder. Afgørelsen
            træffes udelukkende af de relevante spanske myndigheder (Policía Nacional eller den spanske
            ambassade). Vores servicepris refunderes ikke, hvis en ansøgning afvises af myndighederne,
            da vores ydelse (administrativ bistand og formidling) er leveret fuldt ud.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Betaling og moms</h2>
          <p>
            Serviceprisen er 215 EUR ekskl. moms. Dansk moms (25%) tillægges for kunder med bopæl i
            Danmark, medmindre der er tale om en erhvervskunde med gyldigt momsregistreringsnummer.
            Betaling sker sikkert via vores betalingsplatform.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Fortrydelsesret</h2>
          <p>
            Som forbruger har du som udgangspunkt 14 dages fortrydelsesret ved køb online, jf.
            forbrugeraftaleloven. Da vores service påbegyndes straks efter betaling og på din udtrykkelige
            anmodning, accepterer du ved bestilling, at fortrydelsesretten bortfalder, når vi har påbegyndt
            behandlingen af din ansøgning.
          </p>
          <p className="mt-2">
            Hvis behandlingen <strong>ikke</strong> er påbegyndt, kan du fortryde inden 14 dage og modtage
            fuld refundering. Kontakt os på info@nienummerservice.dk.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">7. Ansvarsbegrænsning</h2>
          <p>
            NIE Nummer Service er ikke ansvarlig for forsinkelser eller afvisninger forårsaget af
            spanske myndigheder, samarbejdende advokater/notarer, forkerte oplysninger fra kunden,
            eller forhold uden for vores kontrol. Vores erstatningsansvar er under alle omstændigheder
            begrænset til den betalte servicepris.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">8. Klager</h2>
          <p>
            Klager kan rettes til info@nienummerservice.dk. Forbrugere kan desuden indbringe sagen for
            Forbrugerklagenævnet, Nævnenes Hus, Toldboden 2, 8800 Viborg,{' '}
            <a href="https://www.naevneneshus.dk" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
              www.naevneneshus.dk
            </a>.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">9. Lovvalg og værneting</h2>
          <p>
            Disse handelsbetingelser er underlagt dansk ret. Tvister afgøres ved de danske domstole
            med Københavns Byret som første instans, medmindre andet følger af ufravigelig lovgivning.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">10. Kontakt</h2>
          <p>
            NIE Nummer Service<br />
            CVR: [INDSÆT CVR]<br />
            E-mail: info@nienummerservice.dk<br />
            Telefon: +45 XX XX XX XX
          </p>
        </section>
      </div>
    </div>
  )
}
