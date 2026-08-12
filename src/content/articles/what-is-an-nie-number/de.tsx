import Link from 'next/link'
import { articleHref } from '@/lib/articles/href'
import type { ArticleContent } from '../types'

const content: ArticleContent = {
  title: 'Was ist eine NIE Nummer in Spanien?',
  description:
    'Verständlich erklärt: Was die spanische NIE Nummer ist, wie sie aussieht, wer sie ausstellt, und warum sie sich von der Aufenthaltserlaubnis unterscheidet.',
  breadcrumbHome: 'Startseite',
  breadcrumbLabel: 'Was ist eine NIE Nummer',
  h1: 'Was ist eine NIE Nummer in Spanien?',
  updatedLabel: 'Zuletzt aktualisiert',
  lastUpdated: '2026-08-12',
  intro: (
    <p>
      NIE steht für <strong>Número de Identificación de Extranjero</strong> — wörtlich
      &quot;Identifikationsnummer für Ausländer&quot;. Es ist die Nummer, die Spanien
      jedem Nicht-Spanier zuweist, den es rechtlich, finanziell oder verwaltungstechnisch
      identifizieren muss — und meist das Erste, was man braucht, sobald man in Spanien
      etwas offiziell erledigen will.
    </p>
  ),
  body: (
    <>
      <section>
        <h2>Wie sieht eine NIE Nummer aus?</h2>
        <p>
          Es ist ein kurzer alphanumerischer Code — ein Buchstabe, sieben Ziffern und
          ein abschließender Prüfbuchstabe, zum Beispiel <code>X1234567Z</code>.
          Spanische Staatsbürger haben eine vergleichbare Nummer auf ihrem
          Personalausweis (DNI); die NIE ist das Pendant für Ausländer, einmalig
          vergeben und nie wiederverwendet.
        </p>
      </section>

      <section>
        <h2>Wer stellt sie aus, und wie sieht der Nachweis aus?</h2>
        <p>
          Die NIE wird vom spanischen Innenministerium über die Policía Nacional
          (Oficina de Extranjería) in Spanien oder über spanische Konsulate im Ausland
          ausgestellt. Nach der Genehmigung erhalten Sie ein weißes A4-Zertifikat (
          <em>certificado de asignación de NIE</em>) mit Ihrer Nummer, Ihrem Namen und
          dem Grund der Ausstellung. Dieses Papier — keine Karte — ist der offizielle
          Nachweis Ihrer NIE.
        </p>
      </section>

      <section>
        <h2>NIE vs. Aufenthaltserlaubnis — die häufigste Verwechslung</h2>
        <p>
          Eine NIE Nummer bedeutet nicht, dass Sie rechtmäßig in Spanien wohnen, und sie
          verleiht kein Visum oder keine Arbeitserlaubnis. Sie ist ausschließlich eine
          Identifikationsnummer für Transaktionen — Immobilienkauf, Bankkonto, Verträge,
          Steuern. EU-Bürger, die dauerhaft nach Spanien ziehen, melden sich zusätzlich
          im EU-Bürgerregister an; Nicht-EU-Bürger beantragen die TIE-Aufenthaltskarte.
          Beide Verfahren setzen in der Regel eine NIE voraus, aber die NIE selbst ist
          kein Aufenthaltsnachweis.
        </p>
      </section>

      <section>
        <h2>Warum fast jeder, der mit Spanien zu tun hat, sie braucht</h2>
        <p>
          Spanische Banken, Notare, Finanzämter (Agencia Tributaria), Versorger und
          Grundbuchämter nutzen die NIE als primäre Kennung für Ausländer. Ohne sie
          können Sie rechtlich keine Transaktionen wie einen Immobilienkauf oder eine
          Firmengründung abschließen, selbst als Nichtresident. Die vollständige Liste
          der Situationen finden Sie in unserem Leitfaden zur{' '}
          <Link href={articleHref('nie-number-spain', 'de')}>
            Beantragung der NIE Nummer in Spanien
          </Link>
          .
        </p>
      </section>
    </>
  ),
  faqHeading: 'Häufig gestellte Fragen',
  faq: [
    {
      question: 'Ist die NIE dasselbe wie eine Steuernummer?',
      answer:
        'Für die meisten Zwecke ja — die NIE dient nach Zuweisung auch als NIF (Steuer-Identifikationsnummer) für Ausländer.',
    },
    {
      question: 'Können zwei Personen dieselbe NIE Nummer haben?',
      answer:
        'Nein. Jede NIE ist eindeutig und dauerhaft einer Person zugeordnet, auch wenn Sie nie wieder nach Spanien zurückkehren.',
    },
    {
      question: 'Brauchen Kinder auch eine NIE Nummer?',
      answer:
        'Ja, wenn sie auf einer Immobilienurkunde, einem Bankkonto oder einem anderen offiziellen Dokument genannt werden, benötigen auch Minderjährige eine eigene NIE Nummer.',
    },
    {
      question: 'Ist das NIE-Zertifikat dasselbe wie die alte NIE-Karte?',
      answer:
        'Nein. Früher stellte Spanien eine physische NIE-Karte aus; heute erhalten Sie stattdessen ein weißes A4-Zertifikat. Ältere, vor der Umstellung ausgestellte Karten bleiben als Nachweis gültig.',
    },
  ],
  ctaHeading: 'Bereit, Ihre NIE Nummer zu beantragen?',
  ctaText:
    'Espallo übernimmt den gesamten Antrag für Sie — auch in Fällen, in denen Sie nie nach Spanien reisen müssen.',
  ctaButton: 'NIE-Antrag jetzt starten',
  disclaimer:
    'Espallo ist ein administrativer Dienstleister, kein Anwaltsbüro. Wir erteilen keine Rechtsberatung; die kooperierenden Anwälte und Notare in Spanien stehen in direktem Mandatsverhältnis zu Ihnen als Mandant.',
}

export default content
