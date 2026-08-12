import Link from 'next/link'
import { articleHref } from '@/lib/articles/href'
import type { ArticleContent } from '../types'

const content: ArticleContent = {
  title: 'Vad Är Ett NIE Nummer i Spanien?',
  description:
    'Kort förklarat: vad ett spanskt NIE-nummer är, hur det ser ut, vem som utfärdar det, och varför det inte är samma sak som uppehållstillstånd.',
  breadcrumbHome: 'Hem',
  breadcrumbLabel: 'Vad Är Ett NIE Nummer',
  h1: 'Vad Är Ett NIE Nummer i Spanien?',
  updatedLabel: 'Senast uppdaterad',
  lastUpdated: '2026-08-12',
  intro: (
    <p>
      NIE står för <strong>Número de Identificación de Extranjero</strong> — bokstavligen
      &quot;identifikationsnummer för utlänningar&quot;. Det är numret Spanien tilldelar
      varje icke-spanjor som landet behöver identifiera i juridiska, ekonomiska eller
      administrativa sammanhang — och oftast det första man behöver när man ska ordna
      något officiellt i Spanien.
    </p>
  ),
  body: (
    <>
      <section>
        <h2>Hur ser ett NIE-nummer ut?</h2>
        <p>
          Det är en kort alfanumerisk kod — en bokstav, sju siffror och en avslutande
          kontrollbokstav, till exempel <code>X1234567Z</code>. Spanska medborgare har
          ett motsvarande nummer på sitt nationella id (DNI); NIE är motsvarigheten för
          utlänningar, tilldelat en gång och aldrig återanvänt.
        </p>
      </section>

      <section>
        <h2>Vem utfärdar det, och hur ser intyget ut?</h2>
        <p>
          NIE utfärdas av det spanska inrikesministeriet via Policía Nacional (Oficina
          de Extranjería) i Spanien eller via spanska konsulat utomlands. När ansökan är
          godkänd får du ett vitt A4-intyg (<em>certificado de asignación de NIE</em>)
          med ditt nummer, ditt namn och skälet till utfärdandet. Det är detta papper —
          inte ett kort — som är det officiella beviset på ditt NIE.
        </p>
      </section>

      <section>
        <h2>NIE kontra uppehållstillstånd — den vanligaste missuppfattningen</h2>
        <p>
          Ett NIE-nummer innebär inte att du har laglig uppehållsrätt i Spanien, och det
          ger varken visum eller arbetstillstånd. Det är enbart ett identifikationsnummer
          för transaktioner — bostadsköp, bankkonto, avtal, skatt. EU-medborgare som
          flyttar till Spanien långsiktigt registrerar sig separat i EU-medborgarregistret;
          icke-EU-medborgare ansöker om TIE-uppehållskortet. Båda processerna kräver
          vanligtvis ett NIE först, men själva NIE-numret är inget bevis på uppehåll.
        </p>
      </section>

      <section>
        <h2>Varför nästan alla som har att göra med Spanien behöver ett</h2>
        <p>
          Spanska banker, notarier, skatteverket (Agencia Tributaria), elbolag och
          fastighetsregister använder alla NIE som den primära identifieringen för
          utlänningar. Utan det kan du juridiskt inte genomföra transaktioner som
          bostadsköp eller företagsregistrering, även som icke-resident. Se hela listan
          över situationer i vår guide om{' '}
          <Link href={articleHref('nie-number-spain', 'sv')}>
            att skaffa ett NIE-nummer i Spanien
          </Link>
          .
        </p>
      </section>
    </>
  ),
  faqHeading: 'Vanliga frågor',
  faq: [
    {
      question: 'Är NIE samma sak som ett skattenummer?',
      answer:
        'I praktiken ja för de flesta ändamål — NIE fungerar även som ditt NIF (skatte-id) för utlänningar när det väl har tilldelats.',
    },
    {
      question: 'Kan två personer ha samma NIE-nummer?',
      answer:
        'Nej. Varje NIE är unikt och permanent knutet till en person, även om du aldrig återvänder till Spanien efter att ha fått det.',
    },
    {
      question: 'Behöver barn ett NIE-nummer?',
      answer:
        'Ja, om de ska stå på ett lagfartsbevis, bankkonto eller annat officiellt dokument behöver även minderåriga ett eget NIE-nummer.',
    },
    {
      question: 'Är NIE-intyget samma sak som det gamla NIE-kortet?',
      answer:
        'Nej. Spanien utfärdade tidigare ett fysiskt NIE-kort; idag får du istället ett vitt A4-intyg. Äldre kort utfärdade innan omställningen är fortfarande giltiga som bevis på numret.',
    },
  ],
  ctaHeading: 'Redo att ansöka om ditt NIE-nummer?',
  ctaText:
    'Espallo sköter hela ansökan åt dig — även i de fall du aldrig behöver sätta din fot i Spanien.',
  ctaButton: 'Starta din NIE-ansökan',
  disclaimer:
    'Espallo är en administrativ tjänst, inte en advokatbyrå. Vi ger ingen juridisk rådgivning. Våra samarbetande jurister och notarier i Spanien har ett direkt uppdragsförhållande med dig som kund.',
}

export default content
