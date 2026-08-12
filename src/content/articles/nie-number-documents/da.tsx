import Link from 'next/link'
import { articleHref } from '@/lib/articles/href'
import type { ArticleContent } from '../types'

const content: ArticleContent = {
  title: 'Hvilke Dokumenter Skal Du Bruge Til Et NIE Nummer?',
  description:
    'Kernelisten over dokumenter til en NIE-ansøgning, plus hvad der ændrer sig afhængigt af om du køber bolig, arbejder eller åbner en bankkonto.',
  breadcrumbHome: 'Forside',
  breadcrumbLabel: 'NIE Nummer Dokumenter',
  h1: 'Hvilke Dokumenter Skal Du Bruge Til Et NIE Nummer?',
  updatedLabel: 'Sidst opdateret',
  lastUpdated: '2026-08-12',
  intro: (
    <p>
      Alle NIE-ansøgninger kræver de samme kernedokumenter, plus ét dokument, der
      ændrer sig afhængigt af årsagen til din ansøgning. Manglende eller forkerte
      dokumenter er den største enkeltårsag til afviste ansøgninger i vores{' '}
      <Link href={articleHref('how-to-get-nie-number', 'da')}>
        trin-for-trin-proces
      </Link>
      , så det er værd at tjekke denne liste mod din situation, før du booker en tid.
    </p>
  ),
  body: (
    <>
      <section>
        <h2>Kernedokumenter, påkrævet for alle ansøgere</h2>
        <ul>
          <li>Et gyldigt pas, plus en kopi af identifikationssiderne</li>
          <li>Den udfyldte og underskrevne EX-15-ansøgningsformular</li>
          <li>Kvittering for betaling af det administrative gebyr Modelo 790, código 012</li>
          <li>
            Ét nyt pasfoto (kræves af nogle, men ikke alle kontorer — tjek med din
            konkrete station eller dit konsulat)
          </li>
        </ul>
      </section>

      <section>
        <h2>Dokumentet, der ændrer sig efter årsag</h2>
        <p>Du skal også vise, hvorfor du skal bruge NIE. De mest almindelige dokumentationsbeviser er:</p>
        <ul>
          <li>
            <strong>Boligkøb:</strong> en underskrevet reservationsaftale (contrato de
            reserva) eller depositumaftale med sælger eller mægler
          </li>
          <li>
            <strong>Arbejde:</strong> et underskrevet jobtilbud eller ansættelseskontrakt
            fra en spansk arbejdsgiver
          </li>
          <li>
            <strong>Åbning af bankkonto:</strong> et brev fra banken, der bekræfter, at
            de kræver et NIE for at fortsætte
          </li>
          <li>
            <strong>Etablering som selvstændig (autónomo):</strong> dokumentation for
            registreret erhvervsaktivitet eller en forretningsplan
          </li>
          <li>
            <strong>Ingen specifik årsag endnu (generel interesse):</strong> nogle
            kontorer accepterer en generel hensigtserklæring om investering eller
            bopæl, selvom dette håndteres mindre konsekvent end kategorierne ovenfor
          </li>
        </ul>
      </section>

      <section>
        <h2>Hvis et dokument ikke er på spansk</h2>
        <p>
          Dokumenter udstedt uden for Spanien kræver nogle gange en bekræftet
          (autoriseret) spansk oversættelse, og i nogle tilfælde en apostille til at
          bekræfte, at originalen er ægte. Om dette gælder, afhænger af dokumenttypen
          og det kontor, der behandler din ansøgning — det er værd at bekræfte det før
          din tid, da en oversættelse typisk tager længere tid at ordne end selve
          tidsbestillingen.
        </p>
      </section>
    </>
  ),
  faqHeading: 'Ofte stillede spørgsmål',
  faq: [
    {
      question: 'Skal jeg medbringe originaler, eller er kopier nok?',
      answer:
        'Medbring originaler plus fotokopier. Kontorer tjekker som regel originalen og beholder kopien.',
    },
    {
      question: 'Hvad sker der, hvis jeg møder op med det forkerte dokumentationsbevis?',
      answer:
        'Din ansøgning bliver som regel afvist på stedet, og du skal booke en ny tid med det korrekte dokument — der er ingen løsning samme dag.',
    },
    {
      question: 'Skal mit pas have en minimumsgyldighed?',
      answer:
        'Det bør være gyldigt i overskuelig fremtid — et udløbet eller snart-udløbende pas er grund til afvisning på nogle kontorer.',
    },
    {
      question: 'Kan jeg bruge kørekort i stedet for pas?',
      answer:
        'Nej, et gyldigt pas (eller nationalt ID-kort for nogle EU-borgere) er påkrævet; et kørekort accepteres ikke som legitimation til en NIE-ansøgning.',
    },
  ],
  ctaHeading: 'Er du usikker på, hvilke dokumenter du skal bruge?',
  ctaText:
    'Espallo gennemgår din situation og forbereder det præcise dokumentsæt til din ansøgning, så intet bliver afvist på grund af forkert papirarbejde.',
  ctaButton: 'Få hjælp til at forberede din NIE-ansøgning',
  disclaimer:
    'Espallo er et administrativt servicebureau og ikke et advokatfirma. Vi yder ikke juridisk rådgivning. Vores samarbejdende advokater og notarer i Spanien er selvstændige og har et direkte retsforhold med dig som kunde.',
}

export default content
