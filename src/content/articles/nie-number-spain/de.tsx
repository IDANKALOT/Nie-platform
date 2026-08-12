import Link from 'next/link'
import { articleHref } from '@/lib/articles/href'
import type { ArticleContent } from '../types'

const content: ArticleContent = {
  title: 'NIE Nummer Spanien – Hilfe bei der Beantragung',
  description:
    'Sie brauchen eine NIE Nummer in Spanien? Erfahren Sie, wie der Antrag funktioniert, welche Unterlagen nötig sind und wie Espallo den gesamten Prozess für Sie übernimmt.',
  breadcrumbHome: 'Startseite',
  breadcrumbLabel: 'NIE Nummer Spanien',
  h1: 'NIE Nummer Spanien – Professionelle Hilfe bei der Beantragung',
  updatedLabel: 'Zuletzt aktualisiert',
  lastUpdated: '2026-08-12',
  intro: (
    <p>
      Ob Immobilienkauf, Bankkonto, Arbeitsaufnahme oder der Umzug nach Spanien im
      Ruhestand — ohne <strong>NIE Nummer</strong> (Número de Identificación de
      Extranjero) geht in Spanien fast nichts. Dieser Leitfaden erklärt, was die NIE
      Nummer ist, wer sie braucht, und wie Espallo den Antrag für Sie abwickelt, auch
      wenn Sie derzeit nicht nach Spanien reisen können oder wollen.
    </p>
  ),
  body: (
    <>
      <section>
        <h2>Was genau ist eine NIE Nummer?</h2>
        <p>
          Die NIE ist eine dauerhafte, persönliche Identifikationsnummer, mit der
          spanische Behörden, Banken, Notare und Finanzämter Ausländer eindeutig
          zuordnen. Sie ist keine Aufenthaltserlaubnis, sondern vergleichbar mit einer
          Steuer-Identifikationsnummer. Mehr dazu in unserem Beitrag{' '}
          <Link href={articleHref('what-is-an-nie-number', 'de')}>Was ist eine NIE Nummer?</Link>
        </p>
      </section>

      <section>
        <h2>Wer braucht eine NIE Nummer?</h2>
        <p>Eine NIE Nummer wird unter anderem in folgenden Fällen benötigt:</p>
        <ul>
          <li>Kauf oder Verkauf einer Immobilie in Spanien</li>
          <li>Eröffnung eines spanischen Bankkontos</li>
          <li>Arbeitsaufnahme als Angestellter oder Selbstständiger (autónomo)</li>
          <li>Zahlung spanischer Steuern, z. B. der Nichtresidentensteuer</li>
          <li>Kauf eines Autos, Anmeldung von Strom/Wasser, Abschluss eines Mietvertrags</li>
          <li>Beantragung der Aufenthaltskarte (TIE) für Nicht-EU-Bürger</li>
        </ul>
      </section>

      <section>
        <h2>Wie läuft der Antrag ab?</h2>
        <p>
          Der übliche Weg führt über einen <em>cita previa</em> (Termin) bei der
          zuständigen Ausländerbehörde (Oficina de Extranjería) in Spanien oder — wenn
          Sie noch in Deutschland, Österreich oder der Schweiz sind — beim spanischen
          Konsulat. Dort reichen Sie das Formular EX-15, Ihren Reisepass sowie einen
          Nachweis über den wirtschaftlichen, beruflichen oder sozialen Grund für den
          Antrag ein und zahlen eine kleine Verwaltungsgebühr (Modelo 790, código 012).
        </p>
        <p>
          Genau hier scheitern viele: Konsulatstermine sind oft monatelang ausgebucht,
          das EX-15-Formular wird häufig falsch ausgefüllt, und ein fehlendes Dokument
          bedeutet meist einen neuen Termin von vorn. Die vollständige Anleitung finden
          Sie in unserem Beitrag{' '}
          <Link href={articleHref('how-to-get-nie-number', 'de')}>
            Wie bekommt man eine NIE Nummer, Schritt für Schritt
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Wie Espallo hilft</h2>
        <p>
          Espallo übernimmt Formulare, Terminbuchung und Einreichung über unser Netzwerk
          spanischer Anwälte — inklusive Optionen ohne persönliche Anreise nach Spanien
          und ohne monatelange Wartezeit auf einen Konsulatstermin. Sie geben Ihre Daten
          online ein, unterschreiben digital, den Rest übernehmen wir.
        </p>
      </section>
    </>
  ),
  faqHeading: 'Häufig gestellte Fragen',
  faq: [
    {
      question: 'Kann ich eine NIE Nummer bekommen, ohne nach Spanien zu reisen?',
      answer:
        'Ja, in vielen Fällen kann ein Anwalt den Antrag mit einer Vollmacht für Sie stellen, ohne dass Sie persönlich bei Behörde oder Konsulat erscheinen müssen.',
    },
    {
      question: 'Wie lange dauert die Beantragung einer NIE Nummer?',
      answer:
        'Das hängt stark von der Terminverfügbarkeit ab. Direktanträge können mehrere Wochen dauern; über einen Vertreter mit bestehendem Terminzugang geht es meist schneller.',
    },
    {
      question: 'Läuft eine NIE Nummer ab?',
      answer:
        'Nein, die NIE Nummer selbst ist unbefristet gültig. Nur das physische Zertifikat kann bei Verlust neu ausgestellt werden — die Nummer bleibt auch nach längerer Abwesenheit aus Spanien gültig.',
    },
    {
      question: 'Ist die NIE Nummer dasselbe wie eine Aufenthaltserlaubnis?',
      answer:
        'Nein. Die NIE ist nur eine Identifikationsnummer. Die Aufenthaltserlaubnis (bei Nicht-EU-Bürgern die TIE-Karte) ist ein separates Verfahren, das nicht jeder NIE-Inhaber benötigt.',
    },
    {
      question: 'Welche Unterlagen brauche ich für den Antrag?',
      answer:
        'In der Regel einen gültigen Reisepass, das ausgefüllte Formular EX-15 sowie einen Nachweis über den Grund des Antrags, z. B. einen Reservierungsvertrag für eine Immobilie. Details in unserer Dokumenten-Checkliste.',
    },
  ],
  ctaHeading: 'Brauchen Sie Hilfe bei Ihrer NIE Nummer?',
  ctaText:
    'Espallo übernimmt Antrag, Terminbuchung und Papierkram für internationale Kunden — auch als Fernantrag ohne Reise nach Spanien.',
  ctaButton: 'Hilfe bei der NIE Nummer erhalten',
  disclaimer:
    'Espallo ist ein administrativer Dienstleister, kein Anwaltsbüro. Wir erteilen keine Rechtsberatung; die kooperierenden Anwälte und Notare in Spanien stehen in direktem Mandatsverhältnis zu Ihnen als Mandant.',
}

export default content
