import Link from 'next/link'
import { articleHref } from '@/lib/articles/href'
import type { ArticleContent } from '../types'

const content: ArticleContent = {
  title: 'Kan Man Få Et NIE-Nummer Uten Å Reise Til Spania?',
  description:
    'Ja — slik fungerer en NIE-søknad via fullmakt helt konkret, hva den koster i tillit og papirarbeid, og når den gir mer mening enn en reise.',
  breadcrumbHome: 'Hjem',
  breadcrumbLabel: 'NIE Uten Å Reise',
  h1: 'Kan Man Få Et NIE-Nummer Uten Å Reise Til Spania?',
  updatedLabel: 'Sist oppdatert',
  lastUpdated: '2026-08-12',
  intro: (
    <p>
      Ja. Du trenger verken være fysisk til stede i Spania eller hos et spansk
      konsulat for å få et NIE-nummer — en spansk advokat kan søke på dine vegne med
      en fullmakt. Det er veien folk bruker når de kjøper bolig på avstand, ikke har
      et spansk konsulat i nærheten, eller rett og slett ikke kan sette av tid til
      reisen.
    </p>
  ),
  body: (
    <>
      <section>
        <h2>Slik fungerer fullmaktsveien i praksis</h2>
        <p>
          Du gir skriftlig en spansk advokat fullmakt til å levere
          EX-15-søknadsskjemaet og hente NIE-sertifikatet på dine vegne. I de fleste
          tilfeller kan fullmakten signeres og bevitnes på avstand (for eksempel hos en
          notar i hjemlandet ditt, hvorpå dokumentet legaliseres for bruk i Spania), så
          hele prosessen — signering, dokumentinnsamling, innsendelse og mottak av
          sertifikatet ditt — kan skje uten at du booker en flyreise.
        </p>
      </section>

      <section>
        <h2>Hva denne veien er — og ikke er</h2>
        <p>
          Det er ingen snarvei utenom den offisielle prosessen — samme
          EX-15-skjema, samme dokumenter og samme myndighetsgebyr gjelder fortsatt.
          Det som endrer seg, er hvem som fysisk møter opp til timen: din
          representant, ikke deg. Se vår{' '}
          <Link href={articleHref('nie-number-documents', 'no')}>dokumentliste</Link>{' '}
          for nøyaktig hva du må sende inn.
        </p>
      </section>

      <section>
        <h2>Når det gir mer mening enn å reise</h2>
        <p>
          Har du allerede en reise til Spania planlagt, kan personlig søknad være like
          rask. Fullmaktsveien gir mest mening når du har en frist (for eksempel en
          overtakelse av en bolig) men ikke rekker å reise i tide, når ditt nærmeste
          konsulat har lange ventetider, eller når du rett og slett heller vil unngå å
          bruke en reisedag i en køstasjon hos en myndighet.
        </p>
      </section>
    </>
  ),
  faqHeading: 'Ofte stilte spørsmål',
  faq: [
    {
      question: 'Er en digital NIE-søknad juridisk gyldig?',
      answer:
        'Ja — fullmakt er et standardisert, juridisk anerkjent instrument i Spania som brukes til langt mer enn NIE-søknader, blant annet boligkjøp og selskapsstiftelse.',
    },
    {
      question: 'Må jeg besøke en notar i mitt eget land?',
      answer:
        'Vanligvis ja, for å signere og bevitne fullmakten, selv om det nøyaktige kravet avhenger av landet ditt og en eventuell legaliseringsavtale (for eksempel apostille) med Spania.',
    },
    {
      question: 'Hvordan vet jeg at advokaten min faktisk leverte søknaden min?',
      answer:
        'En seriøs tjeneste bekrefter hvert steg og overleverer NIE-sertifikatet ditt når det er utstedt — spør aktivt om statusoppdateringer hvis du ikke får dem uoppfordret.',
    },
    {
      question: 'Kan jeg fortsatt reise til Spania senere selv om jeg søkte på avstand?',
      answer:
        'Ja, NIE-nummeret er gyldig uansett hvordan det ble skaffet, og begrenser ikke fremtidige reiser eller søknader på noen måte.',
    },
  ],
  ctaHeading: 'Skaff NIE-nummeret uten å forlate hjemmet',
  ctaText:
    'Espallo håndterer hele NIE-søknaden på avstand gjennom våre samarbeidende advokater i Spania — ingen flyreise, ingen time å jage.',
  ctaButton: 'Start din digitale NIE-søknad',
  disclaimer:
    'Espallo er et administrativt tjenestebyrå, ikke et advokatfirma. Vi gir ikke juridisk rådgivning. Våre samarbeidende advokater og notarer i Spania har et direkte klientforhold med deg.',
}

export default content
