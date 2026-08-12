import Link from 'next/link'
import { articleHref } from '@/lib/articles/href'
import type { ArticleContent } from '../types'

const content: ArticleContent = {
  title: 'NIE Nummer Spanien – Få Hjälp Med Din Ansökan',
  description:
    'Behöver du ett NIE-nummer i Spanien? Se hur ansökan fungerar, vilka dokument som krävs och hur Espallo sköter hela processen åt dig.',
  breadcrumbHome: 'Hem',
  breadcrumbLabel: 'NIE Nummer Spanien',
  h1: 'NIE Nummer Spanien – Professionell Hjälp Med Din Ansökan',
  updatedLabel: 'Senast uppdaterad',
  lastUpdated: '2026-08-12',
  intro: (
    <p>
      Ska du köpa bostad, öppna bankkonto, jobba eller flytta till Spanien? Då behöver du
      ett <strong>NIE-nummer</strong> (Número de Identificación de Extranjero) — det
      spanska identifikationsnumret som myndigheterna använder för utlänningar i alla
      officiella sammanhang. Här får du en genomgång: vad det är, vem som behöver det,
      och hur Espallo sköter hela ansökan åt dig utan att du behöver resa till Spanien.
    </p>
  ),
  body: (
    <>
      <section>
        <h2>Vad är ett NIE-nummer egentligen?</h2>
        <p>
          NIE är ett unikt, permanent identifikationsnummer som spanska myndigheter,
          banker, notarier och skatteverket använder för att identifiera dig i officiella
          ärenden. Numret i sig ger inte uppehållsrätt i Spanien — det är en
          identifikation, inte ett uppehållstillstånd. Läs mer i vår artikel om{' '}
          <Link href={articleHref('what-is-an-nie-number', 'sv')}>vad ett NIE-nummer är</Link>.
        </p>
      </section>

      <section>
        <h2>Vem behöver ett NIE-nummer?</h2>
        <p>Du behöver ett NIE-nummer om du bland annat ska:</p>
        <ul>
          <li>Köpa eller sälja fastighet i Spanien</li>
          <li>Öppna ett spanskt bankkonto</li>
          <li>Arbeta som anställd eller egenföretagare (autónomo)</li>
          <li>Betala spansk skatt, till exempel fastighetsskatt som icke-resident</li>
          <li>Köpa bil, ansluta el/vatten eller skriva under ett hyresavtal</li>
          <li>Ansöka om uppehållskort (TIE) som icke-EU-medborgare</li>
        </ul>
      </section>

      <section>
        <h2>Så går ansökan vanligtvis till</h2>
        <p>
          Den vanliga vägen går via en <em>cita previa</em> (bokad tid) hos en utsedd
          polisstation (Oficina de Extranjería) i Spanien, eller — om du ännu inte är i
          landet — det spanska konsulatet i Sverige. Där lämnar du in formuläret EX-15
          tillsammans med ditt pass och underlag för det ekonomiska, yrkesmässiga eller
          sociala skälet till ansökan, samt betalar en mindre administrativ avgift
          (Modelo 790, código 012) innan NIE-intyget utfärdas.
        </p>
        <p>
          Det är precis här många fastnar: konsulatstider kan vara fullbokade månader
          framåt, EX-15-formuläret fylls lätt i fel, och saknas ett dokument får man
          oftast börja om med en ny tid. Se hela{' '}
          <Link href={articleHref('how-to-get-nie-number', 'sv')}>
            steg-för-steg-guiden för att skaffa ett NIE-nummer
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Så hjälper Espallo till</h2>
        <p>
          Espallo sköter pappersarbetet, bokningen och inlämningen åt dig genom vårt
          nätverk av spanska jurister — även med alternativ där du varken behöver resa
          till Spanien eller vänta månader på en konsulatstid. Du fyller i dina uppgifter
          online, signerar digitalt, och sedan tar vi över.
        </p>
      </section>
    </>
  ),
  faqHeading: 'Vanliga frågor',
  faq: [
    {
      question: 'Kan jag skaffa ett NIE-nummer utan att resa till Spanien?',
      answer:
        'Ja, i många fall kan en jurist ansöka åt dig med en fullmakt, utan att du själv behöver infinna dig hos myndighet eller konsulat.',
    },
    {
      question: 'Hur lång tid tar det att få ett NIE-nummer?',
      answer:
        'Det beror mycket på tillgången till tider. Direktansökningar kan ta flera veckor; med en representant som redan har tillgång till tider går det oftast snabbare.',
    },
    {
      question: 'Går ett NIE-nummer ut?',
      answer:
        'Nej, själva NIE-numret upphör aldrig att gälla. Det fysiska intyget kan utfärdas på nytt om du förlorar det, och numret förblir giltigt även om du lämnar och senare återvänder till Spanien.',
    },
    {
      question: 'Är NIE samma sak som uppehållstillstånd?',
      answer:
        'Nej. NIE är bara ett identifikationsnummer. Uppehållstillstånd (och TIE-kortet för icke-EU-medborgare) är en separat process som inte alla med NIE-nummer behöver.',
    },
    {
      question: 'Vilka dokument behöver jag för ansökan?',
      answer:
        'Vanligtvis ett giltigt pass, det ifyllda formuläret EX-15 samt underlag för skälet till ansökan, till exempel ett reservationsavtal för en bostad. Se vår fullständiga dokumentlista.',
    },
  ],
  ctaHeading: 'Behöver du hjälp med ditt NIE-nummer?',
  ctaText:
    'Espallo sköter ansökan, tidsbokning och pappersarbete åt svenska kunder — till fast pris, utan att du behöver resa till Spanien.',
  ctaButton: 'Få hjälp med ditt NIE-nummer',
  disclaimer:
    'Espallo är en administrativ tjänst, inte en advokatbyrå. Vi ger ingen juridisk rådgivning. Våra samarbetande jurister och notarier i Spanien har ett direkt uppdragsförhållande med dig som kund.',
}

export default content
