import Link from 'next/link'
import { articleHref } from '@/lib/articles/href'
import type { ArticleContent } from '../types'

const content: ArticleContent = {
  title: 'Wie bekommt man einen NIE-Termin in Spanien?',
  description:
    'Wie das cita-previa-Buchungssystem für NIE-Termine tatsächlich funktioniert, warum Termine so schwer zu finden sind, und praktische Tipps, um einen zu bekommen.',
  breadcrumbHome: 'Startseite',
  breadcrumbLabel: 'NIE Termin',
  h1: 'Wie bekommt man einen NIE-Termin in Spanien?',
  updatedLabel: 'Zuletzt aktualisiert',
  lastUpdated: '2026-08-12',
  intro: (
    <p>
      Das <em>cita-previa</em>-System (Terminvergabe) ist das mit Abstand häufigste
      Hindernis im gesamten NIE-Prozess — mehr als der Papierkram, mehr als das
      Formular selbst. So funktioniert das Buchungssystem, und das hilft tatsächlich.
    </p>
  ),
  body: (
    <>
      <section>
        <h2>Wie das Buchungssystem funktioniert</h2>
        <p>
          Termine werden über Spaniens offizielles Online-System gebucht, gebunden an
          eine bestimmte Dienststelle (die Oficina de Extranjería einer
          Polizeidienststelle, oder ein Konsulat, wenn Sie im Ausland sind — siehe
          unsere Seite zur{' '}
          <Link href={articleHref('nie-from-abroad', 'de')}>
            Beantragung aus dem Ausland
          </Link>
          ). Sie wählen eine Provinz und Dienststelle, dann einen Zweck (NIE), und das
          System zeigt verfügbare Termine an — sofern es welche gibt.
        </p>
      </section>

      <section>
        <h2>Warum Termine so schwer zu finden sind</h2>
        <p>
          Die Nachfrage bei beliebten Dienststellen (Großstädte, Küstenregionen mit
          vielen ausländischen Immobilienkäufern) übersteigt regelmäßig die Anzahl der
          täglich freigegebenen Termine. Es gibt keine Warteliste und keine Möglichkeit,
          über das im System Angezeigte hinaus im Voraus zu reservieren — Termine werden
          freigegeben, oft zu einer festen Tageszeit, und sind innerhalb von Minuten
          vergeben.
        </p>
      </section>

      <section>
        <h2>Praktische Tipps</h2>
        <ul>
          <li>Regelmäßig statt nur einmal prüfen — Termine werden frei, wenn andere stornieren</li>
          <li>
            Manche Regionen oder kleinere Dienststellen haben kürzere Wartezeiten als
            die stark frequentierten Provinzhauptstädte
          </li>
          <li>
            Halten Sie Ihre Unterlagen bereit, bevor Sie buchen, damit Sie nicht
            umbuchen müssen, falls etwas fehlt
          </li>
          <li>
            Ist die Wartezeit mit Ihrem Zeitplan nicht vereinbar, beseitigt ein
            Vertreter mit bestehendem Terminzugang das Problem vollständig
          </li>
        </ul>
      </section>
    </>
  ),
  faqHeading: 'Häufig gestellte Fragen',
  faq: [
    {
      question: 'Kann ich einen NIE-Termin bei jeder Dienststelle buchen, nicht nur meiner örtlichen?',
      answer:
        'In Spanien können Sie in der Regel bei jeder Oficina de Extranjería mit verfügbaren Terminen buchen, nicht nur bei der nächstgelegenen — manche Antragsteller buchen bei weniger stark frequentierten Dienststellen in anderen Provinzen.',
    },
    {
      question: 'Zu welcher Tageszeit erscheinen neue Termine normalerweise?',
      answer:
        'Das variiert je nach Dienststelle und ändert sich mit der Zeit; es gibt keinen einzelnen verlässlichen Zeitplan, was mit ein Grund ist, warum das System frustrierend zu nutzen ist.',
    },
    {
      question: 'Kann jemand anderes den Termin für mich buchen?',
      answer:
        'Ja — ein Vertreter kann mit einer Vollmacht für Sie buchen und erscheinen, ohne dass Sie selbst das Buchungssystem nutzen müssen.',
    },
    {
      question: 'Was passiert, wenn ich meinen Termin verpasse?',
      answer:
        'Sie verlieren den Termin und müssen von Grund auf neu buchen — eine Umbuchung innerhalb des Systems selbst ist in der Regel nicht möglich.',
    },
  ],
  ctaHeading: 'Genug vom ständigen Aktualisieren der Buchungsseite?',
  ctaText:
    'Espallo hat bereits Terminzugang über unsere Partneranwälte in Spanien — kein Aktualisieren, keine verpassten Termine.',
  ctaButton: 'Terminsuche überspringen',
  disclaimer:
    'Espallo ist ein administrativer Dienstleister, kein Anwaltsbüro. Wir erteilen keine Rechtsberatung; die kooperierenden Anwälte und Notare in Spanien stehen in direktem Mandatsverhältnis zu Ihnen als Mandant.',
}

export default content
