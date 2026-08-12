import Link from 'next/link'
import { articleHref } from '@/lib/articles/href'
import type { ArticleContent } from '../types'

const content: ArticleContent = {
  title: 'Kunt U Een NIE Nummer Krijgen Zonder Naar Spanje Te Reizen?',
  description:
    'Ja — zo werkt een NIE-aanvraag via volmacht precies, wat het kost aan vertrouwen en papierwerk, en wanneer het logischer is dan reizen.',
  breadcrumbHome: 'Home',
  breadcrumbLabel: 'NIE Zonder Te Reizen',
  h1: 'Kunt U Een NIE Nummer Krijgen Zonder Naar Spanje Te Reizen?',
  updatedLabel: 'Laatst bijgewerkt',
  lastUpdated: '2026-08-12',
  intro: (
    <p>
      Ja. U hoeft niet fysiek in Spanje of zelfs bij een Spaans consulaat aanwezig te
      zijn om een NIE nummer te krijgen — een Spaanse jurist kan namens u aanvragen
      met een volmacht. Dit is de route die mensen gebruiken wanneer ze op afstand een
      woning kopen, geen Spaans consulaat in de buurt hebben, of simpelweg geen tijd
      kunnen vrijmaken voor de reis.
    </p>
  ),
  body: (
    <>
      <section>
        <h2>Hoe de volmacht-route precies werkt</h2>
        <p>
          U machtigt schriftelijk een Spaanse jurist om het EX-15-aanvraagformulier in
          te dienen en het NIE-certificaat namens u op te halen. In de meeste gevallen
          kan de volmacht op afstand worden ondertekend en gewaarmerkt (bijvoorbeeld
          bij een notaris in uw eigen land, waarna het document wordt gelegaliseerd
          voor gebruik in Spanje), zodat het hele proces — ondertekenen, documenten
          verzamelen, indienen en uw certificaat ontvangen — kan plaatsvinden zonder
          dat u een vlucht boekt.
        </p>
      </section>

      <section>
        <h2>Wat deze route wel en niet is</h2>
        <p>
          Het is geen sluiproute langs de officiële procedure — hetzelfde
          EX-15-formulier, dezelfde documenten en dezelfde overheidsvergoeding blijven
          gelden. Wat verandert, is wie fysiek naar de afspraak gaat: uw
          vertegenwoordiger, niet u. Bekijk onze{' '}
          <Link href={articleHref('nie-number-documents', 'nl')}>documentenlijst</Link>{' '}
          voor precies wat u moet opsturen.
        </p>
      </section>

      <section>
        <h2>Wanneer het logischer is dan reizen</h2>
        <p>
          Heeft u al een reis naar Spanje gepland, dan kan persoonlijk aanvragen even
          snel zijn. De volmacht-route is het meest zinvol wanneer u een deadline
          heeft (bijvoorbeeld een opleveringsdatum van een woning) maar niet op tijd
          kunt reizen, wanneer uw dichtstbijzijnde consulaat lange wachttijden heeft,
          of wanneer u liever geen reisdag besteedt aan wachten bij een overheidsbureau.
        </p>
      </section>
    </>
  ),
  faqHeading: 'Veelgestelde vragen',
  faq: [
    {
      question: 'Is een NIE-aanvraag op afstand juridisch geldig?',
      answer:
        'Ja — een volmacht is een gestandaardiseerd, wettelijk erkend instrument in Spanje, dat veel breder wordt gebruikt dan alleen voor NIE-aanvragen, onder meer bij woningaankoop en bedrijfsoprichting.',
    },
    {
      question: 'Moet ik een notaris in mijn eigen land bezoeken?',
      answer:
        'Meestal wel, om de volmacht te ondertekenen en te laten waarmerken, al hangt de precieze vereiste af van uw land en een eventueel legalisatieverdrag (zoals een apostille) met Spanje.',
    },
    {
      question: 'Hoe weet ik dat mijn jurist mijn aanvraag daadwerkelijk heeft ingediend?',
      answer:
        'Een betrouwbare service bevestigt elke stap en overhandigt uw NIE-certificaat zodra het is afgegeven — vraag actief om statusupdates als u die niet uit uzelf ontvangt.',
    },
    {
      question: 'Kan ik later alsnog naar Spanje reizen, ook na een aanvraag op afstand?',
      answer:
        'Ja, het NIE nummer is geldig ongeacht hoe het is verkregen, en beperkt toekomstige reizen of aanvragen op geen enkele manier.',
    },
  ],
  ctaHeading: 'Vraag uw NIE aan zonder van huis te gaan',
  ctaText:
    'Espallo regelt de volledige NIE-aanvraag op afstand via onze samenwerkende juristen in Spanje — geen vlucht, geen afspraak om achteraan te jagen.',
  ctaButton: 'Start uw digitale NIE-aanvraag',
  disclaimer:
    'Espallo is een administratieve dienstverlener, geen advocatenkantoor. Wij geven geen juridisch advies; de samenwerkende juristen en notarissen in Spanje hebben een directe cliëntrelatie met u.',
}

export default content
