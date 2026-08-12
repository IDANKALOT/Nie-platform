import Link from 'next/link'
import { articleHref } from '@/lib/articles/href'
import type { ArticleContent } from '../types'

const content: ArticleContent = {
  title: 'Så Skaffar Du Ett NIE Nummer Från Utlandet',
  description:
    'Ansökan hos ett spanskt konsulat i ditt eget land: vad som skiljer sig från Spanien, vad du kan förvänta dig av bokningssystemet, och när ett ombud är mer logiskt.',
  breadcrumbHome: 'Hem',
  breadcrumbLabel: 'NIE Från Utlandet',
  h1: 'Så Skaffar Du Ett NIE Nummer Från Utlandet',
  updatedLabel: 'Senast uppdaterad',
  lastUpdated: '2026-08-12',
  intro: (
    <p>
      Planerar du ingen resa till Spanien är ansökan via ditt lokala spanska
      konsulat den direkta statliga vägen. Den följer samma regler som ansökan i
      Spanien, men den praktiska upplevelsen — bokning, dokument, avhämtning —
      skiljer sig tillräckligt för att det är värt att veta vad som väntar innan du
      börjar. (Vill du hellre hoppa över konsulatet helt, se vår sida om{' '}
      <Link href={articleHref('nie-without-travelling', 'sv')}>
        att skaffa NIE utan att resa
      </Link>
      , via fullmakt.)
    </p>
  ),
  body: (
    <>
      <section>
        <h2>Konsulatens bokningssystem varierar mellan länder</h2>
        <p>
          Varje spanskt konsulat sköter sin egen tidskalender, och efterfrågan
          varierar enormt — vissa konsulat erbjuder tider inom några veckor, andra är
          fullbokade i månader, särskilt i länder med många utlandsboende eller
          bostadsköpare. Det finns ingen möjlighet att boka hos ett annat konsulat än
          det som täcker din bosättningsort.
        </p>
      </section>

      <section>
        <h2>Vad som ofta skiljer sig från att ansöka i Spanien</h2>
        <p>
          Konsulat kräver oftare auktoriserade översättningar av underlag, eftersom
          de underliggande dokumenten (ett jobberbjudande, ett bostadskontrakt) ofta
          utfärdas utanför Spanien. Vissa konsulat skickar också NIE-intyget med post
          istället för att lämna över det vid tiden, vilket lägger till tid du bör
          räkna med. Kontrollera ditt specifika konsulats krav direkt, eftersom de
          inte är standardiserade mellan länder.
        </p>
      </section>

      <section>
        <h2>Om väntetiden är för lång</h2>
        <p>
          När ditt närmaste konsulats tidskalender är fullbokad längre fram än din
          tidsplan tillåter, är det praktiska alternativet att ansöka via fullmakt
          genom ett Spanienbaserat ombud, som istället ansöker hos en polisstation i
          Spanien åt dig. Så fungerar Espallos tjänst — ingen konsulatstid behövs.
        </p>
      </section>
    </>
  ),
  faqHeading: 'Vanliga frågor',
  faq: [
    {
      question: 'Kan jag ansöka hos vilket spanskt konsulat som helst, eller bara det närmaste?',
      answer:
        'Bara det konsulat som täcker din registrerade bosättningsort — du kan inte boka hos ett konsulat i ett annat område för kortare väntetid.',
    },
    {
      question: 'Kostar det mer att ansöka hos konsulatet än i Spanien?',
      answer:
        'Myndighetsavgiften är densamma i båda fallen; den enda troliga extrakostnaden är översättning av dokument, om ditt konsulat kräver det.',
    },
    {
      question: 'Hur får jag mitt NIE-intyg om jag ansöker hos konsulatet?',
      answer:
        'Det varierar mellan konsulat — vissa lämnar över det vid en uppföljande tid, andra skickar det med post. Bekräfta processen när du bokar.',
    },
    {
      question: 'Går det snabbare att använda ett ombud i Spanien än mitt lokala konsulat?',
      answer:
        'Ofta ja, om ditt konsulat har långa väntetider, eftersom ett ombud ansöker direkt hos en spansk polisstation istället för att vänta på en konsulatstid.',
    },
  ],
  ctaHeading: 'För lång väntetid hos konsulatet?',
  ctaText:
    'Espallo ansöker om ditt NIE-nummer i Spanien via fullmakt — ingen konsulatstid behövs, oavsett var du befinner dig.',
  ctaButton: 'Hoppa över konsulatsväntan',
  disclaimer:
    'Espallo är en administrativ tjänst, inte en advokatbyrå. Vi ger ingen juridisk rådgivning. Våra samarbetande jurister och notarier i Spanien har ett direkt uppdragsförhållande med dig som kund.',
}

export default content
