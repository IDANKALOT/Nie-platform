import Link from 'next/link'
import { articleHref } from '@/lib/articles/href'
import type { ArticleContent } from '../types'

const content: ArticleContent = {
  title: 'Så Får Du En NIE-Tid i Spanien',
  description:
    'Så fungerar bokningssystemet cita previa för NIE-tider egentligen, varför tider är så svåra att hitta, och praktiska tips för att få en.',
  breadcrumbHome: 'Hem',
  breadcrumbLabel: 'NIE Tid',
  h1: 'Så Får Du En NIE-Tid i Spanien',
  updatedLabel: 'Senast uppdaterad',
  lastUpdated: '2026-08-12',
  intro: (
    <p>
      Systemet <em>cita previa</em> (förbokad tid) är det överlägset vanligaste hindret
      i hela NIE-processen — mer än pappersarbetet, mer än själva blanketten. Så
      fungerar bokningssystemet, och det är det som faktiskt hjälper.
    </p>
  ),
  body: (
    <>
      <section>
        <h2>Så fungerar bokningssystemet</h2>
        <p>
          Tider bokas via Spaniens officiella onlinesystem, kopplat till ett
          specifikt kontor (en polisstations Oficina de Extranjería, eller ett
          konsulat om du är utomlands — se vår sida om{' '}
          <Link href={articleHref('nie-from-abroad', 'sv')}>
            att ansöka från utlandet
          </Link>
          ). Du väljer en provins och ett kontor, sedan ett syfte (NIE), och systemet
          visar lediga tider — om det finns några.
        </p>
      </section>

      <section>
        <h2>Varför tider är så svåra att hitta</h2>
        <p>
          Efterfrågan hos populära kontor (storstäder, kustområden med många
          utländska bostadsköpare) överstiger regelbundet antalet tider som frigörs
          dagligen. Det finns ingen kölista och inget sätt att boka utöver det systemet
          visar — tider frigörs, ofta vid en fast tidpunkt på dagen, och tas inom
          minuter.
        </p>
      </section>

      <section>
        <h2>Praktiska tips</h2>
        <ul>
          <li>Kontrollera regelbundet istället för en gång — tider öppnas när andra avbokar</li>
          <li>
            Vissa regioner eller mindre kontor har kortare väntetider än de mest
            belastade provinshuvudstäderna
          </li>
          <li>
            Ha dina dokument redo innan du bokar, så att du inte behöver boka om ifall
            något saknas
          </li>
          <li>
            Om väntetiden inte fungerar med din tidsplan tar ett ombud med befintlig
            tillgång till tider bort problemet helt
          </li>
        </ul>
      </section>
    </>
  ),
  faqHeading: 'Vanliga frågor',
  faq: [
    {
      question: 'Kan jag boka en NIE-tid hos vilket kontor som helst, inte bara mitt lokala?',
      answer:
        'I Spanien kan du generellt boka hos vilken Oficina de Extranjería som helst med lediga tider, inte bara den närmaste — vissa sökande bokar hos mindre belastade kontor i andra provinser.',
    },
    {
      question: 'Vid vilken tid på dagen brukar nya tider dyka upp?',
      answer:
        'Det varierar mellan kontor och förändras över tid; det finns inget enskilt tillförlitligt schema, vilket är en del av anledningen till att systemet är frustrerande att använda.',
    },
    {
      question: 'Kan någon annan boka tiden åt mig?',
      answer:
        'Ja — ett ombud kan boka och närvara åt dig med en fullmakt, utan att du själv behöver använda bokningssystemet.',
    },
    {
      question: 'Vad händer om jag missar min tid?',
      answer:
        'Du förlorar tiden och måste boka om från början — det finns generellt ingen ombokning inom själva systemet.',
    },
  ],
  ctaHeading: 'Trött på att uppdatera bokningssidan?',
  ctaText:
    'Espallo har redan tillgång till tider genom våra samarbetande jurister i Spanien — ingen uppdatering, inga missade tider.',
  ctaButton: 'Hoppa över tidsjakten',
  disclaimer:
    'Espallo är en administrativ tjänst, inte en advokatbyrå. Vi ger ingen juridisk rådgivning. Våra samarbetande jurister och notarier i Spanien har ett direkt uppdragsförhållande med dig som kund.',
}

export default content
