import Link from 'next/link'
import { articleHref } from '@/lib/articles/href'
import type { ArticleContent } from '../types'

const content: ArticleContent = {
  title: 'Hvor Lang Tid Tar Det Å Få Et NIE-Nummer?',
  description:
    'Hva som faktisk avgjør NIE-behandlingstiden — tilgang på timer, ikke papirarbeid — og hvordan du planlegger hvis du har en frist.',
  breadcrumbHome: 'Hjem',
  breadcrumbLabel: 'NIE Behandlingstid',
  h1: 'Hvor Lang Tid Tar Det Å Få Et NIE-Nummer?',
  updatedLabel: 'Sist oppdatert',
  lastUpdated: '2026-08-12',
  intro: (
    <p>
      Det finnes ingen fast behandlingstid for et NIE-nummer, for selve papirarbeidet
      går raskt — det som varierer voldsomt, er hvor lang tid det tar å i det hele
      tatt få en time. Alle som gir deg et eksakt antall dager uten å kjenne til
      stedet og veien din, gjetter.
    </p>
  ),
  body: (
    <>
      <section>
        <h2>Hva som faktisk avgjør tidsplanen</h2>
        <p>
          Når du først sitter foran en tjenestemann med de riktige dokumentene,
          utstedes NIE-en som regel samme dag eller innen noen dager. Den reelle
          variabelen er ventetiden frem til den timen: travle politistasjoner og
          konsulater kan være fullbooket fra noen dager til flere måneder, avhengig av
          sted og sesong. Se vår{' '}
          <Link href={articleHref('how-to-get-nie-number', 'no')}>
            steg-for-steg-guide
          </Link>{' '}
          for hvor i prosessen denne flaskehalsen ligger.
        </p>
      </section>

      <section>
        <h2>Hva som skynder på det, og hva som bremser det</h2>
        <p>
          Riktige, komplette dokumenter i første forsøk unngår den største
          forsinkelsen: å måtte booke på nytt etter en avvisning. En representant med
          eksisterende tilgang til timer — fremfor å booke helt selv fra bunnen — er
          som regel raskere enn å prøve helt på egen hånd. Høysesong for boligkjøp og
          utflytting (vår og tidlig høst i mange områder) betyr som regel lengre
          ventetider hos populære kontorer.
        </p>
      </section>

      <section>
        <h2>Hvis du har en fast frist</h2>
        <p>
          Jobber du mot en fast dato — en overtakelse av en bolig, en jobbstart — vent
          ikke og se om en time åpner seg av seg selv. Start prosessen så tidlig som
          mulig, og vurder en representant med eksisterende tilgang til timer som en
          måte å fjerne den største usikkerheten fra tidsplanen din.
        </p>
      </section>
    </>
  ),
  faqHeading: 'Ofte stilte spørsmål',
  faq: [
    {
      question: 'Kan jeg betale ekstra for å få NIE-en raskere?',
      answer:
        'Det finnes ingen offisiell hurtigordning. Hastighet kommer fra tilgang til timer og riktige dokumenter i første forsøk, ikke fra et ekstra gebyr.',
    },
    {
      question: 'Går det raskere å søke via fullmakt?',
      answer:
        'Det kan det, hovedsakelig fordi en representant kanskje allerede har tilgang til timer som ellers ville tatt deg uker å finne selv.',
    },
    {
      question: 'Hva er den vanligste enkeltårsaken til forsinkelser?',
      answer:
        'Tilgang på timer, med god margin — ikke selve papirarbeidet, som behandles raskt når det er levert korrekt.',
    },
    {
      question: 'Er behandlingen tregere for enkelte nasjonaliteter?',
      answer:
        'Nei, prosessen og den typiske tidsrammen er den samme uansett nasjonalitet.',
    },
  ],
  ctaHeading: 'Har du en frist?',
  ctaText:
    'Espallo søker om NIE-nummeret ditt med vår eksisterende tilgang til timer, så du ikke sitter fast og venter på at en time åpner seg.',
  ctaButton: 'Start NIE-søknaden din nå',
  disclaimer:
    'Espallo er et administrativt tjenestebyrå, ikke et advokatfirma. Vi gir ikke juridisk rådgivning. Våre samarbeidende advokater og notarer i Spania har et direkte klientforhold med deg.',
}

export default content
