import Link from 'next/link'
import { articleHref } from '@/lib/articles/href'
import type { ArticleContent } from '../types'

const content: ArticleContent = {
  title: 'Ansøgning om NIE Nummer i Spanien',
  description:
    'Tre måder at søge om et spansk NIE-nummer på — i Spanien, hos konsulatet eller via fuldmagt — og hvordan du vælger den rette til din situation.',
  breadcrumbHome: 'Forside',
  breadcrumbLabel: 'NIE Nummer Ansøgning',
  h1: 'Ansøgning om NIE Nummer i Spanien',
  updatedLabel: 'Sidst opdateret',
  lastUpdated: '2026-08-12',
  intro: (
    <p>
      Der er tre måder at søge om et <strong>NIE-nummer</strong> på, og hvilken der
      giver mening afhænger næsten udelukkende af, om — og hvornår — du rent faktisk
      er i Spanien. De fulde trin for hver af disse veje finder du i vores{' '}
      <Link href={articleHref('how-to-get-nie-number', 'da')}>guide til NIE-nummer</Link>.
      Denne side handler om at vælge den rette vej og komme i gang.
    </p>
  ),
  body: (
    <>
      <section>
        <h2>Dine tre muligheder</h2>
        <p>
          <strong>1. Ansøg i Spanien.</strong> Har du allerede en rejse booket, er det
          som regel den hurtigste vej — du booker en cita previa hos en lokal Oficina de
          Extranjería og møder personligt op.
        </p>
        <p>
          <strong>2. Ansøg hos et spansk konsulat.</strong> Rejser du ikke endnu,
          behandler de fleste spanske konsulater NIE-ansøgninger, selvom
          tidstilgængeligheden varierer meget fra land til land og by til by.
        </p>
        <p>
          <strong>3. Ansøg via fuldmagt.</strong> Du giver en spansk advokat fuldmagt
          til at indsende og hente NIE på dine vegne. Det er den eneste vej, der hverken
          kræver tid eller rejse fra din side — til gengæld betaler du for
          repræsentation i stedet for selv at klare papirarbejdet.
        </p>
      </section>

      <section>
        <h2>Hvad du skal bruge, uanset vej</h2>
        <p>
          Alle veje kræver de samme kerneelementer: et gyldigt pas, den udfyldte
          EX-15-formular og dokumenteret bevis for, hvorfor du skal bruge NIE (en
          reservationsaftale på en bolig, et jobtilbud eller lignende). Se vores fulde{' '}
          <Link href={articleHref('nie-number-documents', 'da')}>
            NIE-dokumentliste
          </Link>{' '}
          før du booker noget, så du ikke bliver afvist på grund af et manglende papir.
        </p>
      </section>

      <section>
        <h2>Hvis du vælger fuldmagtsvejen</h2>
        <p>
          Du underskriver en fuldmagt (personligt hos en notar, eller på afstand
          afhængigt af dit land), sender kopier af dine dokumenter, og din advokat
          klarer tid og indsendelse. Sådan fungerer Espallos service: ingen jagt på en
          cita previa, ingen rejse at planlægge omkring et myndighedstidspunkt.
        </p>
      </section>
    </>
  ),
  faqHeading: 'Ofte stillede spørgsmål',
  faq: [
    {
      question: 'Hvilken ansøgningsvej er hurtigst?',
      answer:
        'Det afhænger af den aktuelle tidstilgængelighed, ikke af selve vejen. En repræsentant med eksisterende adgang til tider er ofte hurtigere end at booke selv fra bunden.',
    },
    {
      question: 'Kan jeg skifte vej, hvis mit første valg ikke fungerer?',
      answer:
        'Ja — er konsulatstider i dit land booket måneder frem, er et skift til en fuldmagtsansøgning en almindelig og enkel løsning.',
    },
    {
      question: 'Skal jeg have en spansk bankkonto, før jeg ansøger?',
      answer:
        'Nej. Et NIE-nummer er normalt en forudsætning for at åbne en spansk bankkonto, ikke omvendt.',
    },
    {
      question: 'Er ansøgningen forskellig ved boligkøb og arbejde?',
      answer:
        'Selve NIE-ansøgningen er den samme; det er kun dokumentationen for årsagen til ansøgningen, der ændrer sig.',
    },
  ],
  ctaHeading: 'Klar til at ansøge?',
  ctaText:
    'Espallo ansøger om dit NIE-nummer gennem vores samarbejdende advokater i Spanien — uden tid eller rejse fra din side.',
  ctaButton: 'Start din NIE-ansøgning',
  disclaimer:
    'Espallo er et administrativt servicebureau og ikke et advokatfirma. Vi yder ikke juridisk rådgivning. Vores samarbejdende advokater og notarer i Spanien er selvstændige og har et direkte retsforhold med dig som kunde.',
}

export default content
