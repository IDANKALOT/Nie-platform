import Link from 'next/link'
import { articleHref } from '@/lib/articles/href'
import type { ArticleContent } from '../types'

const content: ArticleContent = {
  title: 'Hoe Lang Duurt Het Om Een NIE Nummer Te Krijgen?',
  description:
    'Wat de verwerkingstijd van een NIE nummer echt bepaalt — beschikbaarheid van afspraken, niet papierwerk — en hoe u plant als u een deadline heeft.',
  breadcrumbHome: 'Home',
  breadcrumbLabel: 'NIE Verwerkingstijd',
  h1: 'Hoe Lang Duurt Het Om Een NIE Nummer Te Krijgen?',
  updatedLabel: 'Laatst bijgewerkt',
  lastUpdated: '2026-08-12',
  intro: (
    <p>
      Er bestaat geen vaste verwerkingstijd voor een NIE nummer, want het papierwerk
      zelf gaat snel — wat enorm varieert, is hoe lang het duurt om überhaupt een
      afspraak te krijgen. Iedereen die u een exact aantal dagen noemt zonder uw
      locatie en route te kennen, gokt gewoon.
    </p>
  ),
  body: (
    <>
      <section>
        <h2>Wat de tijdlijn echt bepaalt</h2>
        <p>
          Zodra u met de juiste documenten voor een ambtenaar zit, wordt de NIE meestal
          dezelfde dag of binnen een paar dagen afgegeven. De echte variabele is de
          wachttijd tot die afspraak: drukke politiebureaus en consulaten kunnen van
          een paar dagen tot enkele maanden volzitten, afhankelijk van locatie en
          seizoen. Zie onze{' '}
          <Link href={articleHref('how-to-get-nie-number', 'nl')}>
            stap-voor-stap gids
          </Link>{' '}
          voor waar in het proces dit knelpunt precies zit.
        </p>
      </section>

      <section>
        <h2>Wat het versnelt, en wat het vertraagt</h2>
        <p>
          Correcte, volledige documenten bij de eerste poging voorkomen de grootste
          vertraging: opnieuw moeten boeken na een afwijzing. Een vertegenwoordiger
          met bestaande toegang tot afspraken — in plaats van zelf koud te boeken —
          is meestal sneller dan het helemaal zelf proberen. Hoogseizoen voor
          woningaankopen en emigratie (voorjaar en vroege herfst in veel gebieden)
          betekent meestal langere wachttijden bij populaire kantoren.
        </p>
      </section>

      <section>
        <h2>Als u een harde deadline heeft</h2>
        <p>
          Werkt u naar een vaste datum toe — een opleveringsdatum van een woning, een
          startdatum van een baan — wacht dan niet af of er vanzelf een plek vrijkomt.
          Start het proces zo vroeg mogelijk, en overweeg een vertegenwoordiger met
          bestaande toegang tot afspraken als manier om de grootste onzekerheid uit uw
          planning te halen.
        </p>
      </section>
    </>
  ),
  faqHeading: 'Veelgestelde vragen',
  faq: [
    {
      question: 'Kan ik extra betalen om mijn NIE sneller te krijgen?',
      answer:
        'Er bestaat geen officiële spoedservice. Snelheid komt voort uit toegang tot afspraken en documenten die de eerste keer correct zijn, niet uit een extra vergoeding.',
    },
    {
      question: 'Versnelt aanvragen via volmacht het proces?',
      answer:
        'Dat kan, vooral omdat een vertegenwoordiger mogelijk al toegang heeft tot afspraken die u zelf pas na weken zou vinden.',
    },
    {
      question: 'Wat is de belangrijkste oorzaak van vertraging?',
      answer:
        'Beschikbaarheid van afspraken, met grote afstand — niet het papierwerk zelf, dat snel wordt verwerkt zodra het correct is ingediend.',
    },
    {
      question: 'Is de verwerking trager voor bepaalde nationaliteiten?',
      answer:
        'Nee, het proces en de gebruikelijke tijdlijn zijn hetzelfde ongeacht nationaliteit.',
    },
  ],
  ctaHeading: 'Heeft u een deadline?',
  ctaText:
    'Espallo vraagt uw NIE nummer aan met onze bestaande toegang tot afspraken, zodat u niet vastzit te wachten tot er een plek vrijkomt.',
  ctaButton: 'Start nu uw NIE-aanvraag',
  disclaimer:
    'Espallo is een administratieve dienstverlener, geen advocatenkantoor. Wij geven geen juridisch advies; de samenwerkende juristen en notarissen in Spanje hebben een directe cliëntrelatie met u.',
}

export default content
