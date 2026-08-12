import Link from 'next/link'
import { articleHref } from '@/lib/articles/href'
import type { ArticleContent } from '../types'

const content: ArticleContent = {
  title: 'NIE Nummer Spania – Få Hjelp Med Din Søknad',
  description:
    'Trenger du et NIE-nummer i Spania? Se hvordan søknaden fungerer, hvilke dokumenter du trenger, og hvordan Espallo tar seg av hele prosessen for deg.',
  breadcrumbHome: 'Hjem',
  breadcrumbLabel: 'NIE Nummer Spania',
  h1: 'NIE Nummer Spania – Profesjonell Hjelp Med Din Søknad',
  updatedLabel: 'Sist oppdatert',
  lastUpdated: '2026-08-12',
  intro: (
    <p>
      Skal du kjøpe bolig, åpne bankkonto, jobbe eller flytte til Spania? Da trenger du
      et <strong>NIE-nummer</strong> (Número de Identificación de Extranjero) — det
      spanske identifikasjonsnummeret myndighetene bruker for utlendinger i alle
      offisielle sammenhenger. Her får du oversikten: hva det er, hvem som trenger det,
      og hvordan Espallo håndterer hele søknaden for deg uten at du må reise til Spania.
    </p>
  ),
  body: (
    <>
      <section>
        <h2>Hva er egentlig et NIE-nummer?</h2>
        <p>
          NIE er et unikt, permanent identifikasjonsnummer som spanske myndigheter,
          banker, notarer og skattemyndigheter bruker for å identifisere deg i
          offisielle saker. Nummeret gir ikke i seg selv oppholdsrett i Spania — det er
          en identifikasjon, ikke en oppholdstillatelse. Les mer i vår artikkel om{' '}
          <Link href={articleHref('what-is-an-nie-number', 'no')}>hva et NIE-nummer er</Link>.
        </p>
      </section>

      <section>
        <h2>Hvem trenger et NIE-nummer?</h2>
        <p>Du trenger et NIE-nummer hvis du blant annet skal:</p>
        <ul>
          <li>Kjøpe eller selge eiendom i Spania</li>
          <li>Åpne en spansk bankkonto</li>
          <li>Jobbe som ansatt eller selvstendig næringsdrivende (autónomo)</li>
          <li>Betale spansk skatt, blant annet eiendomsskatt for ikke-bosatte</li>
          <li>Kjøpe bil, koble til strøm/vann eller signere en leiekontrakt</li>
          <li>Søke om oppholdskort (TIE) som ikke-EU-borger</li>
        </ul>
      </section>

      <section>
        <h2>Slik foregår søknaden vanligvis</h2>
        <p>
          Den vanlige veien går via en <em>cita previa</em> (avtalt time) hos en utpekt
          politistasjon (Oficina de Extranjería) i Spania, eller — hvis du ennå ikke er i
          landet — det spanske konsulatet i Norge. Der leverer du skjemaet EX-15 sammen
          med passet ditt og dokumentasjon på den økonomiske, yrkesmessige eller sosiale
          årsaken til søknaden, og betaler et mindre administrativt gebyr (Modelo 790,
          código 012) før NIE-sertifikatet utstedes.
        </p>
        <p>
          Det er nettopp her mange strander: konsulattimer kan være fullbooket måneder
          frem, EX-15-skjemaet fylles lett ut feil, og et manglende dokument betyr som
          regel at man må starte på nytt med en ny time. Se hele{' '}
          <Link href={articleHref('how-to-get-nie-number', 'no')}>
            steg-for-steg-guiden for å få et NIE-nummer
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Slik hjelper Espallo</h2>
        <p>
          Espallo tar seg av papirarbeidet, timebestillingen og innsendelsen for deg
          gjennom vårt nettverk av spanske advokater — også med alternativer der du
          verken må reise til Spania eller vente måneder på en konsulattime. Du fyller
          inn opplysningene dine på nett, signerer digitalt, og så overtar vi.
        </p>
      </section>
    </>
  ),
  faqHeading: 'Ofte stilte spørsmål',
  faq: [
    {
      question: 'Kan jeg få et NIE-nummer uten å reise til Spania?',
      answer:
        'Ja, i mange tilfeller kan en advokat søke på dine vegne med fullmakt, uten at du selv må møte opp hos myndighet eller konsulat.',
    },
    {
      question: 'Hvor lang tid tar det å få et NIE-nummer?',
      answer:
        'Det avhenger mye av tilgangen på timer. Direkte søknader kan ta flere uker; med en representant som allerede har tilgang til timer, går det vanligvis raskere.',
    },
    {
      question: 'Utløper et NIE-nummer?',
      answer:
        'Nei, selve NIE-nummeret utløper aldri. Det fysiske sertifikatet kan utstedes på nytt hvis du mister det, og nummeret forblir gyldig selv om du forlater og senere vender tilbake til Spania.',
    },
    {
      question: 'Er NIE det samme som oppholdstillatelse?',
      answer:
        'Nei. NIE er kun et identifikasjonsnummer. Oppholdstillatelse (og TIE-kortet for ikke-EU-borgere) er en egen prosess som ikke alle med NIE-nummer trenger.',
    },
    {
      question: 'Hvilke dokumenter trenger jeg til søknaden?',
      answer:
        'Vanligvis et gyldig pass, det utfylte skjemaet EX-15 samt dokumentasjon på årsaken til søknaden, for eksempel en reservasjonsavtale på en bolig. Se vår fullstendige dokumentliste.',
    },
  ],
  ctaHeading: 'Trenger du hjelp med NIE-nummeret ditt?',
  ctaText:
    'Espallo håndterer søknad, timebestilling og papirarbeid for norske kunder — til fast pris, uten at du må reise til Spania.',
  ctaButton: 'Få hjelp med NIE-nummeret',
  disclaimer:
    'Espallo er et administrativt tjenestebyrå, ikke et advokatfirma. Vi gir ikke juridisk rådgivning. Våre samarbeidende advokater og notarer i Spania har et direkte klientforhold med deg.',
}

export default content
