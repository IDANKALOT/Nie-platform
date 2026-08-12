import Link from 'next/link'
import { articleHref } from '@/lib/articles/href'
import type { ArticleContent } from '../types'

const content: ArticleContent = {
  title: 'NIE Nummer in Spanien beantragen',
  description:
    'Drei Wege zur spanischen NIE Nummer — in Spanien, beim Konsulat oder per Vollmacht — und wie Sie den richtigen für Ihre Situation wählen.',
  breadcrumbHome: 'Startseite',
  breadcrumbLabel: 'NIE Nummer beantragen',
  h1: 'NIE Nummer in Spanien beantragen',
  updatedLabel: 'Zuletzt aktualisiert',
  lastUpdated: '2026-08-12',
  intro: (
    <p>
      Es gibt drei Wege, eine <strong>NIE Nummer</strong> zu beantragen, und welcher
      sinnvoll ist, hängt fast ausschließlich davon ab, ob — und wann — Sie
      tatsächlich in Spanien sein werden. Die vollständigen Schritte zu jedem dieser
      Wege finden Sie in unserem{' '}
      <Link href={articleHref('how-to-get-nie-number', 'de')}>
        Leitfaden zur NIE Nummer
      </Link>
      . Auf dieser Seite geht es darum, den richtigen Weg zu wählen und loszulegen.
    </p>
  ),
  body: (
    <>
      <section>
        <h2>Ihre drei Optionen</h2>
        <p>
          <strong>1. In Spanien beantragen.</strong> Wenn Sie bereits eine Reise gebucht
          haben, ist das meist der schnellste Weg — Sie buchen eine cita previa bei
          einer lokalen Oficina de Extranjería und erscheinen persönlich.
        </p>
        <p>
          <strong>2. Beim spanischen Konsulat beantragen.</strong> Reisen Sie noch nicht,
          bearbeiten die meisten spanischen Konsulate NIE-Anträge, wobei die
          Terminverfügbarkeit je nach Land und Stadt stark variiert.
        </p>
        <p>
          <strong>3. Per Vollmacht beantragen.</strong> Sie bevollmächtigen einen
          spanischen Anwalt, die NIE für Sie einzureichen und abzuholen. Das ist der
          einzige Weg ganz ohne Termin und ohne Reise Ihrerseits — im Gegenzug zahlen
          Sie für die Vertretung statt selbst das Formular auszufüllen.
        </p>
      </section>

      <section>
        <h2>Was Sie unabhängig vom Weg vorab brauchen</h2>
        <p>
          Jeder Weg erfordert dieselben Kernelemente: einen gültigen Reisepass, das
          ausgefüllte Formular EX-15 und einen dokumentierten Nachweis, warum Sie die
          NIE benötigen (Reservierungsvertrag für eine Immobilie, Arbeitsangebot o. Ä.).
          Sehen Sie unsere vollständige{' '}
          <Link href={articleHref('nie-number-documents', 'de')}>
            NIE-Dokumenten-Checkliste
          </Link>{' '}
          an, bevor Sie irgendetwas buchen, damit Sie nicht wegen eines fehlenden Papiers
          abgewiesen werden.
        </p>
      </section>

      <section>
        <h2>Wenn Sie sich für die Vollmacht-Variante entscheiden</h2>
        <p>
          Sie unterschreiben eine Vollmacht (persönlich beim Notar oder je nach Land
          auch aus der Ferne), senden Kopien Ihrer Unterlagen, und Ihr Anwalt übernimmt
          Termin und Einreichung. So funktioniert der Service von Espallo: kein
          Hinterherjagen nach einer cita previa, keine Reise nötig, um einen
          Behördentermin herum zu planen.
        </p>
      </section>
    </>
  ),
  faqHeading: 'Häufig gestellte Fragen',
  faq: [
    {
      question: 'Welcher Antragsweg ist am schnellsten?',
      answer:
        'Das hängt von der aktuellen Terminverfügbarkeit ab, nicht vom Weg selbst. Ein Vertreter mit bestehendem Terminzugang ist oft schneller, als selbst von Grund auf zu buchen.',
    },
    {
      question: 'Kann ich den Weg wechseln, wenn meine erste Wahl nicht klappt?',
      answer:
        'Ja — sind Konsulatstermine in Ihrem Land monatelang ausgebucht, ist der Wechsel zu einem Vollmacht-Antrag eine gängige und unkomplizierte Alternative.',
    },
    {
      question: 'Brauche ich vor dem Antrag ein spanisches Bankkonto?',
      answer:
        'Nein. Eine NIE Nummer ist normalerweise Voraussetzung für ein spanisches Bankkonto, nicht umgekehrt.',
    },
    {
      question: 'Unterscheidet sich der Antrag bei Immobilienkauf und Arbeit?',
      answer:
        'Der eigentliche NIE-Antrag ist derselbe; nur das Nachweisdokument für den Grund des Antrags ändert sich.',
    },
  ],
  ctaHeading: 'Bereit zur Beantragung?',
  ctaText:
    'Espallo beantragt Ihre NIE Nummer über unsere Partneranwälte in Spanien — ohne Termin oder Reise Ihrerseits.',
  ctaButton: 'NIE-Antrag jetzt starten',
  disclaimer:
    'Espallo ist ein administrativer Dienstleister, kein Anwaltsbüro. Wir erteilen keine Rechtsberatung; die kooperierenden Anwälte und Notare in Spanien stehen in direktem Mandatsverhältnis zu Ihnen als Mandant.',
}

export default content
