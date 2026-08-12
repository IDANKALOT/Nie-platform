import Link from 'next/link'
import { articleHref } from '@/lib/articles/href'
import type { ArticleContent } from '../types'

const content: ArticleContent = {
  title: 'Hur Lång Tid Tar Det Att Få Ett NIE Nummer?',
  description:
    'Vad som faktiskt avgör NIE-handläggningstiden — tillgänglighet till tider, inte pappersarbete — och hur du planerar om du har en deadline.',
  breadcrumbHome: 'Hem',
  breadcrumbLabel: 'NIE Handläggningstid',
  h1: 'Hur Lång Tid Tar Det Att Få Ett NIE Nummer?',
  updatedLabel: 'Senast uppdaterad',
  lastUpdated: '2026-08-12',
  intro: (
    <p>
      Det finns ingen fast handläggningstid för ett NIE-nummer, för själva
      pappersarbetet går snabbt — det som varierar kraftigt är hur lång tid det tar att
      överhuvudtaget få en tid. Alla som ger dig ett exakt antal dagar utan att känna
      till din plats och väg gissar bara.
    </p>
  ),
  body: (
    <>
      <section>
        <h2>Vad som faktiskt avgör tidsramen</h2>
        <p>
          När du väl sitter framför en tjänsteman med rätt dokument utfärdas NIE-numret
          vanligtvis samma dag eller inom några dagar. Den verkliga variabeln är
          väntetiden fram till den tiden: hårt belastade polisstationer och konsulat
          kan vara fullbokade allt från några dagar till flera månader, beroende på
          plats och säsong. Se vår{' '}
          <Link href={articleHref('how-to-get-nie-number', 'sv')}>
            steg-för-steg-guide
          </Link>{' '}
          för var i processen den här flaskhalsen sitter.
        </p>
      </section>

      <section>
        <h2>Vad som snabbar upp det, och vad som bromsar det</h2>
        <p>
          Korrekta, kompletta dokument vid första försöket undviker den största
          förseningen: att behöva boka om efter ett avslag. Ett ombud med befintlig
          tillgång till tider — istället för att boka helt själv från noll — är oftast
          snabbare än att försöka helt på egen hand. Högsäsong för bostadsköp och
          utflyttning (vår och tidig höst i många områden) brukar innebära längre
          väntetider hos populära kontor.
        </p>
      </section>

      <section>
        <h2>Om du har en fast deadline</h2>
        <p>
          Arbetar du mot ett fast datum — ett tillträde för en bostad, en jobbstart —
          vänta inte och se om en tid öppnas av sig själv. Starta processen så tidigt
          som möjligt, och överväg ett ombud med befintlig tillgång till tider som ett
          sätt att ta bort den största osäkerheten från din tidsplan.
        </p>
      </section>
    </>
  ),
  faqHeading: 'Vanliga frågor',
  faq: [
    {
      question: 'Kan jag betala extra för att få mitt NIE snabbare?',
      answer:
        'Det finns ingen officiell expresstjänst. Snabbhet kommer från tillgång till tider och korrekta dokument vid första försöket, inte från en extra avgift.',
    },
    {
      question: 'Går det snabbare att ansöka via fullmakt?',
      answer:
        'Det kan det, främst för att ett ombud kan redan ha tillgång till tider som annars skulle ta dig veckor att hitta själv.',
    },
    {
      question: 'Vad är den vanligaste enskilda orsaken till förseningar?',
      answer:
        'Tillgänglighet till tider, med bred marginal — inte själva pappersarbetet, som behandlas snabbt när det lämnats in korrekt.',
    },
    {
      question: 'Är handläggningen långsammare för vissa nationaliteter?',
      answer:
        'Nej, processen och den typiska tidsramen är densamma oavsett nationalitet.',
    },
  ],
  ctaHeading: 'Har du en deadline?',
  ctaText:
    'Espallo ansöker om ditt NIE-nummer med vår befintliga tillgång till tider, så att du inte fastnar och väntar på att en tid ska öppnas.',
  ctaButton: 'Starta din NIE-ansökan nu',
  disclaimer:
    'Espallo är en administrativ tjänst, inte en advokatbyrå. Vi ger ingen juridisk rådgivning. Våra samarbetande jurister och notarier i Spanien har ett direkt uppdragsförhållande med dig som kund.',
}

export default content
