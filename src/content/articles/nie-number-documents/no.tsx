import Link from 'next/link'
import { articleHref } from '@/lib/articles/href'
import type { ArticleContent } from '../types'

const content: ArticleContent = {
  title: 'Hvilke Dokumenter Trenger Du Til Et NIE-Nummer?',
  description:
    'Kjernelisten over dokumenter til en NIE-søknad, pluss hva som endrer seg avhengig av om du kjøper bolig, jobber eller åpner en bankkonto.',
  breadcrumbHome: 'Hjem',
  breadcrumbLabel: 'NIE Nummer Dokumenter',
  h1: 'Hvilke Dokumenter Trenger Du Til Et NIE-Nummer?',
  updatedLabel: 'Sist oppdatert',
  lastUpdated: '2026-08-12',
  intro: (
    <p>
      Alle NIE-søknader krever de samme kjernedokumentene, pluss ett dokument som
      endrer seg avhengig av årsaken til søknaden din. Manglende eller feil dokumenter
      er den største enkeltårsaken til avviste søknader i vår{' '}
      <Link href={articleHref('how-to-get-nie-number', 'no')}>
        steg-for-steg-prosess
      </Link>
      , så det er verdt å sjekke denne listen mot din situasjon før du booker en time.
    </p>
  ),
  body: (
    <>
      <section>
        <h2>Kjernedokumenter, påkrevd for alle søkere</h2>
        <ul>
          <li>Et gyldig pass, pluss en kopi av identifikasjonssidene</li>
          <li>Det utfylte og signerte søknadsskjemaet EX-15</li>
          <li>Kvittering for betaling av det administrative gebyret Modelo 790, código 012</li>
          <li>
            Ett nytt passfoto (kreves av noen, men ikke alle kontorer — sjekk med din
            konkrete stasjon eller ditt konsulat)
          </li>
        </ul>
      </section>

      <section>
        <h2>Dokumentet som endrer seg etter årsak</h2>
        <p>Du må også vise hvorfor du trenger NIE. De vanligste dokumentasjonsbevisene er:</p>
        <ul>
          <li>
            <strong>Boligkjøp:</strong> en signert reservasjonsavtale (contrato de
            reserva) eller depositumsavtale med selger eller megler
          </li>
          <li>
            <strong>Arbeid:</strong> et signert jobbtilbud eller arbeidskontrakt fra en
            spansk arbeidsgiver
          </li>
          <li>
            <strong>Åpne bankkonto:</strong> et brev fra banken som bekrefter at de
            krever et NIE for å fortsette
          </li>
          <li>
            <strong>Etablere seg som selvstendig (autónomo):</strong> dokumentasjon på
            registrert økonomisk aktivitet eller en forretningsplan
          </li>
          <li>
            <strong>Ingen spesifikk årsak ennå (generell interesse):</strong> noen
            kontorer aksepterer en generell hensiktserklæring om investering eller
            bosted, selv om dette håndteres mindre konsekvent enn kategoriene over
          </li>
        </ul>
      </section>

      <section>
        <h2>Hvis et dokument ikke er på spansk</h2>
        <p>
          Dokumenter utstedt utenfor Spania trenger noen ganger en bekreftet
          (autorisert) spansk oversettelse, og i noen tilfeller en apostille for å
          bekrefte at originalen er ekte. Om dette gjelder avhenger av dokumenttypen
          og kontoret som behandler søknaden din — det er verdt å bekrefte dette før
          timen din, siden en oversettelse vanligvis tar lengre tid å ordne enn selve
          timebestillingen.
        </p>
      </section>
    </>
  ),
  faqHeading: 'Ofte stilte spørsmål',
  faq: [
    {
      question: 'Må jeg ta med originaler, eller er kopier nok?',
      answer:
        'Ta med originaler pluss kopier. Kontorer sjekker vanligvis originalen og beholder kopien.',
    },
    {
      question: 'Hva skjer hvis jeg møter opp med feil dokumentasjonsbevis?',
      answer:
        'Søknaden din blir vanligvis avvist på stedet, og du må booke en ny time med riktig dokument — det finnes ingen løsning samme dag.',
    },
    {
      question: 'Må passet mitt ha en minimumsgyldighet?',
      answer:
        'Det bør være gyldig i overskuelig fremtid — et utløpt eller snart utløpende pass er grunn til avvisning hos noen kontorer.',
    },
    {
      question: 'Kan jeg bruke førerkort i stedet for pass?',
      answer:
        'Nei, et gyldig pass (eller nasjonalt ID-kort for enkelte EU-borgere) kreves; et førerkort aksepteres ikke som legitimasjon til en NIE-søknad.',
    },
  ],
  ctaHeading: 'Usikker på hvilke dokumenter du trenger?',
  ctaText:
    'Espallo gjennomgår situasjonen din og forbereder det nøyaktige dokumentsettet til søknaden din, så ingenting blir avvist på grunn av feil papirarbeid.',
  ctaButton: 'Få hjelp til å forberede NIE-søknaden din',
  disclaimer:
    'Espallo er et administrativt tjenestebyrå, ikke et advokatfirma. Vi gir ikke juridisk rådgivning. Våre samarbeidende advokater og notarer i Spania har et direkte klientforhold med deg.',
}

export default content
