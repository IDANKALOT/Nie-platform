import Link from 'next/link'
import { articleHref } from '@/lib/articles/href'
import type { ArticleContent } from '../types'

const content: ArticleContent = {
  title: 'Søk om NIE-Nummer i Spania',
  description:
    'Tre måter å søke om et spansk NIE-nummer på — i Spania, hos konsulatet eller via fullmakt — og hvordan du velger riktig for din situasjon.',
  breadcrumbHome: 'Hjem',
  breadcrumbLabel: 'Søk om NIE-Nummer',
  h1: 'Søk om NIE-Nummer i Spania',
  updatedLabel: 'Sist oppdatert',
  lastUpdated: '2026-08-12',
  intro: (
    <p>
      Det finnes tre måter å søke om et <strong>NIE-nummer</strong> på, og hvilken som
      passer avhenger nesten utelukkende av om — og når — du faktisk er i Spania. De
      fullstendige stegene for hver vei finner du i vår{' '}
      <Link href={articleHref('how-to-get-nie-number', 'no')}>guide til NIE-nummer</Link>.
      Denne siden handler om å velge riktig vei og komme i gang.
    </p>
  ),
  body: (
    <>
      <section>
        <h2>Dine tre alternativer</h2>
        <p>
          <strong>1. Søk i Spania.</strong> Har du allerede en reise booket, er det
          vanligvis den raskeste veien — du booker en cita previa hos en lokal Oficina
          de Extranjería og møter personlig opp.
        </p>
        <p>
          <strong>2. Søk hos et spansk konsulat.</strong> Reiser du ikke ennå,
          behandler de fleste spanske konsulater NIE-søknader, selv om tilgangen på
          timer varierer mye fra land til land og by til by.
        </p>
        <p>
          <strong>3. Søk via fullmakt.</strong> Du gir en spansk advokat fullmakt til å
          levere og hente NIE på dine vegne. Det er den eneste veien som verken krever
          time eller reise fra din side — til gjengjeld betaler du for representasjon
          i stedet for å ordne papirarbeidet selv.
        </p>
      </section>

      <section>
        <h2>Hva du trenger uansett vei</h2>
        <p>
          Alle veier krever de samme kjerneelementene: et gyldig pass, det utfylte
          EX-15-skjemaet og dokumentert bevis for hvorfor du trenger NIE (en
          reservasjonsavtale på en bolig, et jobbtilbud eller lignende). Se vår
          fullstendige{' '}
          <Link href={articleHref('nie-number-documents', 'no')}>
            NIE-dokumentliste
          </Link>{' '}
          før du booker noe, så du ikke blir avvist på grunn av et manglende dokument.
        </p>
      </section>

      <section>
        <h2>Hvis du velger fullmaktsveien</h2>
        <p>
          Du signerer en fullmakt (personlig hos en notar, eller på avstand avhengig av
          landet ditt), sender kopier av dokumentene dine, og advokaten din tar seg av
          timen og innsendelsen. Slik fungerer Espallos tjeneste: ingen jakt på en
          cita previa, ingen reise å planlegge rundt en myndighetstime.
        </p>
      </section>
    </>
  ),
  faqHeading: 'Ofte stilte spørsmål',
  faq: [
    {
      question: 'Hvilken søknadsvei er raskest?',
      answer:
        'Det avhenger av tilgangen på timer akkurat da, ikke av selve veien. En representant med eksisterende tilgang til timer er ofte raskere enn å booke helt selv fra bunnen.',
    },
    {
      question: 'Kan jeg bytte vei hvis mitt første valg ikke fungerer?',
      answer:
        'Ja — er konsulattimer i landet ditt fullbooket måneder frem, er et bytte til en fullmaktssøknad en vanlig og enkel løsning.',
    },
    {
      question: 'Trenger jeg en spansk bankkonto før jeg søker?',
      answer:
        'Nei. Et NIE-nummer er vanligvis en forutsetning for å åpne en spansk bankkonto, ikke omvendt.',
    },
    {
      question: 'Er søknaden forskjellig ved boligkjøp og arbeid?',
      answer:
        'Selve NIE-søknaden er den samme; det er kun dokumentasjonen for årsaken til søknaden som endrer seg.',
    },
  ],
  ctaHeading: 'Klar til å søke?',
  ctaText:
    'Espallo søker om NIE-nummeret ditt gjennom våre samarbeidende advokater i Spania — uten time eller reise fra din side.',
  ctaButton: 'Start din NIE-søknad',
  disclaimer:
    'Espallo er et administrativt tjenestebyrå, ikke et advokatfirma. Vi gir ikke juridisk rådgivning. Våre samarbeidende advokater og notarer i Spania har et direkte klientforhold med deg.',
}

export default content
