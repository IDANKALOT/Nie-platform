import Link from 'next/link'
import { articleHref } from '@/lib/articles/href'
import type { ArticleContent } from '../types'

const content: ArticleContent = {
  title: 'Kan Man Få Et NIE Nummer Uden At Rejse Til Spanien?',
  description:
    'Ja — sådan fungerer en NIE-ansøgning via fuldmagt helt præcist, hvad den koster i tillid og papirarbejde, og hvornår den giver mere mening end en rejse.',
  breadcrumbHome: 'Forside',
  breadcrumbLabel: 'NIE Uden At Rejse',
  h1: 'Kan Man Få Et NIE Nummer Uden At Rejse Til Spanien?',
  updatedLabel: 'Sidst opdateret',
  lastUpdated: '2026-08-12',
  intro: (
    <p>
      Ja. Du behøver hverken være fysisk til stede i Spanien eller hos et spansk
      konsulat for at få et NIE-nummer — en spansk advokat kan søge på dine vegne med
      en fuldmagt. Det er den vej, folk bruger, når de køber bolig på afstand, ikke har
      et spansk konsulat i nærheden, eller simpelthen ikke kan afsætte tid til rejsen.
    </p>
  ),
  body: (
    <>
      <section>
        <h2>Sådan fungerer fuldmagtsvejen reelt</h2>
        <p>
          Du giver skriftligt en spansk advokat fuldmagt til at indsende
          EX-15-ansøgningen og hente NIE-certifikatet på dine vegne. I de fleste
          tilfælde kan fuldmagten underskrives og bevidnes på afstand (fx hos en notar
          i dit hjemland, hvorefter dokumentet legaliseres til brug i Spanien), så hele
          processen — underskrift, dokumentindsamling, indsendelse og modtagelse af dit
          certifikat — kan foregå uden at du booker en flyrejse.
        </p>
      </section>

      <section>
        <h2>Hvad denne vej er — og ikke er</h2>
        <p>
          Det er ikke en genvej uden om den officielle proces — samme EX-15-formular,
          samme dokumenter og samme myndighedsgebyr gælder stadig. Det, der ændrer sig,
          er, hvem der fysisk møder op til tiden: din repræsentant, ikke dig. Se vores{' '}
          <Link href={articleHref('nie-number-documents', 'da')}>dokumentliste</Link>{' '}
          for præcis, hvad du skal sende.
        </p>
      </section>

      <section>
        <h2>Hvornår det giver mere mening end at rejse</h2>
        <p>
          Har du allerede en rejse til Spanien planlagt, kan personlig ansøgning være
          lige så hurtig. Fuldmagtsvejen giver mest mening, når du har en deadline (fx
          en overtagelse af en bolig), men ikke når frem til at rejse i tide, når dit
          nærmeste konsulat har lange ventetider, eller når du simpelthen hellere vil
          undgå at bruge en rejsedag på at stå i kø hos en myndighed.
        </p>
      </section>
    </>
  ),
  faqHeading: 'Ofte stillede spørgsmål',
  faq: [
    {
      question: 'Er en digital NIE-ansøgning juridisk gyldig?',
      answer:
        'Ja — fuldmagt er et standardiseret, juridisk anerkendt instrument i Spanien, der bruges til langt mere end NIE-ansøgninger, herunder boligkøb og virksomhedsstiftelse.',
    },
    {
      question: 'Skal jeg besøge en notar i mit eget land?',
      answer:
        'Som regel ja, for at underskrive og bevidne fuldmagten, selvom det præcise krav afhænger af dit land og en eventuel legaliseringsaftale (fx apostille) med Spanien.',
    },
    {
      question: 'Hvordan ved jeg, at min advokat rent faktisk har indsendt min ansøgning?',
      answer:
        'En seriøs service bekræfter hvert trin og udleverer dit NIE-certifikat, når det er udstedt — spørg aktivt om statusopdateringer, hvis du ikke modtager dem uopfordret.',
    },
    {
      question: 'Kan jeg stadig rejse til Spanien senere, selvom jeg ansøgte på afstand?',
      answer:
        'Ja, NIE-nummeret er gyldigt uanset hvordan det blev opnået, og begrænser på ingen måde fremtidige rejser eller ansøgninger.',
    },
  ],
  ctaHeading: 'Få dit NIE uden at forlade hjemmet',
  ctaText:
    'Espallo håndterer hele NIE-ansøgningen på afstand gennem vores samarbejdende advokater i Spanien — ingen flyrejse, ingen tid at jagte.',
  ctaButton: 'Start din digitale NIE-ansøgning',
  disclaimer:
    'Espallo er et administrativt servicebureau og ikke et advokatfirma. Vi yder ikke juridisk rådgivning. Vores samarbejdende advokater og notarer i Spanien er selvstændige og har et direkte retsforhold med dig som kunde.',
}

export default content
