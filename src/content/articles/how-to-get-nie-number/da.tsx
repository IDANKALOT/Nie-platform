import Link from 'next/link'
import { articleHref } from '@/lib/articles/href'
import type { ArticleContent } from '../types'

const content: ArticleContent = {
  title: 'Hvordan Får Man NIE Nummer i Spanien: Trin for Trin',
  description:
    'De præcise trin i ansøgningen om et spansk NIE-nummer — fra booking af cita previa til udstedt certifikat — og de fejl, der koster de fleste måneder.',
  breadcrumbHome: 'Forside',
  breadcrumbLabel: 'Hvordan Får Man NIE Nummer',
  h1: 'Hvordan Får Man NIE Nummer i Spanien?',
  updatedLabel: 'Sidst opdateret',
  lastUpdated: '2026-08-12',
  intro: (
    <p>
      At få et <strong>NIE-nummer</strong> følger et fast bureaukratisk forløb — men
      forløbet har nok enkeltpunkter, der kan gå galt (ledige tider, ét forkert
      dokument, en forældet formularversion), til at de fleste, der prøver selv, ender
      med at starte forfra mindst én gang. Her er processen trin for trin, og hvor den
      typisk kuldsejler.
    </p>
  ),
  body: (
    <>
      <section>
        <h2>Trin 1: Beslut hvor du skal ansøge</h2>
        <p>
          Du har to muligheder: ansøge i Spanien hos en politistations Oficina de
          Extranjería, eller ansøge hos det spanske konsulat i Danmark, inden du rejser.
          Har du allerede en rejse til Spanien booket, går det som regel hurtigere at
          ansøge dernede. Rejser du ikke endnu — fx fordi du køber bolig på afstand — er
          konsulatvejen eller en fuldmagtsansøgning (se nedenfor) de eneste muligheder.
        </p>
      </section>

      <section>
        <h2>Trin 2: Book en cita previa</h2>
        <p>
          Begge veje kræver en <em>cita previa</em> (forudbestilt tid) booket gennem den
          spanske stats online-system. Det er den største flaskehals: tider hos travle
          politistationer og konsulater er ofte booket uger eller måneder frem, og
          systemet har ingen venteliste — man opdaterer bare siden, indtil en tid bliver
          ledig.
        </p>
      </section>

      <section>
        <h2>Trin 3: Saml dine dokumenter</h2>
        <p>Du skal typisk bruge:</p>
        <ul>
          <li>Et gyldigt pas (plus en kopi)</li>
          <li>Den udfyldte EX-15-ansøgningsformular</li>
          <li>
            Dokumentation for den økonomiske, erhvervsmæssige eller sociale årsag til
            ansøgningen — fx en underskrevet reservationsaftale på en bolig, et
            jobtilbud eller et brev om kontooprettelse
          </li>
          <li>Kvittering for betaling af gebyret Modelo 790, código 012</li>
        </ul>
      </section>

      <section>
        <h2>Trin 4: Udfyld og indsend EX-15-formularen</h2>
        <p>
          EX-15 er kort, men ufortrødent præcis — et forkert afkrydset felt (fx ophold
          vs. ikke-ophold) eller en uoverensstemmelse mellem den angivne årsag og dit
          dokumentationsbevis er en almindelig årsag til afviste ansøgninger. Der er
          ingen rettelse samme dag; du skal booke en ny tid og starte forfra.
        </p>
      </section>

      <section>
        <h2>Trin 5: Mød op til din tid og betal gebyret</h2>
        <p>
          Til tiden gennemgår en betjent dine dokumenter og behandler ansøgningen, hvis
          alt er i orden. Du betaler det administrative gebyr (Modelo 790, código 012)
          hos en bank eller online, før eller ved tiden, afhængigt af kontoret.
        </p>
      </section>

      <section>
        <h2>Trin 6: Modtag dit NIE-certifikat</h2>
        <p>
          Når ansøgningen er godkendt, får du det hvide A4-certifikat med dit nummer.
          Nogle kontorer udsteder det samme dag; andre tager nogle dage til uger. Læs
          mere om, hvad certifikatet egentlig er, i vores artikel om{' '}
          <Link href={articleHref('what-is-an-nie-number', 'da')}>
            hvad et NIE-nummer er
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Alternativet: ansøg gennem en repræsentant</h2>
        <p>
          Du kan give en spansk advokat fuldmagt til at ansøge på dine vegne, hvilket
          fjerner trin 1 og 2 helt for dig — ingen tid at booke, ingen rejse nødvendig.
          Sådan fungerer{' '}
          <Link href={articleHref('nie-number-spain', 'da')}>Espallos NIE-service</Link>:
          du indtaster dine oplysninger og dokumenter online, og vores samarbejdende
          advokater klarer de fysiske trin.
        </p>
      </section>
    </>
  ),
  faqHeading: 'Ofte stillede spørgsmål',
  faq: [
    {
      question: 'Hvad er den mest almindelige årsag til forsinkede NIE-ansøgninger?',
      answer:
        'Klart tilgængeligheden af tider. Selve papirarbejdet er kort — flaskehalsen er næsten altid ventetiden på en cita previa-tid hos en travl station eller et konsulat.',
    },
    {
      question: 'Kan en anden indsende min ansøgning for mig?',
      answer:
        'Ja, med en notarpåtegnet fuldmagt kan en advokat indsende og afhente dit NIE på dine vegne, uden at du selv møder op.',
    },
    {
      question: 'Skal jeg tale spansk til tiden?',
      answer:
        'Det hjælper, men er ikke strengt nødvendigt. Mange ansøgere tager en tolk med eller bruger en repræsentant, der klarer tiden på spansk for dem.',
    },
    {
      question: 'Hvad sker der, hvis min ansøgning bliver afvist?',
      answer:
        'Du retter problemet (som regel en fejl i et dokument eller formularen) og booker en ny tid — der er ingen klageproces for en simpel afvisning på dette stadie.',
    },
  ],
  ctaHeading: 'Spring tidsbestillingskøen over',
  ctaText:
    'Espallo ansøger om dit NIE-nummer på dine vegne gennem vores samarbejdende advokater i Spanien — også som fuldt digital ansøgning.',
  ctaButton: 'Start din NIE-ansøgning',
  disclaimer:
    'Espallo er et administrativt servicebureau og ikke et advokatfirma. Vi yder ikke juridisk rådgivning. Vores samarbejdende advokater og notarer i Spanien er selvstændige og har et direkte retsforhold med dig som kunde.',
}

export default content
