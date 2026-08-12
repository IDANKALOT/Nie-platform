import Link from 'next/link'
import { articleHref } from '@/lib/articles/href'
import type { ArticleContent } from '../types'

const content: ArticleContent = {
  title: 'Sådan Får Du Et NIE Nummer Fra Udlandet',
  description:
    'Ansøgning hos et spansk konsulat i dit eget land: hvad der er anderledes end i Spanien, hvad du kan forvente af bookingsystemet, og hvornår en repræsentant giver mere mening.',
  breadcrumbHome: 'Forside',
  breadcrumbLabel: 'NIE Fra Udlandet',
  h1: 'Sådan Får Du Et NIE Nummer Fra Udlandet',
  updatedLabel: 'Sidst opdateret',
  lastUpdated: '2026-08-12',
  intro: (
    <p>
      Planlægger du ikke en rejse til Spanien, er ansøgning gennem dit lokale spanske
      konsulat den direkte statslige vej. Den følger de samme regler som ansøgning i
      Spanien, men den praktiske oplevelse — booking, dokumenter, afhentning — er
      forskellig nok til, at det er værd at vide, hvad du kan forvente, før du går i
      gang. (Vil du hellere springe konsulatet helt over, se vores side om{' '}
      <Link href={articleHref('nie-without-travelling', 'da')}>
        at få et NIE uden at rejse
      </Link>
      , via fuldmagt.)
    </p>
  ),
  body: (
    <>
      <section>
        <h2>Konsulaters tidsbestillingssystemer varierer fra land til land</h2>
        <p>
          Hvert spansk konsulat administrerer sin egen tidskalender, og
          efterspørgslen varierer enormt — nogle konsulater tilbyder tider inden for
          uger, andre er booket måneder frem, især i lande med mange udlændinge eller
          boligkøbere. Der er ingen mulighed for at booke hos et andet konsulat end
          det, der dækker din bopæl.
        </p>
      </section>

      <section>
        <h2>Hvad der ofte er anderledes end ansøgning i Spanien</h2>
        <p>
          Konsulater kræver oftere bekræftede oversættelser af dokumentationsbeviser,
          da de underliggende papirer (et jobtilbud, en boligkontrakt) ofte er
          udstedt uden for Spanien. Nogle konsulater udsteder også NIE-certifikatet
          med posten i stedet for at udlevere det ved tiden, hvilket lægger ekstra tid
          til, som du bør budgettere med. Tjek dit konkrete konsulats krav direkte, da
          de ikke er ensartede på tværs af lande.
        </p>
      </section>

      <section>
        <h2>Hvis ventetiden er for lang</h2>
        <p>
          Når dit nærmeste konsulats tidskalender er booket længere frem, end din
          tidsplan tillader, er det praktiske alternativ at ansøge via fuldmagt
          gennem en Spanien-baseret repræsentant, der i stedet ansøger hos en
          politistation i Spanien på dine vegne. Sådan fungerer Espallos service —
          ingen konsulatstid nødvendig.
        </p>
      </section>
    </>
  ),
  faqHeading: 'Ofte stillede spørgsmål',
  faq: [
    {
      question: 'Kan jeg ansøge hos ethvert spansk konsulat, eller kun det nærmeste?',
      answer:
        'Kun det konsulat, der dækker din registrerede bopæl — du kan ikke booke hos et konsulat i et andet område for at få kortere ventetid.',
    },
    {
      question: 'Koster det mere at ansøge hos konsulatet end i Spanien?',
      answer:
        'Myndighedsgebyret er det samme i begge tilfælde; den eneste sandsynlige ekstraudgift er oversættelse af dokumenter, hvis dit konsulat kræver det.',
    },
    {
      question: 'Hvordan modtager jeg mit NIE-certifikat, hvis jeg ansøger hos konsulatet?',
      answer:
        'Det varierer fra konsulat til konsulat — nogle udleverer det ved en opfølgende tid, andre sender det med posten. Bekræft processen, når du booker.',
    },
    {
      question: 'Går det hurtigere at bruge en repræsentant i Spanien end mit lokale konsulat?',
      answer:
        'Ofte ja, hvis dit konsulat har lange ventetider, da en repræsentant ansøger direkte hos en spansk politistation i stedet for at vente på en konsulatstid.',
    },
  ],
  ctaHeading: 'For lang ventetid hos konsulatet?',
  ctaText:
    'Espallo ansøger om dit NIE-nummer i Spanien via fuldmagt — ingen konsulatstid nødvendig, uanset hvor du er.',
  ctaButton: 'Spring konsulatsventetiden over',
  disclaimer:
    'Espallo er et administrativt servicebureau og ikke et advokatfirma. Vi yder ikke juridisk rådgivning. Vores samarbejdende advokater og notarer i Spanien er selvstændige og har et direkte retsforhold med dig som kunde.',
}

export default content
