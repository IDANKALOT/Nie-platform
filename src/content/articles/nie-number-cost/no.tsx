import Link from 'next/link'
import { articleHref } from '@/lib/articles/href'
import type { ArticleContent } from '../types'

const content: ArticleContent = {
  title: 'Hva Koster Et NIE-Nummer i Spania?',
  description:
    'Forskjellen på det offisielle myndighetsgebyret for et NIE-nummer og prisen for å bruke en tjeneste som ordner hele søknaden for deg.',
  breadcrumbHome: 'Hjem',
  breadcrumbLabel: 'NIE Nummer Pris',
  h1: 'Hva Koster Et NIE-Nummer i Spania?',
  updatedLabel: 'Sist oppdatert',
  lastUpdated: '2026-08-12',
  intro: (
    <p>
      Det er to forskjellige kostnader folk mener når de spør om NIE-pris, og
      nettopp sammenblandingen av dem er der forvirringen vanligvis oppstår: det
      lille offisielle myndighetsgebyret, og den (valgfrie) prisen for å betale noen
      for å ordne søknaden for deg.
    </p>
  ),
  body: (
    <>
      <section>
        <h2>Det offisielle myndighetsgebyret</h2>
        <p>
          Å søke om NIE krever betaling av en fast administrativ avgift, Modelo 790
          código 012, direkte til det spanske skattevesenet (Agencia Tributaria) — et
          beskjedent, statlig fastsatt beløp, uavhengig av boligverdi, inntekt eller
          nasjonalitet. Gebyret endrer seg ikke ut fra om du søker selv eller gjennom
          en representant; det betales uansett.
        </p>
      </section>

      <section>
        <h2>Hva en tjeneste som Espallo faktisk tar betalt for</h2>
        <p>
          Gebyret du betaler en tjeneste er ikke for selve NIE-en — det er for
          arbeidet med å skaffe timen, forberede EX-15 riktig, levere på dine vegne, og
          slippe å reise for det. Espallo tar én fast pris på 215 EUR per søknad, som
          dekker hele prosessen fra start til slutt — også i tilfeller der du aldri
          trenger å reise til Spania.
        </p>
      </section>

      <section>
        <h2>Er det verdt å betale for hjelp?</h2>
        <p>
          Er du allerede i Spania, trygg på spansk byråkrati, og kan lett få en cita
          previa, koster det bare myndighetsgebyret å gjøre det selv. Er du i
          utlandet, har en stram tidsplan (for eksempel en overtakelsesdato på en
          bolig), eller allerede har fått en søknad avvist én gang, er tiden du sparer
          ved å slippe å booke om eller levere på nytt, som regel det folk faktisk
          betaler for. Se vår{' '}
          <Link href={articleHref('how-to-get-nie-number', 'no')}>
            steg-for-steg-guide
          </Link>{' '}
          for å vurdere hvor mye av prosessen du er komfortabel med å gjøre selv.
        </p>
      </section>
    </>
  ),
  faqHeading: 'Ofte stilte spørsmål',
  faq: [
    {
      question: 'Betaler jeg myndighetsgebyret selv om jeg bruker en tjeneste?',
      answer:
        'Ja. Gebyret Modelo 790 código 012 betales til det spanske skattevesenet uansett hvem som leverer søknaden din — det er atskilt fra en eventuell tjenestepris.',
    },
    {
      question: 'Koster NIE mer for boligkjøpere enn andre søkere?',
      answer:
        'Nei, myndighetsgebyret er det samme uansett årsaken til søknaden.',
    },
    {
      question: 'Finnes det skjulte kostnader i søknadsprosessen?',
      answer:
        'Den viktigste ekstrakostnaden å budsjettere med er dokumentforberedelse — bekreftede oversettelser eller apostiller, hvis noen av dokumentene dine krever det, noe som varierer i pris fra leverandør til leverandør.',
    },
    {
      question: 'Hva er inkludert i Espallos faste pris?',
      answer:
        'Hele søknadsprosessen: skjemaforberedelse, timebestilling, innsendelse og oppfølging til NIE-sertifikatet ditt er utstedt — ingen separate gebyrer per steg.',
    },
  ],
  ctaHeading: 'Kjenn prisen på forhånd',
  ctaText:
    'Espallo tar én fast pris på 215 EUR for hele NIE-søknaden — ingen timebetaling, ingen overraskende gebyrer.',
  ctaButton: 'Skaff NIE-nummeret ditt',
  disclaimer:
    'Espallo er et administrativt tjenestebyrå, ikke et advokatfirma. Vi gir ikke juridisk rådgivning. Våre samarbeidende advokater og notarer i Spania har et direkte klientforhold med deg.',
}

export default content
