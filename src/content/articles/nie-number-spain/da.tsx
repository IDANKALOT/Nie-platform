import Link from 'next/link'
import { articleHref } from '@/lib/articles/href'
import type { ArticleContent } from '../types'

const content: ArticleContent = {
  title: 'NIE Nummer Spanien – Få Hjælp Til Dit NIE-Nummer',
  description:
    'Skal du bruge et NIE-nummer i Spanien? Se hvordan ansøgningen fungerer, hvilke dokumenter du skal bruge, og hvordan Espallo klarer hele processen for dig.',
  breadcrumbHome: 'Forside',
  breadcrumbLabel: 'NIE Nummer Spanien',
  h1: 'NIE Nummer Spanien – Professionel Hjælp Til Din Ansøgning',
  updatedLabel: 'Sidst opdateret',
  lastUpdated: '2026-08-12',
  intro: (
    <p>
      Skal du købe bolig, åbne bankkonto, arbejde eller flytte til Spanien? Så får du
      brug for et <strong>NIE-nummer</strong> (Número de Identificación de Extranjero) —
      det spanske identifikationsnummer, som myndighederne bruger til udlændinge i alle
      officielle sammenhænge. Her får du overblikket: hvad det er, hvem der skal bruge
      det, og hvordan Espallo håndterer hele ansøgningen for dig, uden at du behøver
      rejse til Spanien.
    </p>
  ),
  body: (
    <>
      <section>
        <h2>Hvad er et NIE-nummer helt præcist?</h2>
        <p>
          NIE er et unikt, permanent identifikationsnummer, som spanske myndigheder,
          banker, notarer og skattevæsen bruger til at identificere dig i officielle
          sager. Et NIE-nummer giver ikke i sig selv opholdsret i Spanien — det er en
          identifikation, ikke en opholdstilladelse. Læs mere i vores uddybende artikel om{' '}
          <Link href={articleHref('what-is-an-nie-number', 'da')}>hvad et NIE-nummer er</Link>.
        </p>
      </section>

      <section>
        <h2>Hvem skal have et NIE-nummer?</h2>
        <p>Du får brug for et NIE-nummer, hvis du blandt andet skal:</p>
        <ul>
          <li>Købe eller sælge ejendom i Spanien</li>
          <li>Åbne en spansk bankkonto</li>
          <li>Arbejde som lønmodtager eller selvstændig (autónomo)</li>
          <li>Betale spansk skat, herunder ejendomsskat for ikke-residenter</li>
          <li>Købe bil, oprette forsyning eller skrive under på en lejekontrakt</li>
          <li>Søge om opholdskort (TIE) som ikke-EU-borger</li>
        </ul>
      </section>

      <section>
        <h2>Sådan foregår ansøgningen normalt</h2>
        <p>
          Den almindelige vej går gennem en <em>cita previa</em> (forudbestilt tid) hos
          en udpeget politistation (Oficina de Extranjería) i Spanien, eller — hvis du
          endnu ikke er i landet — det spanske konsulat i Danmark. Her afleverer du
          formularen EX-15 sammen med dit pas og dokumentation for den økonomiske,
          erhvervsmæssige eller sociale årsag til ansøgningen, og betaler et mindre
          administrativt gebyr (Modelo 790, código 012), før NIE-certifikatet udstedes.
        </p>
        <p>
          Det er netop her, mange strander: konsulatstider kan være booket måneder frem,
          EX-15-formularen udfyldes let forkert, og et manglende dokument betyder som
          regel, at man må starte forfra med en ny tid. Se den fulde{' '}
          <Link href={articleHref('how-to-get-nie-number', 'da')}>
            trin-for-trin-guide til at få et NIE-nummer
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Sådan hjælper Espallo</h2>
        <p>
          Espallo klarer papirarbejdet, tidsbestillingen og indsendelsen for dig gennem
          vores netværk af spanske advokater — også med muligheder, hvor du hverken skal
          rejse til Spanien eller vente måneder på en konsulatstid. Du udfylder dine
          oplysninger online, underskriver digitalt, og så tager vi over.
        </p>
      </section>
    </>
  ),
  faqHeading: 'Ofte stillede spørgsmål',
  faq: [
    {
      question: 'Kan jeg få et NIE-nummer uden at rejse til Spanien?',
      answer:
        'Ja, i mange tilfælde kan en advokat søge på dine vegne med en fuldmagt, uden at du selv skal møde op hos myndighed eller konsulat.',
    },
    {
      question: 'Hvor lang tid tager det at få et NIE-nummer?',
      answer:
        'Det afhænger meget af, hvor svært det er at få en tid. Direkte ansøgninger kan tage adskillige uger; med en repræsentant, der allerede har adgang til tider, går det typisk hurtigere.',
    },
    {
      question: 'Udløber et NIE-nummer?',
      answer:
        'Nej, selve NIE-nummeret udløber aldrig. Det fysiske certifikat kan udstedes på ny, hvis du mister det, og nummeret forbliver gyldigt, selv hvis du forlader og senere vender tilbage til Spanien.',
    },
    {
      question: 'Er NIE det samme som opholdstilladelse?',
      answer:
        'Nej. NIE er kun et identifikationsnummer. Opholdstilladelse (og TIE-kortet for ikke-EU-borgere) er en separat proces, som ikke alle med NIE-nummer får brug for.',
    },
    {
      question: 'Hvilke dokumenter skal jeg bruge til ansøgningen?',
      answer:
        'Typisk et gyldigt pas, den udfyldte EX-15-formular samt dokumentation for årsagen til ansøgningen, fx en reservationsaftale på en bolig. Se vores fulde dokumentliste.',
    },
  ],
  ctaHeading: 'Har du brug for hjælp til dit NIE-nummer?',
  ctaText:
    'Espallo håndterer ansøgning, tidsbestilling og papirarbejde for danske kunder — til en fast pris på 195 EUR, uden at du behøver rejse til Spanien.',
  ctaButton: 'Få hjælp til dit NIE-nummer',
  disclaimer:
    'Espallo er et administrativt servicebureau og ikke et advokatfirma. Vi yder ikke juridisk rådgivning. Vores samarbejdende advokater og notarer i Spanien er selvstændige og har et direkte retsforhold med dig som kunde.',
}

export default content
