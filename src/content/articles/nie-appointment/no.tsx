import Link from 'next/link'
import { articleHref } from '@/lib/articles/href'
import type { ArticleContent } from '../types'

const content: ArticleContent = {
  title: 'Slik Får Du En NIE-Time i Spania',
  description:
    'Slik fungerer bookingsystemet cita previa for NIE-timer egentlig, hvorfor timer er så vanskelige å finne, og praktiske tips for å få en.',
  breadcrumbHome: 'Hjem',
  breadcrumbLabel: 'NIE Time',
  h1: 'Slik Får Du En NIE-Time i Spania',
  updatedLabel: 'Sist oppdatert',
  lastUpdated: '2026-08-12',
  intro: (
    <p>
      Systemet <em>cita previa</em> (avtalt time) er den desidert vanligste hindringen
      i hele NIE-prosessen — mer enn papirarbeidet, mer enn selve skjemaet. Slik
      fungerer bookingsystemet, og dette er det som faktisk hjelper.
    </p>
  ),
  body: (
    <>
      <section>
        <h2>Slik fungerer bookingsystemet</h2>
        <p>
          Timer bookes gjennom Spanias offisielle nettsystem, knyttet til et bestemt
          kontor (en politistasjons Oficina de Extranjería, eller et konsulat hvis du
          er i utlandet — se vår side om{' '}
          <Link href={articleHref('nie-from-abroad', 'no')}>
            å søke fra utlandet
          </Link>
          ). Du velger en provins og et kontor, deretter et formål (NIE), og systemet
          viser ledige timer — hvis det finnes noen.
        </p>
      </section>

      <section>
        <h2>Hvorfor timer er så vanskelige å finne</h2>
        <p>
          Etterspørselen hos populære kontorer (storbyer, kystområder med mange
          utenlandske boligkjøpere) overstiger jevnlig antallet timer som frigis
          daglig. Det finnes ingen venteliste og ingen mulighet til å reservere utover
          det systemet viser — timer frigis, ofte på et fast tidspunkt på dagen, og
          blir tatt i løpet av minutter.
        </p>
      </section>

      <section>
        <h2>Praktiske tips</h2>
        <ul>
          <li>Sjekk jevnlig fremfor bare én gang — timer åpner seg når andre avbestiller</li>
          <li>
            Noen regioner eller mindre kontorer har kortere ventetid enn de travleste
            provinshovedstedene
          </li>
          <li>
            Ha dokumentene dine klare før du booker, så du slipper å booke om hvis noe
            mangler
          </li>
          <li>
            Er ventetiden uholdbar for tidsplanen din, fjerner en representant med
            eksisterende tilgang til timer problemet helt
          </li>
        </ul>
      </section>
    </>
  ),
  faqHeading: 'Ofte stilte spørsmål',
  faq: [
    {
      question: 'Kan jeg booke en NIE-time hos hvilket som helst kontor, ikke bare mitt lokale?',
      answer:
        'I Spania kan du generelt booke hos enhver Oficina de Extranjería med ledige timer, ikke bare den nærmeste — noen søkere booker hos mindre travle kontorer i andre provinser.',
    },
    {
      question: 'På hvilket tidspunkt på dagen dukker nye timer vanligvis opp?',
      answer:
        'Dette varierer fra kontor til kontor og endrer seg over tid; det finnes ingen enkelt pålitelig tidsplan, noe som er en del av grunnen til at systemet er frustrerende å bruke.',
    },
    {
      question: 'Kan noen andre booke timen for meg?',
      answer:
        'Ja — en representant kan booke og møte opp på dine vegne med en fullmakt, uten at du selv trenger å bruke bookingsystemet.',
    },
    {
      question: 'Hva skjer hvis jeg går glipp av timen min?',
      answer:
        'Du mister timen og må booke på nytt fra bunnen — det finnes generelt ingen ombooking innenfor selve systemet.',
    },
  ],
  ctaHeading: 'Lei av å oppdatere bookingsiden?',
  ctaText:
    'Espallo har allerede tilgang til timer gjennom våre samarbeidende advokater i Spania — ingen oppdatering, ingen tapte timer.',
  ctaButton: 'Hopp over timejakten',
  disclaimer:
    'Espallo er et administrativt tjenestebyrå, ikke et advokatfirma. Vi gir ikke juridisk rådgivning. Våre samarbeidende advokater og notarer i Spania har et direkte klientforhold med deg.',
}

export default content
