import Link from 'next/link'
import { articleHref } from '@/lib/articles/href'
import type { ArticleContent } from '../types'

const content: ArticleContent = {
  title: 'Zo Vraagt U Een NIE Nummer Aan Vanuit Het Buitenland',
  description:
    'Aanvragen bij een Spaans consulaat in uw eigen land: wat er anders is dan in Spanje, wat u kunt verwachten van het boekingssysteem, en wanneer een vertegenwoordiger logischer is.',
  breadcrumbHome: 'Home',
  breadcrumbLabel: 'NIE Vanuit Het Buitenland',
  h1: 'Zo Vraagt U Een NIE Nummer Aan Vanuit Het Buitenland',
  updatedLabel: 'Laatst bijgewerkt',
  lastUpdated: '2026-08-12',
  intro: (
    <p>
      Plant u geen reis naar Spanje, dan is aanvragen via uw lokale Spaanse consulaat
      de directe overheidsroute. Dezelfde regels gelden als bij een aanvraag in
      Spanje, maar de praktische ervaring — boeken, documenten, ophalen — verschilt
      genoeg dat het de moeite waard is te weten wat u kunt verwachten voordat u
      begint. (Wilt u het consulaat liever helemaal overslaan, bekijk dan onze pagina
      over{' '}
      <Link href={articleHref('nie-without-travelling', 'nl')}>
        een NIE krijgen zonder te reizen
      </Link>
      , via volmacht.)
    </p>
  ),
  body: (
    <>
      <section>
        <h2>Afsprakensystemen van consulaten verschillen per land</h2>
        <p>
          Elk Spaans consulaat beheert zijn eigen agenda, en de vraag verschilt
          enorm — sommige consulaten bieden binnen enkele weken afspraken aan, andere
          zitten maandenlang vol, vooral in landen met veel expats of woningkopers. Er
          is geen manier om te boeken bij een ander consulaat dan het consulaat dat uw
          woonplaats dekt.
        </p>
      </section>

      <section>
        <h2>Wat vaak anders is dan aanvragen in Spanje</h2>
        <p>
          Consulaten vereisen vaker beëdigde vertalingen van bewijsdocumenten,
          aangezien de onderliggende papieren (een functieaanbod, een
          woningcontract) vaak buiten Spanje zijn uitgegeven. Sommige consulaten
          versturen het NIE-certificaat ook per post in plaats van het bij de afspraak
          te overhandigen, wat extra tijd kost waar u rekening mee moet houden.
          Controleer de eisen van uw specifieke consulaat rechtstreeks, aangezien deze
          niet uniform zijn per land.
        </p>
      </section>

      <section>
        <h2>Als de wachttijd te lang is</h2>
        <p>
          Wanneer de agenda van uw dichtstbijzijnde consulaat verder volzit dan uw
          planning toelaat, is het praktische alternatief aanvragen via volmacht door
          een in Spanje gevestigde vertegenwoordiger, die in plaats daarvan bij een
          politiebureau in Spanje namens u aanvraagt. Zo werkt de service van
          Espallo — geen consulaatsafspraak nodig.
        </p>
      </section>
    </>
  ),
  faqHeading: 'Veelgestelde vragen',
  faq: [
    {
      question: 'Kan ik bij elk Spaans consulaat aanvragen, of alleen het dichtstbijzijnde?',
      answer:
        'Alleen het consulaat dat uw geregistreerde woonplaats dekt — u kunt niet bij een consulaat in een ander rechtsgebied boeken voor een kortere wachttijd.',
    },
    {
      question: 'Kost aanvragen bij het consulaat meer dan in Spanje?',
      answer:
        'De overheidsvergoeding is in beide gevallen gelijk; de enige waarschijnlijke extra kosten zijn vertalingen van documenten, als uw consulaat dit vereist.',
    },
    {
      question: 'Hoe ontvang ik mijn NIE-certificaat als ik bij het consulaat aanvraag?',
      answer:
        'Dit verschilt per consulaat — sommige overhandigen het bij een vervolgafspraak, andere versturen het per post. Bevestig het proces bij het boeken.',
    },
    {
      question: 'Gaat het sneller met een vertegenwoordiger in Spanje dan mijn lokale consulaat?',
      answer:
        'Vaak wel, als uw consulaat lange wachttijden heeft, omdat een vertegenwoordiger rechtstreeks bij een Spaans politiebureau aanvraagt in plaats van te wachten op een consulaatsafspraak.',
    },
  ],
  ctaHeading: 'Wachttijd bij het consulaat te lang?',
  ctaText:
    'Espallo vraagt uw NIE nummer in Spanje aan via volmacht — geen consulaatsafspraak nodig, waar u ook bent.',
  ctaButton: 'Sla de consulaatswachttijd over',
  disclaimer:
    'Espallo is een administratieve dienstverlener, geen advocatenkantoor. Wij geven geen juridisch advies; de samenwerkende juristen en notarissen in Spanje hebben een directe cliëntrelatie met u.',
}

export default content
