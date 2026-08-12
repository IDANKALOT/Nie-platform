import Link from 'next/link'
import { articleHref } from '@/lib/articles/href'
import type { ArticleContent } from '../types'

const content: ArticleContent = {
  title: 'Hva Er Et NIE-Nummer i Spania?',
  description:
    'Kort forklart: hva et spansk NIE-nummer er, hvordan det ser ut, hvem som utsteder det, og hvorfor det ikke er det samme som oppholdstillatelse.',
  breadcrumbHome: 'Hjem',
  breadcrumbLabel: 'Hva Er Et NIE-Nummer',
  h1: 'Hva Er Et NIE-Nummer i Spania?',
  updatedLabel: 'Sist oppdatert',
  lastUpdated: '2026-08-12',
  intro: (
    <p>
      NIE står for <strong>Número de Identificación de Extranjero</strong> — bokstavelig
      talt &quot;identifikasjonsnummer for utlendinger&quot;. Det er nummeret Spania gir
      til alle ikke-spanjoler landet trenger å identifisere i juridiske, økonomiske
      eller administrative sammenhenger — som regel det første man trenger når man skal
      ordne noe offisielt i Spania.
    </p>
  ),
  body: (
    <>
      <section>
        <h2>Hvordan ser et NIE-nummer ut?</h2>
        <p>
          Det er en kort alfanumerisk kode — en bokstav, sju sifre og en avsluttende
          kontrollbokstav, for eksempel <code>X1234567Z</code>. Spanske statsborgere har
          et tilsvarende nummer på sin nasjonale ID (DNI); NIE er motstykket for
          utlendinger, tildelt én gang og aldri gjenbrukt.
        </p>
      </section>

      <section>
        <h2>Hvem utsteder det, og hvordan ser dokumentet ut?</h2>
        <p>
          NIE utstedes av det spanske innenriksdepartementet via Policía Nacional
          (Oficina de Extranjería) i Spania, eller via spanske konsulater i utlandet.
          Når søknaden er godkjent, får du et hvitt A4-sertifikat (
          <em>certificado de asignación de NIE</em>) med nummeret ditt, navnet ditt og
          årsaken til utstedelsen. Det er dette papiret — ikke et kort — som er det
          offisielle beviset på ditt NIE.
        </p>
      </section>

      <section>
        <h2>NIE mot oppholdstillatelse — den vanligste forvekslingen</h2>
        <p>
          Et NIE-nummer betyr ikke at du har lovlig opphold i Spania, og det gir verken
          visum eller arbeidstillatelse. Det er utelukkende et identifikasjonsnummer til
          bruk i transaksjoner — boligkjøp, bankkonto, kontrakter, skatt. EU-borgere som
          flytter til Spania på lang sikt, registrerer seg separat i EU-borgerregisteret;
          ikke-EU-borgere søker om TIE-oppholdskortet. Begge prosessene krever vanligvis
          et NIE først, men selve NIE-nummeret er ikke bevis på opphold.
        </p>
      </section>

      <section>
        <h2>Hvorfor nesten alle som har med Spania å gjøre trenger et</h2>
        <p>
          Spanske banker, notarer, skattemyndigheter (Agencia Tributaria),
          strømselskaper og eiendomsregistre bruker alle NIE som primær identifikasjon
          for utlendinger. Uten det kan du juridisk sett ikke gjennomføre transaksjoner
          som boligkjøp eller selskapsregistrering, selv som ikke-bosatt. Se hele listen
          over situasjoner i vår guide til{' '}
          <Link href={articleHref('nie-number-spain', 'no')}>
            å skaffe et NIE-nummer i Spania
          </Link>
          .
        </p>
      </section>
    </>
  ),
  faqHeading: 'Ofte stilte spørsmål',
  faq: [
    {
      question: 'Er NIE det samme som et skattenummer?',
      answer:
        'I praksis ja for de fleste formål — NIE fungerer også som ditt NIF (skatte-ID) for utlendinger når det er tildelt.',
    },
    {
      question: 'Kan to personer ha samme NIE-nummer?',
      answer:
        'Nei. Hvert NIE er unikt og permanent knyttet til én person, selv om du aldri vender tilbake til Spania etter å ha fått det.',
    },
    {
      question: 'Trenger barn et NIE-nummer?',
      answer:
        'Ja, hvis de skal stå på et skjøte, en bankkonto eller et annet offisielt dokument, trenger også mindreårige sitt eget NIE-nummer.',
    },
    {
      question: 'Er NIE-sertifikatet det samme som det gamle NIE-kortet?',
      answer:
        'Nei. Spania utstedte tidligere et fysisk NIE-kort; i dag får du et hvitt A4-sertifikat i stedet. Eldre kort utstedt før endringen er fortsatt gyldige som bevis på nummeret.',
    },
  ],
  ctaHeading: 'Klar til å søke om NIE-nummeret ditt?',
  ctaText:
    'Espallo håndterer hele søknaden for deg — også i tilfeller der du aldri trenger å reise til Spania.',
  ctaButton: 'Start din NIE-søknad',
  disclaimer:
    'Espallo er et administrativt tjenestebyrå, ikke et advokatfirma. Vi gir ikke juridisk rådgivning. Våre samarbeidende advokater og notarer i Spania har et direkte klientforhold med deg.',
}

export default content
