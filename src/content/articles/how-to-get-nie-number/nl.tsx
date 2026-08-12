import Link from 'next/link'
import { articleHref } from '@/lib/articles/href'
import type { ArticleContent } from '../types'

const content: ArticleContent = {
  title: 'Hoe Krijg Je Een NIE Nummer In Spanje: Stap Voor Stap',
  description:
    'De exacte stappen om een Spaans NIE nummer te krijgen — van het boeken van een cita previa tot het certificaat — en de fouten die de meeste mensen maanden kosten.',
  breadcrumbHome: 'Home',
  breadcrumbLabel: 'Hoe Krijg Je Een NIE Nummer',
  h1: 'Hoe Krijg Je Een NIE Nummer In Spanje?',
  updatedLabel: 'Laatst bijgewerkt',
  lastUpdated: '2026-08-12',
  intro: (
    <p>
      Een <strong>NIE nummer</strong> aanvragen volgt een vaste bureaucratische
      volgorde — maar die volgorde heeft genoeg zwakke schakels (beschikbaarheid van
      afspraken, één verkeerd document, een verouderde formulierversie) dat de meeste
      mensen die het zelf proberen minstens één keer opnieuw moeten beginnen. Hier is
      het proces stap voor stap, en waar het meestal misgaat.
    </p>
  ),
  body: (
    <>
      <section>
        <h2>Stap 1: Bepaal waar u aanvraagt</h2>
        <p>
          U heeft twee opties: aanvragen in Spanje bij de Oficina de Extranjería van een
          politiebureau, of vooraf aanvragen bij het Spaanse consulaat in Nederland of
          België. Heeft u al een reis naar Spanje geboekt, dan gaat aanvragen ter plekke
          meestal sneller. Reist u nog niet — bijvoorbeeld omdat u op afstand een woning
          koopt — dan zijn de consulaatroute of een aanvraag via volmacht (zie hieronder)
          de enige opties.
        </p>
      </section>

      <section>
        <h2>Stap 2: Boek een cita previa</h2>
        <p>
          Beide routes vereisen een <em>cita previa</em> (afspraak) geboekt via het
          online systeem van de Spaanse overheid. Dit is het grootste knelpunt:
          afspraken bij drukke bureaus en consulaten zitten vaak weken tot maanden
          vooruit vol, en het systeem heeft geen wachtlijst — u ververst de pagina tot
          er een plek vrijkomt.
        </p>
      </section>

      <section>
        <h2>Stap 3: Verzamel uw documenten</h2>
        <p>U heeft doorgaans nodig:</p>
        <ul>
          <li>Een geldig paspoort (plus een kopie)</li>
          <li>Het ingevulde aanvraagformulier EX-15</li>
          <li>
            Bewijs van de economische, professionele of sociale reden voor uw aanvraag —
            bijvoorbeeld een ondertekend reserveringscontract voor een woning, een
            functieaanbod of een brief over het openen van een rekening
          </li>
          <li>Betalingsbewijs van de vergoeding Modelo 790, código 012</li>
        </ul>
      </section>

      <section>
        <h2>Stap 4: Vul het EX-15-formulier in en dien het in</h2>
        <p>
          Het EX-15 is kort maar onvergevingsgezind — een verkeerd aangevinkt vakje
          (bijvoorbeeld ingezetene vs. niet-ingezetene) of een verschil tussen de
          opgegeven reden en uw bewijsdocument is een veelvoorkomende oorzaak van
          afgewezen aanvragen. Corrigeren dezelfde dag is niet mogelijk; u boekt opnieuw
          en begint van voren af aan.
        </p>
      </section>

      <section>
        <h2>Stap 5: Ga naar uw afspraak en betaal de vergoeding</h2>
        <p>
          Bij de afspraak beoordeelt een ambtenaar uw documenten en verwerkt de
          aanvraag als alles in orde is. U betaalt de administratieve vergoeding
          (Modelo 790, código 012) bij een bank of online, voor of tijdens de afspraak,
          afhankelijk van het kantoor.
        </p>
      </section>

      <section>
        <h2>Stap 6: Ontvang uw NIE-certificaat</h2>
        <p>
          Zodra de aanvraag is goedgekeurd, ontvangt u het witte A4-certificaat met uw
          nummer. Sommige kantoren geven het dezelfde dag af; andere doen er een paar
          dagen tot enkele weken over. Meer over wat het certificaat precies is, leest u
          in ons artikel over{' '}
          <Link href={articleHref('what-is-an-nie-number', 'nl')}>
            wat een NIE nummer is
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Het alternatief: aanvragen via een vertegenwoordiger</h2>
        <p>
          U kunt een Spaanse jurist machtigen om namens u aan te vragen, waardoor stap 1
          en 2 volledig vervallen — geen afspraak te boeken, geen reis nodig. Zo werkt{' '}
          <Link href={articleHref('nie-number-spain', 'nl')}>de NIE-service van Espallo</Link>
          : u vult uw gegevens en documenten online in, en onze samenwerkende juristen
          regelen de fysieke stappen.
        </p>
      </section>
    </>
  ),
  faqHeading: 'Veelgestelde vragen',
  faq: [
    {
      question: 'Wat is de meest voorkomende reden voor vertraging bij NIE-aanvragen?',
      answer:
        'Verreweg de beschikbaarheid van afspraken. Het papierwerk zelf is kort — het knelpunt is bijna altijd het wachten op een cita-previa-plek bij een druk kantoor of consulaat.',
    },
    {
      question: 'Kan iemand anders mijn aanvraag voor mij indienen?',
      answer:
        'Ja, met een notariële volmacht kan een jurist uw NIE namens u indienen en ophalen, zonder dat u zelf aanwezig hoeft te zijn.',
    },
    {
      question: 'Moet ik Spaans spreken tijdens de afspraak?',
      answer:
        'Het helpt, maar is niet strikt noodzakelijk. Veel aanvragers nemen een tolk mee of gebruiken een vertegenwoordiger die de afspraak in het Spaans voor hen afhandelt.',
    },
    {
      question: 'Wat gebeurt er als mijn aanvraag wordt afgewezen?',
      answer:
        'U lost het probleem op (meestal een document- of formulierfout) en boekt een nieuwe afspraak — er is geen bezwaarprocedure voor een eenvoudige afwijzing in deze fase.',
    },
  ],
  ctaHeading: 'Sla de afsprakenrij over',
  ctaText:
    'Espallo vraagt uw NIE nummer namens u aan via onze samenwerkende juristen in Spanje — ook volledig op afstand.',
  ctaButton: 'Start uw NIE-aanvraag',
  disclaimer:
    'Espallo is een administratieve dienstverlener, geen advocatenkantoor. Wij geven geen juridisch advies; de samenwerkende juristen en notarissen in Spanje hebben een directe cliëntrelatie met u.',
}

export default content
