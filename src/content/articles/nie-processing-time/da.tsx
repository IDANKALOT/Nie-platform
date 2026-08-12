import Link from 'next/link'
import { articleHref } from '@/lib/articles/href'
import type { ArticleContent } from '../types'

const content: ArticleContent = {
  title: 'Hvor Lang Tid Tager Det At Få Et NIE Nummer?',
  description:
    'Hvad der reelt bestemmer NIE-behandlingstiden — tidstilgængelighed, ikke papirarbejde — og hvordan du planlægger, hvis du har en deadline.',
  breadcrumbHome: 'Forside',
  breadcrumbLabel: 'NIE Behandlingstid',
  h1: 'Hvor Lang Tid Tager Det At Få Et NIE Nummer?',
  updatedLabel: 'Sidst opdateret',
  lastUpdated: '2026-08-12',
  intro: (
    <p>
      Der findes ingen fast behandlingstid for et NIE-nummer, for selve papirarbejdet
      går hurtigt — det, der varierer voldsomt, er, hvor lang tid det tager overhovedet
      at få en tid. Alle, der giver dig et præcist antal dage uden at kende din
      placering og vej, gætter.
    </p>
  ),
  body: (
    <>
      <section>
        <h2>Hvad der reelt bestemmer tidsplanen</h2>
        <p>
          Når du først sidder foran en betjent med de rette dokumenter, udstedes
          NIE&apos;et som regel samme dag eller inden for få dage. Den reelle variabel er
          ventetiden på at komme til den tid: travle politistationer og konsulater kan
          være booket fra få dage til flere måneder, afhængigt af placering og sæson.
          Se vores{' '}
          <Link href={articleHref('how-to-get-nie-number', 'da')}>
            trin-for-trin-guide
          </Link>{' '}
          for at se, hvor i processen denne flaskehals ligger.
        </p>
      </section>

      <section>
        <h2>Hvad der speeder det op, og hvad der bremser det</h2>
        <p>
          Korrekte, komplette dokumenter i første forsøg undgår den største
          forsinkelse: at skulle booke om efter en afvisning. En repræsentant med
          eksisterende adgang til tider — frem for at booke fra bunden selv — er som
          regel hurtigere end at prøve helt selv. Højsæson for boligkøb og udflytning
          (forår og tidligt efterår i mange områder) betyder typisk længere ventetider
          hos populære kontorer.
        </p>
      </section>

      <section>
        <h2>Hvis du har en fast deadline</h2>
        <p>
          Arbejder du mod en fast dato — en overtagelse af en bolig, en jobstart — så
          vent ikke og se, om der åbner sig en tid af sig selv. Start processen så
          tidligt som muligt, og overvej en repræsentant med eksisterende adgang til
          tider som en måde at fjerne den største usikkerhed fra din tidsplan.
        </p>
      </section>
    </>
  ),
  faqHeading: 'Ofte stillede spørgsmål',
  faq: [
    {
      question: 'Kan jeg betale ekstra for at få mit NIE hurtigere?',
      answer:
        'Der findes ingen officiel ekspresordning. Hastighed kommer fra adgang til tider og korrekte dokumenter i første forsøg, ikke fra et ekstra gebyr.',
    },
    {
      question: 'Går det hurtigere at ansøge via fuldmagt?',
      answer:
        'Det kan det, primært fordi en repræsentant måske allerede har adgang til tider, som ellers ville tage dig uger selv at finde.',
    },
    {
      question: 'Hvad er den største enkeltårsag til forsinkelse?',
      answer:
        'Tidstilgængelighed, med stor margin — ikke selve papirarbejdet, som behandles hurtigt, når det er indsendt korrekt.',
    },
    {
      question: 'Er behandlingen langsommere for bestemte nationaliteter?',
      answer:
        'Nej, processen og den typiske tidsramme er den samme uanset nationalitet.',
    },
  ],
  ctaHeading: 'Har du en deadline?',
  ctaText:
    'Espallo ansøger om dit NIE-nummer med vores eksisterende adgang til tider, så du ikke sidder fast og venter på, at en tid åbner sig.',
  ctaButton: 'Start din NIE-ansøgning nu',
  disclaimer:
    'Espallo er et administrativt servicebureau og ikke et advokatfirma. Vi yder ikke juridisk rådgivning. Vores samarbejdende advokater og notarer i Spanien er selvstændige og har et direkte retsforhold med dig som kunde.',
}

export default content
