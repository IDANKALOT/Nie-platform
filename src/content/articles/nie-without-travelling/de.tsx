import Link from 'next/link'
import { articleHref } from '@/lib/articles/href'
import type { ArticleContent } from '../types'

const content: ArticleContent = {
  title: 'Kann man eine NIE Nummer ohne Reise nach Spanien bekommen?',
  description:
    'Ja — so funktioniert eine NIE-Beantragung per Vollmacht genau, was sie an Vertrauen und Papierkram kostet, und wann sie sinnvoller ist als eine Reise.',
  breadcrumbHome: 'Startseite',
  breadcrumbLabel: 'NIE ohne Reise',
  h1: 'Kann man eine NIE Nummer ohne Reise nach Spanien bekommen?',
  updatedLabel: 'Zuletzt aktualisiert',
  lastUpdated: '2026-08-12',
  intro: (
    <p>
      Ja. Sie müssen weder physisch in Spanien noch bei einem spanischen Konsulat
      anwesend sein, um eine NIE Nummer zu erhalten — ein spanischer Anwalt kann den
      Antrag mit einer Vollmacht für Sie stellen. Diesen Weg nutzen Menschen, die aus
      der Ferne eine Immobilie kaufen, kein spanisches Konsulat in der Nähe haben, oder
      schlicht keine Zeit für die Reise aufbringen können.
    </p>
  ),
  body: (
    <>
      <section>
        <h2>Wie der Vollmacht-Weg tatsächlich funktioniert</h2>
        <p>
          Sie bevollmächtigen schriftlich einen spanischen Anwalt, das Formular EX-15
          einzureichen und das NIE-Zertifikat für Sie abzuholen. In den meisten Fällen
          kann die Vollmacht aus der Ferne unterschrieben und beglaubigt werden (etwa
          bei einem Notar in Ihrem Heimatland, das Dokument wird anschließend für die
          Verwendung in Spanien legalisiert) — der gesamte Prozess, vom Unterschreiben
          über das Sammeln der Unterlagen bis zur Einreichung und dem Erhalt Ihres
          Zertifikats, kann also ohne einen Flug erfolgen.
        </p>
      </section>

      <section>
        <h2>Was dieser Weg ist — und was nicht</h2>
        <p>
          Es ist keine Abkürzung um das offizielle Verfahren herum — dasselbe Formular
          EX-15, dieselben Unterlagen und dieselbe staatliche Gebühr gelten weiterhin.
          Was sich ändert, ist, wer physisch zum Termin erscheint: Ihr Vertreter, nicht
          Sie. Unsere{' '}
          <Link href={articleHref('nie-number-documents', 'de')}>
            Dokumenten-Checkliste
          </Link>{' '}
          zeigt genau, was Sie einsenden müssen.
        </p>
      </section>

      <section>
        <h2>Wann es sinnvoller ist als eine Reise</h2>
        <p>
          Haben Sie bereits eine Reise nach Spanien geplant, kann die persönliche
          Beantragung genauso schnell sein. Der Vollmacht-Weg ist besonders sinnvoll,
          wenn Sie unter Zeitdruck stehen (etwa wegen eines Immobilien-Übergabetermins),
          aber nicht rechtzeitig reisen, wenn Ihr nächstgelegenes Konsulat lange
          Wartezeiten hat, oder wenn Sie einen Reisetag schlicht nicht in einer Behörde
          verbringen möchten.
        </p>
      </section>
    </>
  ),
  faqHeading: 'Häufig gestellte Fragen',
  faq: [
    {
      question: 'Ist eine Fernantragstellung für die NIE rechtlich gültig?',
      answer:
        'Ja — die Vollmacht ist ein standardisiertes, rechtlich anerkanntes Instrument in Spanien, das weit über NIE-Anträge hinaus verwendet wird, etwa bei Immobilienkäufen oder Firmengründungen.',
    },
    {
      question: 'Muss ich einen Notar in meinem eigenen Land aufsuchen?',
      answer:
        'In der Regel ja, um die Vollmacht zu unterschreiben und beglaubigen zu lassen, wobei die genaue Anforderung von Ihrem Land und einem eventuellen Legalisierungsabkommen (etwa einer Apostille) mit Spanien abhängt.',
    },
    {
      question: 'Woher weiß ich, dass mein Anwalt den Antrag tatsächlich eingereicht hat?',
      answer:
        'Ein seriöser Service bestätigt jeden Schritt und übergibt Ihr NIE-Zertifikat nach Ausstellung — fragen Sie aktiv nach Statusupdates, falls Sie diese nicht von selbst erhalten.',
    },
    {
      question: 'Kann ich trotz Fernantrag später noch nach Spanien reisen?',
      answer:
        'Ja, die NIE Nummer ist unabhängig davon gültig, wie sie beantragt wurde, und schränkt zukünftige Reisen oder Anträge in keiner Weise ein.',
    },
  ],
  ctaHeading: 'Ihre NIE ohne Reise erhalten',
  ctaText:
    'Espallo übernimmt den gesamten NIE-Antrag aus der Ferne über unsere Partneranwälte in Spanien — kein Flug, kein Termin hinterherzujagen.',
  ctaButton: 'Fernantrag jetzt starten',
  disclaimer:
    'Espallo ist ein administrativer Dienstleister, kein Anwaltsbüro. Wir erteilen keine Rechtsberatung; die kooperierenden Anwälte und Notare in Spanien stehen in direktem Mandatsverhältnis zu Ihnen als Mandant.',
}

export default content
