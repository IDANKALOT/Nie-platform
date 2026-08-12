import Link from 'next/link'
import { articleHref } from '@/lib/articles/href'
import type { ArticleContent } from '../types'

const content: ArticleContent = {
  title: 'Hvordan Får Man NIE-Nummer i Spania: Steg for Steg',
  description:
    'De eksakte stegene for å skaffe et spansk NIE-nummer — fra å booke cita previa til utstedt sertifikat — og feilene som koster de fleste måneder.',
  breadcrumbHome: 'Hjem',
  breadcrumbLabel: 'Hvordan Får Man NIE-Nummer',
  h1: 'Hvordan Får Man NIE-Nummer i Spania?',
  updatedLabel: 'Sist oppdatert',
  lastUpdated: '2026-08-12',
  intro: (
    <p>
      Å skaffe et <strong>NIE-nummer</strong> følger en fast byråkratisk prosess — men
      prosessen har nok enkeltpunkter som kan gå galt (ledige timer, ett feil dokument,
      en utdatert skjemaversjon) til at de fleste som prøver selv, ender med å starte på
      nytt minst én gang. Her er prosessen steg for steg, og hvor den vanligvis
      strander.
    </p>
  ),
  body: (
    <>
      <section>
        <h2>Steg 1: Bestem hvor du skal søke</h2>
        <p>
          Du har to alternativer: søke i Spania hos en politistasjons Oficina de
          Extranjería, eller søke hos det spanske konsulatet i Norge før du reiser. Har
          du allerede en reise til Spania booket, går det vanligvis raskere å søke der
          nede. Reiser du ikke ennå — for eksempel fordi du kjøper bolig på avstand — er
          konsulatveien eller en fullmaktssøknad (se nedenfor) de eneste alternativene.
        </p>
      </section>

      <section>
        <h2>Steg 2: Book en cita previa</h2>
        <p>
          Begge veiene krever en <em>cita previa</em> (avtalt time) booket gjennom den
          spanske statens nettsystem. Det er den største flaskehalsen: timer hos travle
          stasjoner og konsulater er ofte fullbooket uker eller måneder frem, og
          systemet har ingen venteliste — man oppdaterer siden til en time blir ledig.
        </p>
      </section>

      <section>
        <h2>Steg 3: Samle dokumentene dine</h2>
        <p>Du trenger vanligvis:</p>
        <ul>
          <li>Et gyldig pass (pluss en kopi)</li>
          <li>Det utfylte søknadsskjemaet EX-15</li>
          <li>
            Dokumentasjon på den økonomiske, yrkesmessige eller sosiale årsaken til
            søknaden — for eksempel en signert reservasjonsavtale på en bolig, et
            jobbtilbud eller et brev om kontoåpning
          </li>
          <li>Kvittering for betaling av gebyret Modelo 790, código 012</li>
        </ul>
      </section>

      <section>
        <h2>Steg 4: Fyll ut og lever EX-15-skjemaet</h2>
        <p>
          EX-15 er kort, men lite tilgivende — et feil avkrysset felt (for eksempel
          bosatt vs. ikke-bosatt) eller et avvik mellom oppgitt årsak og
          dokumentasjonen er en vanlig årsak til avviste søknader. Det er ingen retting
          samme dag; du må booke ny time og starte på nytt.
        </p>
      </section>

      <section>
        <h2>Steg 5: Møt opp til timen og betal gebyret</h2>
        <p>
          På timen gjennomgår en tjenestemann dokumentene dine og behandler søknaden
          hvis alt er i orden. Du betaler det administrative gebyret (Modelo 790,
          código 012) hos en bank eller på nett, før eller ved timen, avhengig av
          kontoret.
        </p>
      </section>

      <section>
        <h2>Steg 6: Motta NIE-sertifikatet ditt</h2>
        <p>
          Når søknaden er godkjent, får du det hvite A4-sertifikatet med nummeret ditt.
          Noen kontorer utsteder det samme dag; andre bruker noen dager til noen uker.
          Les mer om hva sertifikatet egentlig er i vår artikkel om{' '}
          <Link href={articleHref('what-is-an-nie-number', 'no')}>
            hva et NIE-nummer er
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Alternativet: søk gjennom en representant</h2>
        <p>
          Du kan gi en spansk advokat fullmakt til å søke på dine vegne, noe som fjerner
          steg 1 og 2 helt for deg — ingen time å booke, ingen reise nødvendig. Slik
          fungerer{' '}
          <Link href={articleHref('nie-number-spain', 'no')}>Espallos NIE-tjeneste</Link>
          : du fyller inn opplysningene og dokumentene dine på nett, og våre
          samarbeidende advokater tar seg av de fysiske stegene.
        </p>
      </section>
    </>
  ),
  faqHeading: 'Ofte stilte spørsmål',
  faq: [
    {
      question: 'Hva er den vanligste årsaken til forsinkede NIE-søknader?',
      answer:
        'Klart tilgangen på timer. Selve papirarbeidet er kort — flaskehalsen er nesten alltid ventetiden på en cita previa-time hos en travel stasjon eller et konsulat.',
    },
    {
      question: 'Kan noen andre levere søknaden min for meg?',
      answer:
        'Ja, med en bekreftet fullmakt kan en advokat levere og hente NIE-en din på dine vegne, uten at du selv må møte opp.',
    },
    {
      question: 'Må jeg snakke spansk på timen?',
      answer:
        'Det hjelper, men er ikke strengt nødvendig. Mange søkere tar med en tolk eller bruker en representant som tar seg av timen på spansk for dem.',
    },
    {
      question: 'Hva skjer hvis søknaden min blir avvist?',
      answer:
        'Du retter problemet (som regel en dokument- eller skjemafeil) og booker en ny time — det finnes ingen klageprosess for en enkel avvisning på dette stadiet.',
    },
  ],
  ctaHeading: 'Hopp over timekøen',
  ctaText:
    'Espallo søker om NIE-nummeret ditt på dine vegne gjennom våre samarbeidende advokater i Spania — også som en helt digital søknad.',
  ctaButton: 'Start din NIE-søknad',
  disclaimer:
    'Espallo er et administrativt tjenestebyrå, ikke et advokatfirma. Vi gir ikke juridisk rådgivning. Våre samarbeidende advokater og notarer i Spania har et direkte klientforhold med deg.',
}

export default content
