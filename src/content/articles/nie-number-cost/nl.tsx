import Link from 'next/link'
import { articleHref } from '@/lib/articles/href'
import type { ArticleContent } from '../types'

const content: ArticleContent = {
  title: 'Wat Kost Een NIE Nummer In Spanje?',
  description:
    'Het verschil tussen de officiële overheidsvergoeding voor een NIE nummer en de prijs van een service die de volledige aanvraag voor u regelt.',
  breadcrumbHome: 'Home',
  breadcrumbLabel: 'NIE Nummer Kosten',
  h1: 'Wat Kost Een NIE Nummer In Spanje?',
  updatedLabel: 'Laatst bijgewerkt',
  lastUpdated: '2026-08-12',
  intro: (
    <p>
      Er zijn twee verschillende kosten die mensen bedoelen als ze naar de NIE-prijs
      vragen, en juist het door elkaar halen daarvan zorgt voor verwarring: de kleine
      officiële overheidsvergoeding, en de (optionele) kosten om iemand de aanvraag
      voor u te laten regelen.
    </p>
  ),
  body: (
    <>
      <section>
        <h2>De officiële overheidsvergoeding</h2>
        <p>
          Voor een NIE-aanvraag betaalt u een vaste administratieve heffing, Modelo
          790 código 012, rechtstreeks aan de Spaanse belastingdienst (Agencia
          Tributaria) — een bescheiden, door de overheid vastgesteld bedrag, los van
          woningwaarde, inkomen of nationaliteit. Deze vergoeding verandert niet
          naargelang u zelf aanvraagt of via een vertegenwoordiger; u betaalt hem
          hoe dan ook.
        </p>
      </section>

      <section>
        <h2>Waarvoor een service als Espallo daadwerkelijk kosten in rekening brengt</h2>
        <p>
          De vergoeding die u aan een service betaalt, is niet voor de NIE zelf — het
          is voor het werk om de afspraak te regelen, het EX-15 correct voor te
          bereiden, namens u in te dienen, en zelf niet te hoeven reizen. Espallo
          rekent één vaste prijs van 215 EUR per aanvraag, die het volledige proces
          van begin tot eind dekt — ook wanneer u nooit naar Spanje hoeft te reizen.
        </p>
      </section>

      <section>
        <h2>Is het de moeite waard om voor hulp te betalen?</h2>
        <p>
          Bent u al in Spanje, vertrouwd met de Spaanse bureaucratie, en krijgt u
          gemakkelijk een cita previa, dan kost het zelf doen alleen de
          overheidsvergoeding. Bent u in het buitenland, heeft u een strakke planning
          (bijvoorbeeld een opleveringsdatum van een woning), of is een aanvraag al
          eens afgewezen, dan is de tijdswinst van niet opnieuw hoeven boeken of
          indienen meestal waar mensen eigenlijk voor betalen. Bekijk onze{' '}
          <Link href={articleHref('how-to-get-nie-number', 'nl')}>
            stap-voor-stap gids
          </Link>{' '}
          om te bepalen hoeveel van het proces u zelf comfortabel kunt afhandelen.
        </p>
      </section>
    </>
  ),
  faqHeading: 'Veelgestelde vragen',
  faq: [
    {
      question: 'Betaal ik de overheidsvergoeding ook als ik een service gebruik?',
      answer:
        'Ja. De vergoeding Modelo 790 código 012 wordt aan de Spaanse belastingdienst betaald, ongeacht wie uw aanvraag indient — dit staat los van een eventuele servicekost.',
    },
    {
      question: 'Kost de NIE meer voor woningkopers dan voor andere aanvragers?',
      answer:
        'Nee, de overheidsvergoeding is hetzelfde ongeacht de reden van uw aanvraag.',
    },
    {
      question: 'Zijn er verborgen kosten in het aanvraagproces?',
      answer:
        'De belangrijkste extra kostenpost is documentvoorbereiding — beëdigde vertalingen of apostilles, als uw documenten dat vereisen, waarvan de prijs per aanbieder varieert.',
    },
    {
      question: 'Wat is inbegrepen in de vaste prijs van Espallo?',
      answer:
        'Het volledige aanvraagproces: formuliervoorbereiding, afsprakenbeheer, indiening en opvolging tot uw NIE-certificaat is afgegeven — geen aparte kosten per stap.',
    },
  ],
  ctaHeading: 'Ken de prijs vooraf',
  ctaText:
    'Espallo rekent één vaste prijs van 215 EUR voor de volledige NIE-aanvraag — geen uurtarief, geen verrassende kosten.',
  ctaButton: 'Vraag uw NIE nummer aan',
  disclaimer:
    'Espallo is een administratieve dienstverlener, geen advocatenkantoor. Wij geven geen juridisch advies; de samenwerkende juristen en notarissen in Spanje hebben een directe cliëntrelatie met u.',
}

export default content
