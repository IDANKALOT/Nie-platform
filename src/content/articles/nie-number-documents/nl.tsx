import Link from 'next/link'
import { articleHref } from '@/lib/articles/href'
import type { ArticleContent } from '../types'

const content: ArticleContent = {
  title: 'Welke Documenten Heeft U Nodig Voor Een NIE Nummer?',
  description:
    'De basislijst met documenten voor een NIE-aanvraag, plus wat verandert afhankelijk van of u een woning koopt, werkt of een bankrekening opent.',
  breadcrumbHome: 'Home',
  breadcrumbLabel: 'NIE Nummer Documenten',
  h1: 'Welke Documenten Heeft U Nodig Voor Een NIE Nummer?',
  updatedLabel: 'Laatst bijgewerkt',
  lastUpdated: '2026-08-12',
  intro: (
    <p>
      Elke NIE-aanvraag vereist dezelfde basisdocumenten, plus één document dat
      verandert afhankelijk van de reden van uw aanvraag. Ontbrekende of niet
      passende documenten zijn de belangrijkste oorzaak van afgewezen aanvragen in
      ons{' '}
      <Link href={articleHref('how-to-get-nie-number', 'nl')}>
        stap-voor-stap proces
      </Link>
      , dus controleer deze lijst tegen uw situatie voordat u een afspraak boekt.
    </p>
  ),
  body: (
    <>
      <section>
        <h2>Basisdocumenten, verplicht voor elke aanvrager</h2>
        <ul>
          <li>Een geldig paspoort, plus een kopie van de identificatiepagina&apos;s</li>
          <li>Het ingevulde en ondertekende aanvraagformulier EX-15</li>
          <li>Betalingsbewijs van de administratieve vergoeding Modelo 790, código 012</li>
          <li>
            Eén recente pasfoto (vereist bij sommige, maar niet alle kantoren —
            controleer dit bij uw specifieke bureau of consulaat)
          </li>
        </ul>
      </section>

      <section>
        <h2>Het document dat verandert per reden</h2>
        <p>U moet ook aantonen waarom u de NIE nodig heeft. De meest voorkomende bewijsdocumenten zijn:</p>
        <ul>
          <li>
            <strong>Woning kopen:</strong> een ondertekend reserveringscontract
            (contrato de reserva) of aanbetalingscontract met verkoper of makelaar
          </li>
          <li>
            <strong>Werken:</strong> een ondertekend functieaanbod of arbeidscontract
            van een Spaanse werkgever
          </li>
          <li>
            <strong>Bankrekening openen:</strong> een brief van de bank die bevestigt
            dat een NIE vereist is om verder te gaan
          </li>
          <li>
            <strong>Zelfstandige worden (autónomo):</strong> bewijs van geregistreerde
            economische activiteit of een businessplan
          </li>
          <li>
            <strong>Nog geen specifieke reden (algemene interesse):</strong> sommige
            kantoren accepteren een algemene intentieverklaring over investering of
            wonen, al wordt dit minder consistent behandeld dan bovenstaande
            categorieën
          </li>
        </ul>
      </section>

      <section>
        <h2>Als een document niet in het Spaans is</h2>
        <p>
          Documenten die buiten Spanje zijn uitgegeven, hebben soms een beëdigde
          Spaanse vertaling nodig, en in sommige gevallen een apostille om de
          echtheid van het origineel te bevestigen. Of dit van toepassing is, hangt af
          van het documenttype en het kantoor dat uw aanvraag behandelt — het is
          verstandig dit te bevestigen vóór uw afspraak, aangezien een vertaling
          meestal langer duurt om te regelen dan de afspraak zelf.
        </p>
      </section>
    </>
  ),
  faqHeading: 'Veelgestelde vragen',
  faq: [
    {
      question: 'Moet ik originelen meenemen, of zijn kopieën genoeg?',
      answer:
        'Neem originelen plus kopieën mee. Kantoren controleren doorgaans het origineel en houden de kopie.',
    },
    {
      question: 'Wat gebeurt er als ik met het verkeerde bewijsdocument kom?',
      answer:
        'Uw aanvraag wordt meestal ter plekke afgewezen, en u moet een nieuwe afspraak boeken met het juiste document — een oplossing dezelfde dag is niet mogelijk.',
    },
    {
      question: 'Moet mijn paspoort een minimale geldigheidsduur hebben?',
      answer:
        'Het moet voor de nabije toekomst geldig zijn — een verlopen of bijna verlopen paspoort is bij sommige kantoren reden voor afwijzing.',
    },
    {
      question: 'Kan ik een rijbewijs gebruiken in plaats van een paspoort?',
      answer:
        'Nee, een geldig paspoort (of nationale identiteitskaart voor sommige EU-burgers) is vereist; een rijbewijs wordt niet geaccepteerd als identificatie voor een NIE-aanvraag.',
    },
  ],
  ctaHeading: 'Niet zeker welke documenten u nodig heeft?',
  ctaText:
    'Espallo beoordeelt uw situatie en bereidt de exacte documentenset voor uw aanvraag voor, zodat niets wordt afgewezen door een documentfout.',
  ctaButton: 'Hulp bij het voorbereiden van uw NIE-aanvraag',
  disclaimer:
    'Espallo is een administratieve dienstverlener, geen advocatenkantoor. Wij geven geen juridisch advies; de samenwerkende juristen en notarissen in Spanje hebben een directe cliëntrelatie met u.',
}

export default content
