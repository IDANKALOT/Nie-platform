import Link from 'next/link'
import { articleHref } from '@/lib/articles/href'
import type { ArticleContent } from '../types'

const content: ArticleContent = {
  title: 'Wie lange dauert es, eine NIE Nummer zu bekommen?',
  description:
    'Was die Bearbeitungszeit der NIE tatsächlich bestimmt — Terminverfügbarkeit, nicht Papierkram — und wie Sie planen, wenn Sie eine Frist haben.',
  breadcrumbHome: 'Startseite',
  breadcrumbLabel: 'NIE Bearbeitungszeit',
  h1: 'Wie lange dauert es, eine NIE Nummer zu bekommen?',
  updatedLabel: 'Zuletzt aktualisiert',
  lastUpdated: '2026-08-12',
  intro: (
    <p>
      Es gibt keine feste Bearbeitungszeit für eine NIE Nummer, denn der Papierkram
      selbst geht schnell — was stark variiert, ist, wie lange es dauert, überhaupt
      einen Termin zu bekommen. Wer Ihnen eine genaue Anzahl von Tagen nennt, ohne
      Ihren Standort und Weg zu kennen, rät nur.
    </p>
  ),
  body: (
    <>
      <section>
        <h2>Was den Zeitplan tatsächlich bestimmt</h2>
        <p>
          Sitzen Sie erst einmal mit den richtigen Unterlagen vor einem Beamten, wird
          die NIE meist noch am selben Tag oder innerhalb weniger Tage ausgestellt.
          Die eigentliche Variable ist die Wartezeit bis zu diesem Termin: stark
          frequentierte Polizeidienststellen und Konsulate können je nach Standort und
          Saison von wenigen Tagen bis zu mehreren Monaten ausgebucht sein. Unser{' '}
          <Link href={articleHref('how-to-get-nie-number', 'de')}>
            Schritt-für-Schritt-Leitfaden
          </Link>{' '}
          zeigt, wo genau im Prozess dieser Engpass liegt.
        </p>
      </section>

      <section>
        <h2>Was es beschleunigt, und was es verlangsamt</h2>
        <p>
          Korrekte, vollständige Unterlagen beim ersten Versuch vermeiden die größte
          Verzögerung: einen neuen Termin nach einer Ablehnung buchen zu müssen. Ein
          Vertreter mit bestehendem Terminzugang — statt kalt selbst zu buchen — ist in
          der Regel schneller, als es von Grund auf selbst zu versuchen. In der
          Hochsaison für Immobilienkäufe und Auswanderung (in vielen Regionen Frühling
          und früher Herbst) sind die Wartezeiten bei beliebten Dienststellen tendenziell
          länger.
        </p>
      </section>

      <section>
        <h2>Wenn Sie eine feste Frist haben</h2>
        <p>
          Arbeiten Sie auf ein festes Datum hin — einen Immobilien-Übergabetermin,
          einen Arbeitsbeginn — warten Sie nicht ab, ob sich zufällig ein Termin
          ergibt. Beginnen Sie den Prozess so früh wie möglich, und erwägen Sie einen
          Vertreter mit bestehendem Terminzugang, um die größte Unsicherheit aus Ihrem
          Zeitplan zu nehmen.
        </p>
      </section>
    </>
  ),
  faqHeading: 'Häufig gestellte Fragen',
  faq: [
    {
      question: 'Kann ich extra bezahlen, um meine NIE schneller zu bekommen?',
      answer:
        'Es gibt keinen offiziellen Express-Service. Geschwindigkeit ergibt sich aus Terminzugang und korrekten Unterlagen beim ersten Versuch, nicht aus einer Zusatzgebühr.',
    },
    {
      question: 'Beschleunigt die Beantragung per Vollmacht den Prozess?',
      answer:
        'Das kann sie, hauptsächlich weil ein Vertreter möglicherweise bereits Terminzugang hat, den Sie selbst erst nach Wochen finden würden.',
    },
    {
      question: 'Was ist die häufigste Ursache für Verzögerungen?',
      answer:
        'Mit weitem Abstand die Terminverfügbarkeit — nicht der Papierkram selbst, der bei korrekter Einreichung schnell bearbeitet wird.',
    },
    {
      question: 'Ist die Bearbeitung für bestimmte Nationalitäten langsamer?',
      answer:
        'Nein, der Prozess und die typische Dauer sind unabhängig von der Staatsangehörigkeit gleich.',
    },
  ],
  ctaHeading: 'Haben Sie eine Frist?',
  ctaText:
    'Espallo beantragt Ihre NIE Nummer über unseren bestehenden Terminzugang, damit Sie nicht auf einen freien Slot warten müssen.',
  ctaButton: 'NIE-Antrag jetzt starten',
  disclaimer:
    'Espallo ist ein administrativer Dienstleister, kein Anwaltsbüro. Wir erteilen keine Rechtsberatung; die kooperierenden Anwälte und Notare in Spanien stehen in direktem Mandatsverhältnis zu Ihnen als Mandant.',
}

export default content
