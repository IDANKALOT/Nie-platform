import Link from 'next/link'
import { articleHref } from '@/lib/articles/href'
import type { ArticleContent } from '../types'

const content: ArticleContent = {
  title: 'NIE Nummer Aanvragen in Spanje',
  description:
    'Drie manieren om een Spaans NIE nummer aan te vragen — in Spanje, bij het consulaat of via volmacht — en hoe u de juiste kiest voor uw situatie.',
  breadcrumbHome: 'Home',
  breadcrumbLabel: 'NIE Nummer Aanvragen',
  h1: 'NIE Nummer Aanvragen in Spanje',
  updatedLabel: 'Laatst bijgewerkt',
  lastUpdated: '2026-08-12',
  intro: (
    <p>
      Er zijn drie manieren om een <strong>NIE nummer</strong> aan te vragen, en welke
      zinvol is hangt bijna volledig af van of — en wanneer — u daadwerkelijk in Spanje
      bent. De volledige stappen per route vindt u in onze{' '}
      <Link href={articleHref('how-to-get-nie-number', 'nl')}>gids voor een NIE nummer</Link>.
      Deze pagina gaat over het kiezen van de juiste route en het starten.
    </p>
  ),
  body: (
    <>
      <section>
        <h2>Uw drie opties</h2>
        <p>
          <strong>1. Aanvragen in Spanje.</strong> Heeft u al een reis geboekt, dan is
          dit meestal de snelste route — u boekt een cita previa bij een lokale
          Oficina de Extranjería en gaat persoonlijk langs.
        </p>
        <p>
          <strong>2. Aanvragen bij een Spaans consulaat.</strong> Reist u nog niet, dan
          verwerken de meeste Spaanse consulaten NIE-aanvragen, al varieert de
          beschikbaarheid van afspraken sterk per land en stad.
        </p>
        <p>
          <strong>3. Aanvragen via volmacht.</strong> U machtigt een Spaanse jurist om
          de NIE namens u in te dienen en op te halen. Dit is de enige route zonder
          afspraak en zonder reis van uw kant — de keerzijde is dat u betaalt voor
          vertegenwoordiging in plaats van het papierwerk zelf te doen.
        </p>
      </section>

      <section>
        <h2>Wat u vooraf nodig heeft, ongeacht de route</h2>
        <p>
          Elke route vereist dezelfde kernzaken: een geldig paspoort, het ingevulde
          EX-15-formulier en gedocumenteerd bewijs van waarom u de NIE nodig heeft (een
          reserveringscontract voor een woning, een functieaanbod of vergelijkbaar). Zie
          onze volledige{' '}
          <Link href={articleHref('nie-number-documents', 'nl')}>
            NIE-documentenlijst
          </Link>{' '}
          voordat u iets boekt, zodat u niet wordt afgewezen door een ontbrekend
          document.
        </p>
      </section>

      <section>
        <h2>Als u kiest voor de volmacht-route</h2>
        <p>
          U ondertekent een volmacht (persoonlijk bij een notaris, of op afstand
          afhankelijk van uw land), stuurt kopieën van uw documenten, en uw jurist
          regelt de afspraak en indiening. Zo werkt de service van Espallo: geen gejaag
          op een cita previa, geen reis in te plannen rond een afspraak bij de overheid.
        </p>
      </section>
    </>
  ),
  faqHeading: 'Veelgestelde vragen',
  faq: [
    {
      question: 'Welke aanvraagroute is het snelst?',
      answer:
        'Dat hangt af van de actuele beschikbaarheid van afspraken, niet van de route zelf. Een vertegenwoordiger met bestaande toegang tot afspraken is vaak sneller dan zelf helemaal opnieuw boeken.',
    },
    {
      question: 'Kan ik van route wisselen als mijn eerste keuze niet werkt?',
      answer:
        'Ja — zitten consulaatafspraken in uw land maandenlang vol, dan is overstappen naar een volmacht-aanvraag een gangbare en eenvoudige oplossing.',
    },
    {
      question: 'Heb ik een Spaanse bankrekening nodig voordat ik aanvraag?',
      answer:
        'Nee. Een NIE nummer is meestal een vereiste om een Spaanse bankrekening te openen, niet andersom.',
    },
    {
      question: 'Verschilt de aanvraag bij woningaankoop en werk?',
      answer:
        'De eigenlijke NIE-aanvraag is hetzelfde; alleen het bewijsdocument voor de reden van aanvraag verandert.',
    },
  ],
  ctaHeading: 'Klaar om aan te vragen?',
  ctaText:
    'Espallo vraagt uw NIE nummer aan via onze samenwerkende juristen in Spanje — zonder afspraak of reis van uw kant.',
  ctaButton: 'Start uw NIE-aanvraag',
  disclaimer:
    'Espallo is een administratieve dienstverlener, geen advocatenkantoor. Wij geven geen juridisch advies; de samenwerkende juristen en notarissen in Spanje hebben een directe cliëntrelatie met u.',
}

export default content
