import Link from 'next/link'
import { articleHref } from '@/lib/articles/href'
import type { ArticleContent } from '../types'

const content: ArticleContent = {
  title: 'Wat Is Een NIE Nummer In Spanje?',
  description:
    'Duidelijk uitgelegd: wat een Spaans NIE nummer is, hoe het eruitziet, wie het afgeeft, en waarom het niet hetzelfde is als een verblijfsvergunning.',
  breadcrumbHome: 'Home',
  breadcrumbLabel: 'Wat Is Een NIE Nummer',
  h1: 'Wat Is Een NIE Nummer In Spanje?',
  updatedLabel: 'Laatst bijgewerkt',
  lastUpdated: '2026-08-12',
  intro: (
    <p>
      NIE staat voor <strong>Número de Identificación de Extranjero</strong> — letterlijk
      &quot;identificatienummer voor buitenlanders&quot;. Het is het nummer dat Spanje
      toekent aan elke niet-Spanjaard die het land juridisch, financieel of
      administratief moet kunnen identificeren — meestal het eerste wat u nodig heeft
      zodra u iets officieels wilt regelen in Spanje.
    </p>
  ),
  body: (
    <>
      <section>
        <h2>Hoe ziet een NIE nummer eruit?</h2>
        <p>
          Het is een korte alfanumerieke code — een letter, zeven cijfers en een
          afsluitende controleletter, bijvoorbeeld <code>X1234567Z</code>. Spaanse
          staatsburgers hebben een vergelijkbaar nummer op hun identiteitskaart (DNI);
          de NIE is de tegenhanger voor buitenlanders, eenmalig toegekend en nooit
          hergebruikt.
        </p>
      </section>

      <section>
        <h2>Wie geeft het af, en hoe ziet het bewijs eruit?</h2>
        <p>
          De NIE wordt afgegeven door het Spaanse ministerie van Binnenlandse Zaken, via
          de Policía Nacional (Oficina de Extranjería) in Spanje, of via Spaanse
          consulaten in het buitenland. Na goedkeuring ontvangt u een wit A4-certificaat
          (<em>certificado de asignación de NIE</em>) met uw nummer, uw naam en de reden
          van afgifte. Dit papier — geen pasje — is het officiële bewijs van uw NIE.
        </p>
      </section>

      <section>
        <h2>NIE versus verblijfsvergunning — de meest voorkomende verwarring</h2>
        <p>
          Een NIE nummer betekent niet dat u legaal in Spanje verblijft, en het geeft
          geen visum of werkvergunning. Het is uitsluitend een identificatienummer voor
          transacties — woningaankoop, bankrekening, contracten, belasting.
          EU-burgers die zich permanent in Spanje vestigen, registreren zich apart in
          het EU-burgerregister; niet-EU-burgers vragen de TIE-verblijfskaart aan. Beide
          processen vereisen doorgaans eerst een NIE, maar de NIE zelf is geen bewijs
          van verblijf.
        </p>
      </section>

      <section>
        <h2>Waarom bijna iedereen die met Spanje te maken heeft er een nodig heeft</h2>
        <p>
          Spaanse banken, notarissen, de belastingdienst (Agencia Tributaria),
          nutsbedrijven en het kadaster gebruiken allemaal de NIE als primaire
          identificatie voor buitenlanders. Zonder NIE kunt u wettelijk geen
          transacties afronden zoals een woningaankoop of bedrijfsregistratie, ook niet
          als niet-resident. De volledige lijst met situaties vindt u in onze gids over{' '}
          <Link href={articleHref('nie-number-spain', 'nl')}>
            het aanvragen van een NIE nummer in Spanje
          </Link>
          .
        </p>
      </section>
    </>
  ),
  faqHeading: 'Veelgestelde vragen',
  faq: [
    {
      question: 'Is een NIE nummer hetzelfde als een fiscaal nummer?',
      answer:
        'Functioneel gezien wel voor de meeste doeleinden — de NIE dient na toekenning ook als uw NIF (fiscaal identificatienummer) voor buitenlanders.',
    },
    {
      question: 'Kunnen twee personen hetzelfde NIE nummer hebben?',
      answer:
        'Nee. Elk NIE nummer is uniek en permanent aan één persoon gekoppeld, ook als u na ontvangst nooit meer naar Spanje terugkeert.',
    },
    {
      question: 'Hebben kinderen ook een NIE nummer nodig?',
      answer:
        'Ja, als zij op een eigendomsakte, bankrekening of ander officieel document komen te staan, hebben ook minderjarigen hun eigen NIE nummer nodig.',
    },
    {
      question: 'Is het NIE-certificaat hetzelfde als de oude NIE-kaart?',
      answer:
        'Nee. Spanje gaf vroeger een fysieke NIE-kaart uit; tegenwoordig krijgt u in plaats daarvan een wit A4-certificaat. Oudere kaarten van vóór de wijziging blijven geldig als bewijs van het nummer.',
    },
  ],
  ctaHeading: 'Klaar om uw NIE nummer aan te vragen?',
  ctaText:
    'Espallo regelt de volledige aanvraag namens u — ook in gevallen waarin u nooit naar Spanje hoeft te reizen.',
  ctaButton: 'Start uw NIE-aanvraag',
  disclaimer:
    'Espallo is een administratieve dienstverlener, geen advocatenkantoor. Wij geven geen juridisch advies; de samenwerkende juristen en notarissen in Spanje hebben een directe cliëntrelatie met u.',
}

export default content
