import Link from 'next/link'
import { articleHref } from '@/lib/articles/href'
import type { ArticleContent } from '../types'

const content: ArticleContent = {
  title: 'Hvad Koster Et NIE Nummer i Spanien?',
  description:
    'Forskellen på det officielle myndighedsgebyr for et NIE-nummer og prisen for at bruge en service, der klarer hele ansøgningen for dig.',
  breadcrumbHome: 'Forside',
  breadcrumbLabel: 'NIE Nummer Pris',
  h1: 'Hvad Koster Et NIE Nummer i Spanien?',
  updatedLabel: 'Sidst opdateret',
  lastUpdated: '2026-08-12',
  intro: (
    <p>
      Der er to forskellige omkostninger, folk mener, når de spørger om NIE-pris, og
      netop sammenblandingen af dem er der, forvirringen typisk opstår: det lille
      officielle myndighedsgebyr, og den (valgfrie) pris for at betale nogen for at
      klare ansøgningen for dig.
    </p>
  ),
  body: (
    <>
      <section>
        <h2>Det officielle myndighedsgebyr</h2>
        <p>
          Ansøgning om NIE kræver betaling af en fast administrativ afgift, Modelo 790
          código 012, direkte til det spanske skattevæsen (Agencia Tributaria) — et
          beskedent, statsfastsat beløb, uafhængigt af boligværdi, indkomst eller
          nationalitet. Gebyret ændrer sig ikke, uanset om du ansøger selv eller
          gennem en repræsentant; det betales under alle omstændigheder.
        </p>
      </section>

      <section>
        <h2>Hvad en service som Espallo reelt tager betaling for</h2>
        <p>
          Gebyret, du betaler en service, er ikke for selve NIE&apos;et — det er for
          arbejdet med at få tiden, forberede EX-15 korrekt, indsende på dine vegne, og
          undgå selv at skulle rejse for det. Espallo opkræver én fast pris på 195 EUR
          pr. ansøgning, som dækker hele processen fra start til slut — også i
          tilfælde, hvor du aldrig sætter dine ben i Spanien.
        </p>
      </section>

      <section>
        <h2>Er det værd at betale for hjælp?</h2>
        <p>
          Er du allerede i Spanien, tryg ved spansk bureaukrati, og kan let få en cita
          previa, koster det kun myndighedsgebyret at gøre det selv. Er du i udlandet,
          har en stram tidsplan (fx en overtagelsesdato på en bolig), eller allerede
          har fået en ansøgning afvist én gang, er den tid, du sparer ved ikke at skulle
          booke om eller indsende igen, som regel det, folk reelt betaler for. Se vores{' '}
          <Link href={articleHref('how-to-get-nie-number', 'da')}>
            trin-for-trin-guide
          </Link>{' '}
          for at vurdere, hvor meget af processen du selv er tryg ved at klare.
        </p>
      </section>
    </>
  ),
  faqHeading: 'Ofte stillede spørgsmål',
  faq: [
    {
      question: 'Betaler jeg myndighedsgebyret, selvom jeg bruger en service?',
      answer:
        'Ja. Gebyret Modelo 790 código 012 betales til det spanske skattevæsen, uanset hvem der indsender din ansøgning — det er adskilt fra en eventuel servicepris.',
    },
    {
      question: 'Koster NIE mere for boligkøbere end andre ansøgere?',
      answer:
        'Nej, myndighedsgebyret er det samme uanset årsagen til ansøgningen.',
    },
    {
      question: 'Er der skjulte omkostninger i ansøgningsprocessen?',
      answer:
        'Den primære ekstraudgift at budgettere med er dokumentforberedelse — bekræftede oversættelser eller apostiller, hvis nogen af dine dokumenter kræver det, hvilket varierer i pris fra udbyder til udbyder.',
    },
    {
      question: 'Hvad er inkluderet i Espallos faste pris?',
      answer:
        'Hele ansøgningsprocessen: formularforberedelse, tidsbestilling, indsendelse og opfølgning, indtil dit NIE-certifikat er udstedt — ingen separate gebyrer pr. trin.',
    },
  ],
  ctaHeading: 'Kend prisen på forhånd',
  ctaText:
    'Espallo opkræver én fast pris på 195 EUR for hele NIE-ansøgningen — ingen timeafregning, ingen overraskende gebyrer.',
  ctaButton: 'Få dit NIE-nummer',
  disclaimer:
    'Espallo er et administrativt servicebureau og ikke et advokatfirma. Vi yder ikke juridisk rådgivning. Vores samarbejdende advokater og notarer i Spanien er selvstændige og har et direkte retsforhold med dig som kunde.',
}

export default content
