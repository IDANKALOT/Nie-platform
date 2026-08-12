import Link from 'next/link'
import { articleHref } from '@/lib/articles/href'
import type { ArticleContent } from '../types'

const content: ArticleContent = {
  title: 'Ansök om NIE Nummer i Spanien',
  description:
    'Tre sätt att ansöka om ett spanskt NIE-nummer — i Spanien, hos konsulatet eller via fullmakt — och hur du väljer rätt för din situation.',
  breadcrumbHome: 'Hem',
  breadcrumbLabel: 'Ansök om NIE Nummer',
  h1: 'Ansök om NIE Nummer i Spanien',
  updatedLabel: 'Senast uppdaterad',
  lastUpdated: '2026-08-12',
  intro: (
    <p>
      Det finns tre sätt att ansöka om ett <strong>NIE-nummer</strong>, och vilket som
      passar beror nästan uteslutande på om — och när — du faktiskt befinner dig i
      Spanien. De fullständiga stegen för respektive väg hittar du i vår{' '}
      <Link href={articleHref('how-to-get-nie-number', 'sv')}>guide till NIE-nummer</Link>.
      Den här sidan handlar om att välja rätt väg och komma igång.
    </p>
  ),
  body: (
    <>
      <section>
        <h2>Dina tre alternativ</h2>
        <p>
          <strong>1. Ansök i Spanien.</strong> Har du redan en resa bokad är det oftast
          den snabbaste vägen — du bokar en cita previa hos en lokal Oficina de
          Extranjería och infinner dig personligen.
        </p>
        <p>
          <strong>2. Ansök hos ett spanskt konsulat.</strong> Reser du inte än
          behandlar de flesta spanska konsulat NIE-ansökningar, även om
          tillgängligheten till tider varierar mycket mellan länder och städer.
        </p>
        <p>
          <strong>3. Ansök via fullmakt.</strong> Du ger en spansk jurist fullmakt att
          lämna in och hämta NIE åt dig. Det är det enda alternativet som varken kräver
          tid eller resa från din sida — i gengäld betalar du för representation
          istället för att sköta pappersarbetet själv.
        </p>
      </section>

      <section>
        <h2>Vad du behöver innan du börjar, oavsett väg</h2>
        <p>
          Alla vägar kräver samma kärnelement: ett giltigt pass, den ifyllda
          EX-15-blanketten och dokumenterat underlag för varför du behöver NIE (ett
          reservationsavtal för en bostad, ett jobberbjudande eller liknande). Se vår
          fullständiga{' '}
          <Link href={articleHref('nie-number-documents', 'sv')}>
            NIE-dokumentlista
          </Link>{' '}
          innan du bokar något, så att du inte nekas på grund av ett saknat papper.
        </p>
      </section>

      <section>
        <h2>Om du väljer fullmaktsvägen</h2>
        <p>
          Du undertecknar en fullmakt (personligen hos en notarie, eller på distans
          beroende på ditt land), skickar kopior av dina dokument, och din jurist sköter
          tid och inlämning. Så fungerar Espallos tjänst: inget jagande efter en cita
          previa, ingen resa att planera kring en myndighetstid.
        </p>
      </section>
    </>
  ),
  faqHeading: 'Vanliga frågor',
  faq: [
    {
      question: 'Vilken ansökningsväg är snabbast?',
      answer:
        'Det beror på den aktuella tillgängligheten till tider, inte på själva vägen. Ett ombud med befintlig tillgång till tider är ofta snabbare än att boka helt själv.',
    },
    {
      question: 'Kan jag byta väg om mitt första val inte fungerar?',
      answer:
        'Ja — är konsulatstider i ditt land fullbokade månader framåt är ett byte till en fullmaktsansökan en vanlig och enkel lösning.',
    },
    {
      question: 'Behöver jag ett spanskt bankkonto innan jag ansöker?',
      answer:
        'Nej. Ett NIE-nummer är normalt en förutsättning för att öppna ett spanskt bankkonto, inte tvärtom.',
    },
    {
      question: 'Skiljer sig ansökan vid bostadsköp och arbete?',
      answer:
        'Själva NIE-ansökan är densamma; det är bara underlaget för skälet till ansökan som ändras.',
    },
  ],
  ctaHeading: 'Redo att ansöka?',
  ctaText:
    'Espallo ansöker om ditt NIE-nummer genom våra samarbetande jurister i Spanien — utan tid eller resa från din sida.',
  ctaButton: 'Starta din NIE-ansökan',
  disclaimer:
    'Espallo är en administrativ tjänst, inte en advokatbyrå. Vi ger ingen juridisk rådgivning. Våra samarbetande jurister och notarier i Spanien har ett direkt uppdragsförhållande med dig som kund.',
}

export default content
