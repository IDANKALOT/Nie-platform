import Link from 'next/link'
import { articleHref } from '@/lib/articles/href'
import type { ArticleContent } from '../types'

const content: ArticleContent = {
  title: 'Wie bekommt man eine NIE Nummer in Spanien: Schritt für Schritt',
  description:
    'Die genauen Schritte zur spanischen NIE Nummer — von der Terminbuchung bis zum Zertifikat — und die Fehler, die den meisten Antragstellern Monate kosten.',
  breadcrumbHome: 'Startseite',
  breadcrumbLabel: 'Wie bekommt man eine NIE Nummer',
  h1: 'Wie bekommt man eine NIE Nummer in Spanien?',
  updatedLabel: 'Zuletzt aktualisiert',
  lastUpdated: '2026-08-12',
  intro: (
    <p>
      Die Beantragung einer <strong>NIE Nummer</strong> folgt einem festen
      bürokratischen Ablauf — aber dieser Ablauf hat genug Schwachstellen
      (Terminverfügbarkeit, ein falsches Dokument, eine veraltete Formularversion), dass
      die meisten, die es selbst versuchen, mindestens einmal von vorn beginnen müssen.
      Hier ist der Prozess Schritt für Schritt, und wo er meistens scheitert.
    </p>
  ),
  body: (
    <>
      <section>
        <h2>Schritt 1: Entscheiden, wo Sie beantragen</h2>
        <p>
          Sie haben zwei Optionen: in Spanien bei der Oficina de Extranjería einer
          Polizeidienststelle beantragen, oder vorab beim spanischen Konsulat in Ihrem
          Heimatland. Wenn Sie bereits eine Reise nach Spanien gebucht haben, ist die
          Beantragung vor Ort meist schneller. Reisen Sie noch nicht — etwa weil Sie eine
          Immobilie aus der Ferne kaufen — bleiben nur der Konsulatsweg oder ein Antrag
          per Vollmacht (siehe unten).
        </p>
      </section>

      <section>
        <h2>Schritt 2: Cita previa buchen</h2>
        <p>
          Beide Wege erfordern eine <em>cita previa</em> (vorherigen Termin) über das
          Online-System der spanischen Regierung. Das ist der größte Engpass: Termine an
          stark frequentierten Dienststellen und Konsulaten sind oft wochen- oder
          monatelang ausgebucht, und es gibt keine Warteliste — man aktualisiert die
          Seite, bis ein Slot frei wird.
        </p>
      </section>

      <section>
        <h2>Schritt 3: Unterlagen zusammenstellen</h2>
        <p>Sie benötigen in der Regel:</p>
        <ul>
          <li>Einen gültigen Reisepass (plus Kopie)</li>
          <li>Das ausgefüllte Formular EX-15</li>
          <li>
            Einen Nachweis über den wirtschaftlichen, beruflichen oder sozialen Grund des
            Antrags — etwa einen unterschriebenen Reservierungsvertrag für eine
            Immobilie, ein Arbeitsangebot oder ein Schreiben zur Kontoeröffnung
          </li>
          <li>Den Zahlungsnachweis für die Gebühr Modelo 790, código 012</li>
        </ul>
      </section>

      <section>
        <h2>Schritt 4: Formular EX-15 ausfüllen und einreichen</h2>
        <p>
          Das EX-15 ist kurz, aber unnachsichtig — ein falsch angekreuztes Feld (etwa
          Aufenthalt vs. Nicht-Aufenthalt) oder eine Diskrepanz zwischen angegebenem
          Grund und Nachweisdokument ist eine häufige Ursache für abgelehnte Anträge. Eine
          Korrektur am selben Tag ist nicht möglich; Sie müssen neu buchen.
        </p>
      </section>

      <section>
        <h2>Schritt 5: Zum Termin erscheinen und Gebühr zahlen</h2>
        <p>
          Beim Termin prüft ein Beamter Ihre Unterlagen und bearbeitet den Antrag, wenn
          alles in Ordnung ist. Die Verwaltungsgebühr (Modelo 790, código 012) zahlen Sie
          je nach Dienststelle bei einer Bank oder online, vor oder beim Termin.
        </p>
      </section>

      <section>
        <h2>Schritt 6: NIE-Zertifikat erhalten</h2>
        <p>
          Nach der Genehmigung erhalten Sie das weiße A4-Zertifikat mit Ihrer Nummer.
          Manche Dienststellen stellen es sofort aus, andere brauchen einige Tage bis
          Wochen. Mehr dazu, was das Zertifikat genau ist, in unserem Beitrag{' '}
          <Link href={articleHref('what-is-an-nie-number', 'de')}>
            Was ist eine NIE Nummer?
          </Link>
        </p>
      </section>

      <section>
        <h2>Die Alternative: Beantragung über einen Vertreter</h2>
        <p>
          Sie können einen spanischen Anwalt per Vollmacht bevollmächtigen, den Antrag
          für Sie zu stellen — das erspart Ihnen Schritt 1 und 2 komplett: kein Termin zu
          buchen, keine Reise nötig. So funktioniert der{' '}
          <Link href={articleHref('nie-number-spain', 'de')}>NIE-Service von Espallo</Link>
          : Sie geben Ihre Daten und Unterlagen online ein, und unsere Partneranwälte
          übernehmen die Behördenschritte vor Ort.
        </p>
      </section>
    </>
  ),
  faqHeading: 'Häufig gestellte Fragen',
  faq: [
    {
      question: 'Was ist der häufigste Grund für Verzögerungen beim NIE-Antrag?',
      answer:
        'Mit Abstand die Terminverfügbarkeit. Die Formulare selbst sind kurz — der Engpass ist fast immer das Warten auf einen cita-previa-Termin bei einer stark frequentierten Dienststelle oder einem Konsulat.',
    },
    {
      question: 'Kann jemand anderes meinen Antrag für mich einreichen?',
      answer:
        'Ja, mit einer notariell beglaubigten Vollmacht kann ein Anwalt Ihre NIE für Sie einreichen und abholen, ohne dass Sie persönlich erscheinen müssen.',
    },
    {
      question: 'Muss ich beim Termin Spanisch sprechen?',
      answer:
        'Es hilft, ist aber nicht zwingend erforderlich. Viele Antragsteller bringen einen Übersetzer mit oder nutzen einen Vertreter, der den Termin auf Spanisch für sie wahrnimmt.',
    },
    {
      question: 'Was passiert, wenn mein Antrag abgelehnt wird?',
      answer:
        'Sie beheben das Problem (meist ein Dokument- oder Formularfehler) und buchen einen neuen Termin — für eine einfache Ablehnung in dieser Phase gibt es kein Widerspruchsverfahren.',
    },
  ],
  ctaHeading: 'Überspringen Sie die Terminwarteschlange',
  ctaText:
    'Espallo beantragt Ihre NIE Nummer über unsere Partneranwälte in Spanien für Sie — auch vollständig aus der Ferne.',
  ctaButton: 'NIE-Antrag jetzt starten',
  disclaimer:
    'Espallo ist ein administrativer Dienstleister, kein Anwaltsbüro. Wir erteilen keine Rechtsberatung; die kooperierenden Anwälte und Notare in Spanien stehen in direktem Mandatsverhältnis zu Ihnen als Mandant.',
}

export default content
