import Link from 'next/link'
import { articleHref } from '@/lib/articles/href'
import type { ArticleContent } from '../types'

const content: ArticleContent = {
  title: 'Welche Unterlagen brauchen Sie für eine NIE Nummer?',
  description:
    'Die Kern-Dokumentenliste für den NIE-Antrag, plus was sich je nachdem ändert, ob Sie eine Immobilie kaufen, arbeiten oder ein Bankkonto eröffnen.',
  breadcrumbHome: 'Startseite',
  breadcrumbLabel: 'NIE Nummer Dokumente',
  h1: 'Welche Unterlagen brauchen Sie für eine NIE Nummer?',
  updatedLabel: 'Zuletzt aktualisiert',
  lastUpdated: '2026-08-12',
  intro: (
    <p>
      Jeder NIE-Antrag benötigt dieselben Kernunterlagen, plus ein Dokument, das sich
      je nach Grund der Beantragung ändert. Fehlende oder nicht passende Unterlagen
      sind in unserem{' '}
      <Link href={articleHref('how-to-get-nie-number', 'de')}>
        Schritt-für-Schritt-Prozess
      </Link>{' '}
      die häufigste Ursache für abgelehnte Anträge — prüfen Sie diese Liste daher vor
      Ihrem Termin gegen Ihre Situation.
    </p>
  ),
  body: (
    <>
      <section>
        <h2>Kernunterlagen, für jeden Antragsteller erforderlich</h2>
        <ul>
          <li>Ein gültiger Reisepass, plus eine Kopie der Identifikationsseiten</li>
          <li>Das ausgefüllte und unterschriebene Formular EX-15</li>
          <li>Zahlungsnachweis der Verwaltungsgebühr Modelo 790, código 012</li>
          <li>
            Ein aktuelles Passfoto (bei manchen, aber nicht allen Dienststellen
            erforderlich — prüfen Sie das bei Ihrer konkreten Station oder Ihrem
            Konsulat)
          </li>
        </ul>
      </section>

      <section>
        <h2>Das Dokument, das sich je nach Grund ändert</h2>
        <p>Sie müssen außerdem nachweisen, warum Sie die NIE benötigen. Die häufigsten Nachweisdokumente sind:</p>
        <ul>
          <li>
            <strong>Immobilienkauf:</strong> ein unterschriebener Reservierungsvertrag
            (contrato de reserva) oder Anzahlungsvertrag mit Verkäufer oder Makler
          </li>
          <li>
            <strong>Arbeit:</strong> ein unterschriebenes Arbeitsangebot oder
            Arbeitsvertrag eines spanischen Arbeitgebers
          </li>
          <li>
            <strong>Bankkontoeröffnung:</strong> ein Schreiben der Bank, das bestätigt,
            dass eine NIE zur Kontoeröffnung erforderlich ist
          </li>
          <li>
            <strong>Selbstständigkeit (autónomo):</strong> Nachweis einer angemeldeten
            wirtschaftlichen Tätigkeit oder ein Businessplan
          </li>
          <li>
            <strong>Noch kein konkreter Grund (allgemeines Interesse):</strong> manche
            Dienststellen akzeptieren eine allgemeine Absichtserklärung zu
            Investition oder Wohnsitz, wird aber weniger einheitlich gehandhabt als
            die obigen Kategorien
          </li>
        </ul>
      </section>

      <section>
        <h2>Wenn ein Dokument nicht auf Spanisch ist</h2>
        <p>
          Außerhalb Spaniens ausgestellte Dokumente benötigen manchmal eine
          beglaubigte spanische Übersetzung, in manchen Fällen zusätzlich eine
          Apostille zur Bestätigung der Echtheit des Originals. Ob dies zutrifft, hängt
          vom Dokumenttyp und der bearbeitenden Dienststelle ab — klären Sie das vor
          Ihrem Termin, da eine Übersetzung in der Regel länger dauert zu organisieren
          als der Termin selbst.
        </p>
      </section>
    </>
  ),
  faqHeading: 'Häufig gestellte Fragen',
  faq: [
    {
      question: 'Brauche ich Originale, oder reichen Kopien?',
      answer:
        'Bringen Sie Originale plus Kopien mit. Dienststellen prüfen in der Regel das Original und behalten die Kopie.',
    },
    {
      question: 'Was passiert, wenn ich mit dem falschen Nachweisdokument erscheine?',
      answer:
        'Ihr Antrag wird in der Regel sofort abgelehnt, und Sie müssen einen neuen Termin mit dem korrekten Dokument buchen — eine Korrektur am selben Tag ist nicht möglich.',
    },
    {
      question: 'Muss mein Reisepass eine Mindestgültigkeit haben?',
      answer:
        'Er sollte auf absehbare Zeit gültig sein — ein abgelaufener oder bald ablaufender Reisepass ist bei manchen Dienststellen ein Ablehnungsgrund.',
    },
    {
      question: 'Kann ich einen Führerschein statt eines Reisepasses verwenden?',
      answer:
        'Nein, ein gültiger Reisepass (oder für manche EU-Bürger der Personalausweis) ist erforderlich; ein Führerschein wird als Ausweis für den NIE-Antrag nicht akzeptiert.',
    },
  ],
  ctaHeading: 'Nicht sicher, welche Unterlagen Sie brauchen?',
  ctaText:
    'Espallo prüft Ihre Situation und stellt den genauen Unterlagensatz für Ihren Antrag zusammen, damit nichts wegen falscher Papiere abgelehnt wird.',
  ctaButton: 'Hilfe bei der Antragsvorbereitung erhalten',
  disclaimer:
    'Espallo ist ein administrativer Dienstleister, kein Anwaltsbüro. Wir erteilen keine Rechtsberatung; die kooperierenden Anwälte und Notare in Spanien stehen in direktem Mandatsverhältnis zu Ihnen als Mandant.',
}

export default content
