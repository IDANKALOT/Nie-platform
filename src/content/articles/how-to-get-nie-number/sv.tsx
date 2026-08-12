import Link from 'next/link'
import { articleHref } from '@/lib/articles/href'
import type { ArticleContent } from '../types'

const content: ArticleContent = {
  title: 'Hur Skaffar Man NIE Nummer i Spanien: Steg för Steg',
  description:
    'De exakta stegen för att skaffa ett spanskt NIE-nummer — från att boka cita previa till utfärdat intyg — och misstagen som kostar de flesta månader.',
  breadcrumbHome: 'Hem',
  breadcrumbLabel: 'Hur Skaffar Man NIE Nummer',
  h1: 'Hur Skaffar Man NIE Nummer i Spanien?',
  updatedLabel: 'Senast uppdaterad',
  lastUpdated: '2026-08-12',
  intro: (
    <p>
      Att skaffa ett <strong>NIE-nummer</strong> följer en fast byråkratisk process —
      men processen har tillräckligt många enskilda felkällor (lediga tider, ett fel
      dokument, en föråldrad blankettversion) för att de flesta som gör det själva
      slutar med att börja om minst en gång. Här är processen steg för steg, och var
      den oftast går fel.
    </p>
  ),
  body: (
    <>
      <section>
        <h2>Steg 1: Bestäm var du ska ansöka</h2>
        <p>
          Du har två alternativ: ansöka i Spanien hos en polisstations Oficina de
          Extranjería, eller ansöka hos det spanska konsulatet i Sverige innan du reser.
          Har du redan en resa till Spanien bokad går det oftast snabbare att ansöka på
          plats. Reser du inte än — till exempel för att du köper en bostad på distans —
          är konsulatvägen eller en fullmaktsansökan (se nedan) de enda alternativen.
        </p>
      </section>

      <section>
        <h2>Steg 2: Boka en cita previa</h2>
        <p>
          Båda vägarna kräver en <em>cita previa</em> (förbokad tid) via den spanska
          statens onlinesystem. Det är den största flaskhalsen: tider hos hårt belastade
          stationer och konsulat är ofta fullbokade veckor eller månader framåt, och
          systemet har ingen kölista — man uppdaterar sidan tills en tid blir ledig.
        </p>
      </section>

      <section>
        <h2>Steg 3: Samla dina dokument</h2>
        <p>Du behöver vanligtvis:</p>
        <ul>
          <li>Ett giltigt pass (plus en kopia)</li>
          <li>Den ifyllda ansökningsblanketten EX-15</li>
          <li>
            Underlag för det ekonomiska, yrkesmässiga eller sociala skälet till
            ansökan — till exempel ett undertecknat reservationsavtal för en bostad, ett
            jobberbjudande eller ett brev om kontoöppning
          </li>
          <li>Kvitto på betalningen av avgiften Modelo 790, código 012</li>
        </ul>
      </section>

      <section>
        <h2>Steg 4: Fyll i och lämna in EX-15-blanketten</h2>
        <p>
          EX-15 är kort men strikt — en felaktigt ikryssad ruta (till exempel bosatt vs.
          icke-bosatt) eller en avvikelse mellan angivet skäl och underlaget är en
          vanlig orsak till avslagna ansökningar. Det går inte att rätta samma dag; du
          får boka en ny tid och börja om.
        </p>
      </section>

      <section>
        <h2>Steg 5: Kom till din tid och betala avgiften</h2>
        <p>
          På tiden granskar en tjänsteman dina dokument och behandlar ansökan om allt
          stämmer. Du betalar den administrativa avgiften (Modelo 790, código 012) hos
          en bank eller online, före eller vid tiden, beroende på kontoret.
        </p>
      </section>

      <section>
        <h2>Steg 6: Få ditt NIE-intyg</h2>
        <p>
          När ansökan är godkänd får du det vita A4-intyget med ditt nummer. Vissa
          kontor utfärdar det samma dag; andra tar några dagar upp till några veckor.
          Läs mer om vad intyget egentligen är i vår artikel om{' '}
          <Link href={articleHref('what-is-an-nie-number', 'sv')}>
            vad ett NIE-nummer är
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Alternativet: ansök genom ett ombud</h2>
        <p>
          Du kan ge en spansk jurist fullmakt att ansöka åt dig, vilket tar bort steg 1
          och 2 helt för dig — ingen tid att boka, ingen resa krävs. Så fungerar{' '}
          <Link href={articleHref('nie-number-spain', 'sv')}>Espallos NIE-tjänst</Link>:
          du fyller i dina uppgifter och dokument online, och våra samarbetande jurister
          sköter de fysiska stegen.
        </p>
      </section>
    </>
  ),
  faqHeading: 'Vanliga frågor',
  faq: [
    {
      question: 'Vad är den vanligaste orsaken till försenade NIE-ansökningar?',
      answer:
        'Klart tillgängligheten till tider. Själva pappersarbetet är kort — flaskhalsen är nästan alltid väntan på en cita previa-tid hos en hårt belastad station eller ett konsulat.',
    },
    {
      question: 'Kan någon annan lämna in min ansökan åt mig?',
      answer:
        'Ja, med en bestyrkt fullmakt kan en jurist lämna in och hämta ditt NIE åt dig, utan att du själv behöver infinna dig.',
    },
    {
      question: 'Behöver jag prata spanska på tiden?',
      answer:
        'Det hjälper, men är inte strikt nödvändigt. Många sökande tar med en tolk eller använder ett ombud som sköter tiden på spanska åt dem.',
    },
    {
      question: 'Vad händer om min ansökan avslås?',
      answer:
        'Du åtgärdar problemet (oftast ett dokument- eller blankettfel) och bokar en ny tid — det finns ingen överklagandeprocess för ett enkelt avslag i detta skede.',
    },
  ],
  ctaHeading: 'Hoppa över tidsbokningskön',
  ctaText:
    'Espallo ansöker om ditt NIE-nummer åt dig genom våra samarbetande jurister i Spanien — även som helt digital ansökan.',
  ctaButton: 'Starta din NIE-ansökan',
  disclaimer:
    'Espallo är en administrativ tjänst, inte en advokatbyrå. Vi ger ingen juridisk rådgivning. Våra samarbetande jurister och notarier i Spanien har ett direkt uppdragsförhållande med dig som kund.',
}

export default content
