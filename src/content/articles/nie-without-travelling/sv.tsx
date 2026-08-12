import Link from 'next/link'
import { articleHref } from '@/lib/articles/href'
import type { ArticleContent } from '../types'

const content: ArticleContent = {
  title: 'Kan Man Skaffa Ett NIE Nummer Utan Att Resa Till Spanien?',
  description:
    'Ja — så fungerar en NIE-ansökan via fullmakt exakt, vad den kostar i förtroende och pappersarbete, och när den är mer logisk än en resa.',
  breadcrumbHome: 'Hem',
  breadcrumbLabel: 'NIE Utan Att Resa',
  h1: 'Kan Man Skaffa Ett NIE Nummer Utan Att Resa Till Spanien?',
  updatedLabel: 'Senast uppdaterad',
  lastUpdated: '2026-08-12',
  intro: (
    <p>
      Ja. Du behöver varken vara fysiskt närvarande i Spanien eller hos ett spanskt
      konsulat för att få ett NIE-nummer — en spansk jurist kan ansöka åt dig med en
      fullmakt. Det är vägen folk använder när de köper bostad på distans, inte har ett
      spanskt konsulat i närheten, eller helt enkelt inte kan avsätta tid för resan.
    </p>
  ),
  body: (
    <>
      <section>
        <h2>Så fungerar fullmaktsvägen i praktiken</h2>
        <p>
          Du ger skriftligt en spansk jurist fullmakt att lämna in EX-15-ansökan och
          hämta NIE-intyget åt dig. I de flesta fall kan fullmakten undertecknas och
          bevittnas på distans (till exempel hos en notarie i ditt hemland, varefter
          dokumentet legaliseras för användning i Spanien), så hela processen —
          undertecknande, dokumentinsamling, inlämning och mottagande av ditt intyg —
          kan ske utan att du bokar en flygresa.
        </p>
      </section>

      <section>
        <h2>Vad den här vägen är — och inte är</h2>
        <p>
          Det är ingen genväg förbi den officiella processen — samma EX-15-blankett,
          samma dokument och samma myndighetsavgift gäller fortfarande. Det som ändras
          är vem som fysiskt går på tiden: ditt ombud, inte du. Se vår{' '}
          <Link href={articleHref('nie-number-documents', 'sv')}>dokumentlista</Link>{' '}
          för exakt vad du behöver skicka in.
        </p>
      </section>

      <section>
        <h2>När det är mer logiskt än att resa</h2>
        <p>
          Har du redan en resa till Spanien planerad kan personlig ansökan vara lika
          snabb. Fullmaktsvägen är mest logisk när du har en deadline (till exempel
          ett tillträde för en bostad) men inte hinner resa i tid, när ditt närmaste
          konsulat har långa väntetider, eller när du helt enkelt hellre slipper
          tillbringa en resedag i en myndighetskö.
        </p>
      </section>
    </>
  ),
  faqHeading: 'Vanliga frågor',
  faq: [
    {
      question: 'Är en digital NIE-ansökan juridiskt giltig?',
      answer:
        'Ja — fullmakt är ett standardiserat, juridiskt erkänt instrument i Spanien som används till betydligt mer än NIE-ansökningar, bland annat bostadsköp och företagsbildning.',
    },
    {
      question: 'Behöver jag besöka en notarie i mitt eget land?',
      answer:
        'Vanligtvis ja, för att underteckna och bevittna fullmakten, även om det exakta kravet beror på ditt land och ett eventuellt legaliseringsavtal (till exempel apostille) med Spanien.',
    },
    {
      question: 'Hur vet jag att min jurist faktiskt lämnade in min ansökan?',
      answer:
        'En seriös tjänst bekräftar varje steg och lämnar över ditt NIE-intyg när det är utfärdat — fråga aktivt om statusuppdateringar om du inte får dem på eget initiativ.',
    },
    {
      question: 'Kan jag ändå resa till Spanien senare även om jag ansökte på distans?',
      answer:
        'Ja, NIE-numret är giltigt oavsett hur det erhölls, och begränsar inte framtida resor eller ansökningar på något sätt.',
    },
  ],
  ctaHeading: 'Skaffa ditt NIE utan att lämna hemmet',
  ctaText:
    'Espallo sköter hela NIE-ansökan på distans genom våra samarbetande jurister i Spanien — ingen flygresa, ingen tid att jaga.',
  ctaButton: 'Starta din digitala NIE-ansökan',
  disclaimer:
    'Espallo är en administrativ tjänst, inte en advokatbyrå. Vi ger ingen juridisk rådgivning. Våra samarbetande jurister och notarier i Spanien har ett direkt uppdragsförhållande med dig som kund.',
}

export default content
