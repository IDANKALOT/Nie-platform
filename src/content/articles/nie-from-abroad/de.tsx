import Link from 'next/link'
import { articleHref } from '@/lib/articles/href'
import type { ArticleContent } from '../types'

const content: ArticleContent = {
  title: 'NIE Nummer aus dem Ausland beantragen',
  description:
    'Beantragung beim spanischen Konsulat im eigenen Land: was anders ist als in Spanien, was Sie vom Buchungssystem erwarten können, und wann ein Vertreter sinnvoller ist.',
  breadcrumbHome: 'Startseite',
  breadcrumbLabel: 'NIE aus dem Ausland',
  h1: 'NIE Nummer aus dem Ausland beantragen',
  updatedLabel: 'Zuletzt aktualisiert',
  lastUpdated: '2026-08-12',
  intro: (
    <p>
      Planen Sie keine Reise nach Spanien, ist die Beantragung über Ihr örtliches
      spanisches Konsulat der direkte staatliche Weg. Es gelten dieselben Regeln wie
      bei einer Beantragung in Spanien, aber die praktische Erfahrung — Buchung,
      Unterlagen, Abholung — unterscheidet sich genug, dass es sich lohnt zu wissen,
      was Sie erwartet, bevor Sie starten. (Möchten Sie das Konsulat ganz umgehen,
      sehen Sie unsere Seite zur{' '}
      <Link href={articleHref('nie-without-travelling', 'de')}>
        Beantragung der NIE ohne Reise
      </Link>{' '}
      per Vollmacht.)
    </p>
  ),
  body: (
    <>
      <section>
        <h2>Terminbuchungssysteme der Konsulate variieren je nach Land</h2>
        <p>
          Jedes spanische Konsulat verwaltet seinen eigenen Terminkalender, und die
          Nachfrage variiert enorm — manche Konsulate bieten Termine innerhalb weniger
          Wochen an, andere sind monatelang ausgebucht, besonders in Ländern mit
          großer Auswandererzahl oder vielen Immobilienkäufern. Es gibt keine
          Möglichkeit, bei einem anderen als dem für Ihren Wohnsitz zuständigen
          Konsulat zu buchen.
        </p>
      </section>

      <section>
        <h2>Was sich oft von der Beantragung in Spanien unterscheidet</h2>
        <p>
          Konsulate verlangen häufiger beglaubigte Übersetzungen der Nachweisdokumente,
          da die zugrunde liegenden Unterlagen (ein Arbeitsangebot, ein
          Immobilienvertrag) oft außerhalb Spaniens ausgestellt werden. Manche
          Konsulate stellen das NIE-Zertifikat auch per Post statt direkt beim Termin
          aus, was zusätzliche Zeit einplant werden sollte. Prüfen Sie die konkreten
          Anforderungen Ihres Konsulats direkt, da diese länderübergreifend nicht
          einheitlich sind.
        </p>
      </section>

      <section>
        <h2>Wenn die Wartezeit zu lang ist</h2>
        <p>
          Ist der Terminkalender Ihres nächstgelegenen Konsulats weiter ausgebucht, als
          Ihr Zeitplan erlaubt, ist die praktische Alternative die Beantragung per
          Vollmacht über einen in Spanien ansässigen Vertreter, der stattdessen bei
          einer Polizeidienststelle in Spanien für Sie beantragt. So funktioniert der
          Service von Espallo — kein Konsulatstermin nötig.
        </p>
      </section>
    </>
  ),
  faqHeading: 'Häufig gestellte Fragen',
  faq: [
    {
      question: 'Kann ich bei jedem spanischen Konsulat beantragen, oder nur bei dem in meiner Nähe?',
      answer:
        'Nur bei dem für Ihren gemeldeten Wohnsitz zuständigen Konsulat — Sie können nicht bei einem Konsulat in einer anderen Zuständigkeit buchen, um kürzere Wartezeiten zu bekommen.',
    },
    {
      question: 'Kostet die Beantragung beim Konsulat mehr als in Spanien?',
      answer:
        'Die staatliche Gebühr ist in beiden Fällen gleich; die einzige mögliche Zusatzkosten sind Übersetzungen, falls Ihr Konsulat diese verlangt.',
    },
    {
      question: 'Wie erhalte ich mein NIE-Zertifikat bei Beantragung beim Konsulat?',
      answer:
        'Das ist je nach Konsulat unterschiedlich — manche übergeben es bei einem Folgetermin, andere versenden es per Post. Klären Sie den Ablauf bei der Buchung.',
    },
    {
      question: 'Geht es mit einem Vertreter in Spanien schneller als über mein örtliches Konsulat?',
      answer:
        'Oft ja, wenn Ihr Konsulat lange Wartezeiten hat, da ein Vertreter direkt bei einer spanischen Polizeidienststelle beantragt, statt auf einen Konsulatstermin zu warten.',
    },
  ],
  ctaHeading: 'Wartezeit beim Konsulat zu lang?',
  ctaText:
    'Espallo beantragt Ihre NIE Nummer in Spanien per Vollmacht — kein Konsulatstermin nötig, egal wo Sie sind.',
  ctaButton: 'Konsulatswartezeit umgehen',
  disclaimer:
    'Espallo ist ein administrativer Dienstleister, kein Anwaltsbüro. Wir erteilen keine Rechtsberatung; die kooperierenden Anwälte und Notare in Spanien stehen in direktem Mandatsverhältnis zu Ihnen als Mandant.',
}

export default content
