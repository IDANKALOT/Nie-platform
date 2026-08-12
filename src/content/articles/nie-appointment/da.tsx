import Link from 'next/link'
import { articleHref } from '@/lib/articles/href'
import type { ArticleContent } from '../types'

const content: ArticleContent = {
  title: 'Sådan Får Du En NIE-Tid i Spanien',
  description:
    'Sådan fungerer cita previa-bookingsystemet til NIE-tider reelt, hvorfor tider er så svære at finde, og praktiske tips til at få en.',
  breadcrumbHome: 'Forside',
  breadcrumbLabel: 'NIE Tid',
  h1: 'Sådan Får Du En NIE-Tid i Spanien',
  updatedLabel: 'Sidst opdateret',
  lastUpdated: '2026-08-12',
  intro: (
    <p>
      Systemet <em>cita previa</em> (forudbestilt tid) er den suverænt mest almindelige
      forhindring i hele NIE-processen — mere end papirarbejdet, mere end selve
      formularen. Sådan fungerer bookingsystemet, og det er det, der reelt hjælper.
    </p>
  ),
  body: (
    <>
      <section>
        <h2>Sådan fungerer bookingsystemet</h2>
        <p>
          Tider bookes gennem Spaniens officielle online-system, knyttet til et
          bestemt kontor (en politistations Oficina de Extranjería, eller et konsulat,
          hvis du er i udlandet — se vores side om{' '}
          <Link href={articleHref('nie-from-abroad', 'da')}>
            at ansøge fra udlandet
          </Link>
          ). Du vælger en provins og et kontor, derefter et formål (NIE), og systemet
          viser ledige tider — hvis der er nogen.
        </p>
      </section>

      <section>
        <h2>Hvorfor tider er så svære at finde</h2>
        <p>
          Efterspørgslen hos populære kontorer (storbyer, kystområder med mange
          udenlandske boligkøbere) overstiger jævnligt antallet af daglige tider, der
          frigives. Der er ingen venteliste og ingen mulighed for at reservere ud over
          det, systemet viser — tider frigives, ofte på et fast tidspunkt af dagen, og
          bliver taget inden for minutter.
        </p>
      </section>

      <section>
        <h2>Praktiske tips</h2>
        <ul>
          <li>Tjek jævnligt frem for én gang — tider åbner, når andre aflyser</li>
          <li>
            Nogle regioner eller mindre kontorer har kortere ventetid end de travleste
            provinshovedstæder
          </li>
          <li>
            Hav dine dokumenter klar, før du booker, så du ikke skal booke om, hvis
            noget mangler
          </li>
          <li>
            Er ventetiden uholdbar for din tidsplan, fjerner en repræsentant med
            eksisterende adgang til tider problemet helt
          </li>
        </ul>
      </section>
    </>
  ),
  faqHeading: 'Ofte stillede spørgsmål',
  faq: [
    {
      question: 'Kan jeg booke en NIE-tid hos ethvert kontor, ikke kun mit lokale?',
      answer:
        'I Spanien kan du generelt booke hos enhver Oficina de Extranjería med ledige tider, ikke kun den nærmeste — nogle ansøgere booker hos mindre travle kontorer i andre provinser.',
    },
    {
      question: 'På hvilket tidspunkt af dagen dukker nye tider normalt op?',
      answer:
        'Det varierer fra kontor til kontor og ændrer sig over tid; der er ingen enkelt pålidelig tidsplan, hvilket er en del af grunden til, at systemet er frustrerende at bruge.',
    },
    {
      question: 'Kan en anden booke tiden for mig?',
      answer:
        'Ja — en repræsentant kan booke og møde op på dine vegne med en fuldmagt, uden at du selv skal bruge bookingsystemet.',
    },
    {
      question: 'Hvad sker der, hvis jeg går glip af min tid?',
      answer:
        'Du mister tiden og skal booke forfra igen — der er generelt ingen ombooking inden for selve systemet.',
    },
  ],
  ctaHeading: 'Træt af at opdatere bookingsiden?',
  ctaText:
    'Espallo har allerede adgang til tider gennem vores samarbejdende advokater i Spanien — ingen opdatering, ingen tabte tider.',
  ctaButton: 'Spring tidsjagten over',
  disclaimer:
    'Espallo er et administrativt servicebureau og ikke et advokatfirma. Vi yder ikke juridisk rådgivning. Vores samarbejdende advokater og notarer i Spanien er selvstændige og har et direkte retsforhold med dig som kunde.',
}

export default content
