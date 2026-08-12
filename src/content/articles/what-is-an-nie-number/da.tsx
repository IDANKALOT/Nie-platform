import Link from 'next/link'
import { articleHref } from '@/lib/articles/href'
import type { ArticleContent } from '../types'

const content: ArticleContent = {
  title: 'Hvad Er Et NIE Nummer i Spanien?',
  description:
    'Kort forklaret: hvad et spansk NIE-nummer er, hvordan det ser ud, hvem der udsteder det, og hvorfor det ikke er det samme som opholdstilladelse.',
  breadcrumbHome: 'Forside',
  breadcrumbLabel: 'Hvad Er Et NIE Nummer',
  h1: 'Hvad Er Et NIE Nummer i Spanien?',
  updatedLabel: 'Sidst opdateret',
  lastUpdated: '2026-08-12',
  intro: (
    <p>
      NIE står for <strong>Número de Identificación de Extranjero</strong> — bogstaveligt
      &quot;identifikationsnummer for udlændinge&quot;. Det er det nummer, Spanien
      tildeler enhver ikke-spanier, som landet skal identificere i juridiske,
      økonomiske eller administrative sammenhænge — og som regel det første, man får
      brug for, når man skal ordne noget officielt i Spanien.
    </p>
  ),
  body: (
    <>
      <section>
        <h2>Hvordan ser et NIE-nummer ud?</h2>
        <p>
          Det er en kort alfanumerisk kode — et bogstav, syv cifre og et afsluttende
          kontrolbogstav, fx <code>X1234567Z</code>. Spanske statsborgere har et
          tilsvarende nummer på deres nationale ID (DNI); NIE er udlændinges pendant,
          tildelt én gang og aldrig genbrugt.
        </p>
      </section>

      <section>
        <h2>Hvem udsteder det, og hvordan ser dokumentet ud?</h2>
        <p>
          NIE udstedes af det spanske indenrigsministerium via Policía Nacional (Oficina
          de Extranjería) i Spanien eller via spanske konsulater i udlandet. Når
          ansøgningen er godkendt, får du et hvidt A4-certifikat (
          <em>certificado de asignación de NIE</em>) med dit nummer, dit navn og
          årsagen til udstedelsen. Det er dette stykke papir — ikke et kort — der er det
          officielle bevis på dit NIE.
        </p>
      </section>

      <section>
        <h2>NIE vs. opholdstilladelse — den mest almindelige forveksling</h2>
        <p>
          Et NIE-nummer betyder ikke, at du har lovligt ophold i Spanien, og det giver
          hverken visum eller arbejdstilladelse. Det er udelukkende et
          identifikationsnummer til brug i transaktioner — boligkøb, bankkonto,
          kontrakter, skat. EU-borgere, der flytter til Spanien på langt sigt,
          registrerer sig separat i EU-borgerregistret; ikke-EU-borgere ansøger om
          TIE-opholdskortet. Begge processer kræver typisk et NIE først, men selve
          NIE-nummeret er ikke bevis på ophold.
        </p>
      </section>

      <section>
        <h2>Hvorfor næsten alle, der har med Spanien at gøre, får brug for det</h2>
        <p>
          Spanske banker, notarer, skattevæsen (Agencia Tributaria), forsyningsselskaber
          og tingbøger bruger alle NIE som den primære identifikation for udlændinge.
          Uden det kan du juridisk set ikke gennemføre transaktioner som boligkøb eller
          virksomhedsregistrering, selv som ikke-resident. Se den fulde liste over
          situationer i vores guide til{' '}
          <Link href={articleHref('nie-number-spain', 'da')}>
            at få et NIE-nummer i Spanien
          </Link>
          .
        </p>
      </section>
    </>
  ),
  faqHeading: 'Ofte stillede spørgsmål',
  faq: [
    {
      question: 'Er NIE det samme som et skattenummer?',
      answer:
        'I praksis ja for de fleste formål — NIE fungerer også som dit NIF (skatte-ID) for udlændinge, når det er tildelt.',
    },
    {
      question: 'Kan to personer have samme NIE-nummer?',
      answer:
        'Nej. Hvert NIE er unikt og knyttet permanent til én person, selv hvis du aldrig vender tilbage til Spanien efter at have fået det.',
    },
    {
      question: 'Skal børn have et NIE-nummer?',
      answer:
        'Ja, hvis de skal stå på et skøde, en bankkonto eller andet officielt dokument, skal mindreårige også have deres eget NIE-nummer.',
    },
    {
      question: 'Er NIE-certifikatet det samme som det gamle NIE-kort?',
      answer:
        'Nej. Spanien udstedte tidligere et fysisk NIE-kort; i dag får du i stedet et hvidt A4-certifikat. Ældre kort udstedt før ændringen er stadig gyldige som bevis på nummeret.',
    },
  ],
  ctaHeading: 'Klar til at søge om dit NIE-nummer?',
  ctaText:
    'Espallo håndterer hele ansøgningen for dig — også i de tilfælde, hvor du aldrig behøver sætte dine ben i Spanien.',
  ctaButton: 'Start din NIE-ansøgning',
  disclaimer:
    'Espallo er et administrativt servicebureau og ikke et advokatfirma. Vi yder ikke juridisk rådgivning. Vores samarbejdende advokater og notarer i Spanien er selvstændige og har et direkte retsforhold med dig som kunde.',
}

export default content
