import Link from 'next/link'
import { articleHref } from '@/lib/articles/href'
import type { ArticleContent } from '../types'

const content: ArticleContent = {
  title: 'Was kostet eine NIE Nummer in Spanien?',
  description:
    'Der Unterschied zwischen der offiziellen Verwaltungsgebühr für die NIE Nummer und den Kosten für einen Service, der den gesamten Antrag für Sie übernimmt.',
  breadcrumbHome: 'Startseite',
  breadcrumbLabel: 'NIE Nummer Kosten',
  h1: 'Was kostet eine NIE Nummer in Spanien?',
  updatedLabel: 'Zuletzt aktualisiert',
  lastUpdated: '2026-08-12',
  intro: (
    <p>
      Wenn Menschen nach den Kosten der NIE fragen, meinen sie meist zwei
      unterschiedliche Dinge, und genau diese Vermischung sorgt für Verwirrung: die
      kleine offizielle Verwaltungsgebühr, und die (optionalen) Kosten dafür, jemanden
      mit der Antragstellung zu beauftragen.
    </p>
  ),
  body: (
    <>
      <section>
        <h2>Die offizielle Verwaltungsgebühr</h2>
        <p>
          Die Beantragung einer NIE erfordert die Zahlung einer festen
          Verwaltungsabgabe, Modelo 790 código 012, direkt an die spanische
          Finanzbehörde (Agencia Tributaria) — ein moderater, staatlich festgelegter
          Betrag, unabhängig von Immobilienwert, Einkommen oder Staatsangehörigkeit.
          Diese Gebühr ändert sich nicht danach, ob Sie selbst oder über einen
          Vertreter beantragen; sie fällt in jedem Fall an.
        </p>
      </section>

      <section>
        <h2>Wofür ein Service wie Espallo tatsächlich berechnet</h2>
        <p>
          Die Gebühr, die Sie einem Service zahlen, ist nicht für die NIE selbst —
          sondern für die Arbeit, einen Termin zu bekommen, das EX-15 korrekt
          vorzubereiten, die Einreichung für Sie zu übernehmen, und nicht dafür reisen
          zu müssen. Espallo berechnet einen einzigen Festpreis von 215 EUR pro
          Antrag, der den gesamten Prozess von Anfang bis Ende abdeckt — auch Fälle,
          in denen Sie nie nach Spanien reisen müssen.
        </p>
      </section>

      <section>
        <h2>Lohnt sich Hilfe?</h2>
        <p>
          Sind Sie bereits in Spanien, vertraut mit der spanischen Bürokratie, und
          kommen leicht an eine cita previa, kostet die Eigenbeantragung nur die
          Verwaltungsgebühr. Sind Sie im Ausland, unter Zeitdruck (etwa wegen eines
          Übergabetermins für eine Immobilie), oder wurde ein Antrag bereits einmal
          abgelehnt, ist die ersparte Zeit durch nicht erneut buchen oder einreichen zu
          müssen meist das, wofür Sie eigentlich zahlen. Unser{' '}
          <Link href={articleHref('how-to-get-nie-number', 'de')}>
            Schritt-für-Schritt-Leitfaden
          </Link>{' '}
          hilft Ihnen einzuschätzen, wie viel davon Sie selbst erledigen möchten.
        </p>
      </section>
    </>
  ),
  faqHeading: 'Häufig gestellte Fragen',
  faq: [
    {
      question: 'Zahle ich die Verwaltungsgebühr auch bei Nutzung eines Service?',
      answer:
        'Ja. Die Gebühr Modelo 790 código 012 wird unabhängig davon, wer den Antrag einreicht, an die spanische Finanzbehörde gezahlt — sie ist von einer eventuellen Servicegebühr getrennt.',
    },
    {
      question: 'Kostet die NIE für Immobilienkäufer mehr als für andere Antragsteller?',
      answer:
        'Nein, die Verwaltungsgebühr ist unabhängig vom Grund der Beantragung gleich.',
    },
    {
      question: 'Gibt es versteckte Kosten im Antragsprozess?',
      answer:
        'Der wichtigste zusätzliche Posten ist die Dokumentenvorbereitung — beglaubigte Übersetzungen oder Apostillen, falls Ihre Unterlagen dies erfordern; die Preise dafür variieren je nach Anbieter.',
    },
    {
      question: 'Was ist im Festpreis von Espallo enthalten?',
      answer:
        'Der gesamte Antragsprozess: Formularvorbereitung, Terminmanagement, Einreichung und Nachverfolgung bis zur Ausstellung Ihres NIE-Zertifikats — keine separaten Gebühren pro Schritt.',
    },
  ],
  ctaHeading: 'Kennen Sie den Preis im Voraus',
  ctaText:
    'Espallo berechnet einen Festpreis von 215 EUR für den gesamten NIE-Antrag — keine Stundenabrechnung, keine versteckten Gebühren.',
  ctaButton: 'NIE Nummer jetzt beantragen',
  disclaimer:
    'Espallo ist ein administrativer Dienstleister, kein Anwaltsbüro. Wir erteilen keine Rechtsberatung; die kooperierenden Anwälte und Notare in Spanien stehen in direktem Mandatsverhältnis zu Ihnen als Mandant.',
}

export default content
