import Link from 'next/link'
import { articleHref } from '@/lib/articles/href'
import type { ArticleContent } from '../types'

const content: ArticleContent = {
  title: 'NIE Nummer Spanje – Hulp Bij Uw Aanvraag',
  description:
    'Heeft u een NIE nummer nodig in Spanje? Lees hoe de aanvraag werkt, welke documenten u nodig heeft, en hoe Espallo het hele proces voor u regelt.',
  breadcrumbHome: 'Home',
  breadcrumbLabel: 'NIE Nummer Spanje',
  h1: 'NIE Nummer Spanje – Professionele Hulp Bij Uw Aanvraag',
  updatedLabel: 'Laatst bijgewerkt',
  lastUpdated: '2026-08-12',
  intro: (
    <p>
      Gaat u een woning kopen, een bankrekening openen, werken of verhuizen naar Spanje?
      Dan heeft u een <strong>NIE nummer</strong> nodig (Número de Identificación de
      Extranjero) — het Spaanse identificatienummer dat de autoriteiten gebruiken voor
      buitenlanders bij alle officiële zaken. In dit artikel: wat het is, wie het nodig
      heeft, en hoe Espallo de volledige aanvraag voor u regelt zonder dat u naar Spanje
      hoeft te reizen.
    </p>
  ),
  body: (
    <>
      <section>
        <h2>Wat is een NIE nummer precies?</h2>
        <p>
          De NIE is een uniek, permanent identificatienummer dat Spaanse autoriteiten,
          banken, notarissen en de belastingdienst gebruiken om u te identificeren bij
          officiële zaken. Het nummer geeft op zichzelf geen verblijfsrecht in Spanje —
          het is een identificatie, geen verblijfsvergunning. Lees meer in ons artikel
          over{' '}
          <Link href={articleHref('what-is-an-nie-number', 'nl')}>
            wat een NIE nummer is
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Wie heeft een NIE nummer nodig?</h2>
        <p>U heeft een NIE nummer nodig als u onder andere wilt:</p>
        <ul>
          <li>Een woning kopen of verkopen in Spanje</li>
          <li>Een Spaanse bankrekening openen</li>
          <li>Werken in loondienst of als zelfstandige (autónomo)</li>
          <li>Spaanse belasting betalen, zoals de niet-resident onroerendgoedbelasting</li>
          <li>Een auto kopen, nutsvoorzieningen aansluiten of een huurcontract tekenen</li>
          <li>Een verblijfskaart (TIE) aanvragen als niet-EU-burger</li>
        </ul>
      </section>

      <section>
        <h2>Hoe verloopt de aanvraag normaal gesproken?</h2>
        <p>
          De gebruikelijke route loopt via een <em>cita previa</em> (afspraak) bij een
          aangewezen politiebureau (Oficina de Extranjería) in Spanje, of — als u nog
          niet in Spanje bent — bij het Spaanse consulaat in Nederland of België. Daar
          dient u het formulier EX-15 in, samen met uw paspoort en bewijs van de
          economische, professionele of sociale reden voor de aanvraag, en betaalt u een
          kleine administratieve vergoeding (Modelo 790, código 012) voordat het
          NIE-certificaat wordt afgegeven.
        </p>
        <p>
          Precies hier lopen veel mensen vast: consulaatafspraken zitten soms
          maandenlang vol, het EX-15-formulier wordt makkelijk verkeerd ingevuld, en een
          ontbrekend document betekent meestal opnieuw beginnen met een nieuwe afspraak.
          Bekijk de volledige{' '}
          <Link href={articleHref('how-to-get-nie-number', 'nl')}>
            stap-voor-stap gids om een NIE nummer te krijgen
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Hoe Espallo helpt</h2>
        <p>
          Espallo regelt het papierwerk, de afspraak en de indiening namens u via ons
          netwerk van Spaanse juristen — ook met opties waarbij u niet naar Spanje hoeft
          te reizen of maandenlang op een consulaatafspraak hoeft te wachten. U vult uw
          gegevens online in, ondertekent digitaal, en wij nemen het van daaraf over.
        </p>
      </section>
    </>
  ),
  faqHeading: 'Veelgestelde vragen',
  faq: [
    {
      question: 'Kan ik een NIE nummer krijgen zonder naar Spanje te reizen?',
      answer:
        'Ja, in veel gevallen kan een jurist de aanvraag namens u indienen met een volmacht, zonder dat u zelf bij de autoriteit of het consulaat hoeft te verschijnen.',
    },
    {
      question: 'Hoe lang duurt het om een NIE nummer te krijgen?',
      answer:
        'Dat hangt sterk af van de beschikbaarheid van afspraken. Directe aanvragen kunnen enkele weken duren; via een vertegenwoordiger met bestaande toegang tot afspraken gaat het meestal sneller.',
    },
    {
      question: 'Verloopt een NIE nummer?',
      answer:
        'Nee, het NIE nummer zelf verloopt nooit. Het fysieke certificaat kan opnieuw worden afgegeven bij verlies, en het nummer blijft geldig, ook als u Spanje verlaat en later terugkeert.',
    },
    {
      question: 'Is een NIE nummer hetzelfde als een verblijfsvergunning?',
      answer:
        'Nee. De NIE is alleen een identificatienummer. Een verblijfsvergunning (en de TIE-kaart voor niet-EU-burgers) is een apart proces dat niet elke NIE-houder nodig heeft.',
    },
    {
      question: 'Welke documenten heb ik nodig voor de aanvraag?',
      answer:
        'Meestal een geldig paspoort, het ingevulde formulier EX-15 en bewijs van de reden voor uw aanvraag, bijvoorbeeld een reserveringsovereenkomst voor een woning. Zie onze volledige documentenlijst.',
    },
  ],
  ctaHeading: 'Hulp nodig bij uw NIE nummer?',
  ctaText:
    'Espallo regelt de aanvraag, afspraak en papierwerk voor internationale klanten — tegen een vaste prijs, zonder dat u naar Spanje hoeft te reizen.',
  ctaButton: 'Hulp bij uw NIE nummer',
  disclaimer:
    'Espallo is een administratieve dienstverlener, geen advocatenkantoor. Wij geven geen juridisch advies; de samenwerkende juristen en notarissen in Spanje hebben een directe cliëntrelatie met u.',
}

export default content
