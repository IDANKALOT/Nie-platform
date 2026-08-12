import Link from 'next/link'
import { articleHref } from '@/lib/articles/href'
import type { ArticleContent } from '../types'

const content: ArticleContent = {
  title: 'Zo Krijgt U Een NIE-Afspraak In Spanje',
  description:
    'Hoe het boekingssysteem cita previa voor NIE-afspraken echt werkt, waarom afspraken zo moeilijk te vinden zijn, en praktische tips om er een te krijgen.',
  breadcrumbHome: 'Home',
  breadcrumbLabel: 'NIE Afspraak',
  h1: 'Zo Krijgt U Een NIE-Afspraak In Spanje',
  updatedLabel: 'Laatst bijgewerkt',
  lastUpdated: '2026-08-12',
  intro: (
    <p>
      Het systeem <em>cita previa</em> (voorafgaande afspraak) is verreweg het meest
      voorkomende obstakel in het hele NIE-proces — meer dan het papierwerk, meer dan
      het formulier zelf. Zo werkt het boekingssysteem, en dit helpt daadwerkelijk.
    </p>
  ),
  body: (
    <>
      <section>
        <h2>Hoe het boekingssysteem werkt</h2>
        <p>
          Afspraken worden geboekt via Spanje&apos;s officiële online systeem, gekoppeld
          aan een specifiek kantoor (de Oficina de Extranjería van een politiebureau,
          of een consulaat als u in het buitenland bent — zie onze pagina over{' '}
          <Link href={articleHref('nie-from-abroad', 'nl')}>
            aanvragen vanuit het buitenland
          </Link>
          ). U kiest een provincie en kantoor, dan een reden (NIE), en het systeem
          toont beschikbare plekken — als die er zijn.
        </p>
      </section>

      <section>
        <h2>Waarom plekken zo moeilijk te vinden zijn</h2>
        <p>
          De vraag bij populaire kantoren (grote steden, kustgebieden met veel
          buitenlandse woningkopers) overtreft regelmatig het aantal dagelijks
          vrijgegeven plekken. Er is geen wachtlijst en geen manier om vooraf meer te
          reserveren dan wat het systeem toont — afspraken komen vrij, vaak op een
          vast tijdstip van de dag, en zijn binnen minuten bezet.
        </p>
      </section>

      <section>
        <h2>Praktische tips</h2>
        <ul>
          <li>Controleer regelmatig in plaats van één keer — plekken komen vrij als anderen annuleren</li>
          <li>
            Sommige regio&apos;s of kleinere kantoren hebben kortere wachttijden dan de
            drukste provinciehoofdsteden
          </li>
          <li>
            Zorg dat uw documenten klaar zijn voordat u boekt, zodat u niet hoeft te
            verzetten als er iets ontbreekt
          </li>
          <li>
            Als de wachttijd niet past bij uw planning, neemt een vertegenwoordiger
            met bestaande toegang tot afspraken het probleem volledig weg
          </li>
        </ul>
      </section>
    </>
  ),
  faqHeading: 'Veelgestelde vragen',
  faq: [
    {
      question: 'Kan ik een NIE-afspraak boeken bij elk kantoor, niet alleen mijn lokale?',
      answer:
        'In Spanje kunt u over het algemeen bij elke Oficina de Extranjería met beschikbare plekken boeken, niet alleen de dichtstbijzijnde — sommige aanvragers boeken bij minder drukke kantoren in andere provincies.',
    },
    {
      question: 'Op welk tijdstip van de dag verschijnen nieuwe plekken meestal?',
      answer:
        'Dit verschilt per kantoor en verandert in de tijd; er is geen enkel betrouwbaar schema, wat mede verklaart waarom het systeem frustrerend is om te gebruiken.',
    },
    {
      question: 'Kan iemand anders de afspraak voor mij boeken?',
      answer:
        'Ja — een vertegenwoordiger kan namens u boeken en aanwezig zijn met een volmacht, zonder dat u zelf het boekingssysteem hoeft te gebruiken.',
    },
    {
      question: 'Wat gebeurt er als ik mijn afspraak mis?',
      answer:
        'U verliest de plek en moet opnieuw vanaf nul boeken — binnen het systeem zelf is doorgaans geen verzetten mogelijk.',
    },
  ],
  ctaHeading: 'Beu van het vernieuwen van de boekingspagina?',
  ctaText:
    'Espallo heeft al toegang tot afspraken via onze samenwerkende juristen in Spanje — geen vernieuwen, geen gemiste plekken.',
  ctaButton: 'Sla de zoektocht naar een afspraak over',
  disclaimer:
    'Espallo is een administratieve dienstverlener, geen advocatenkantoor. Wij geven geen juridisch advies; de samenwerkende juristen en notarissen in Spanje hebben een directe cliëntrelatie met u.',
}

export default content
