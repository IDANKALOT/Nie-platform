import Link from 'next/link'
import { articleHref } from '@/lib/articles/href'
import type { ArticleContent } from '../types'

const content: ArticleContent = {
  title: 'Can You Get an NIE Number Without Travelling to Spain?',
  description:
    'Yes — here is exactly how a power-of-attorney NIE application works, what it costs in trust and paperwork, and when it makes more sense than travelling.',
  breadcrumbHome: 'Home',
  breadcrumbLabel: 'NIE Without Travelling',
  h1: 'Can You Get an NIE Number Without Travelling to Spain?',
  updatedLabel: 'Last updated',
  lastUpdated: '2026-08-12',
  intro: (
    <p>
      Yes. You do not have to be physically present in Spain, or even at a Spanish
      consulate, to get an NIE number — a Spanish lawyer can apply on your behalf using
      a power of attorney. This is the route people use when they&apos;re buying property
      remotely, don&apos;t have a Spanish consulate nearby, or simply can&apos;t spare the
      travel time.
    </p>
  ),
  body: (
    <>
      <section>
        <h2>How the power-of-attorney route actually works</h2>
        <p>
          You authorize a Spanish lawyer, in writing, to submit the EX-15 application
          and collect the NIE certificate on your behalf. In most cases the power of
          attorney can be signed and witnessed remotely (for example via a notary in
          your home country, with the document then legalized for use in Spain), so the
          entire process — signing, document collection, submission, and receiving your
          certificate — can happen without you booking a flight.
        </p>
      </section>

      <section>
        <h2>What this route is, and isn&apos;t</h2>
        <p>
          It is not a shortcut around the official process — the same EX-15 form, the
          same documents, and the same government fee apply. What changes is who
          physically attends the appointment: your representative, not you. See our{' '}
          <Link href={articleHref('nie-number-documents', 'en')}>
            documents checklist
          </Link>{' '}
          for exactly what you&apos;ll need to send.
        </p>
      </section>

      <section>
        <h2>When it makes more sense than travelling</h2>
        <p>
          If you already have a trip to Spain planned, applying in person can be just as
          fast. The power-of-attorney route makes the most sense when you&apos;re on a
          deadline (a property completion, for example) but not travelling in time, when
          your nearest consulate has long wait times, or when you&apos;d simply rather not
          spend a day of a trip standing in a government office.
        </p>
      </section>
    </>
  ),
  faqHeading: 'Frequently asked questions',
  faq: [
    {
      question: 'Is a remote NIE application legally valid?',
      answer:
        'Yes — power of attorney is a standard, legally recognized instrument in Spain, used for far more than NIE applications, including property purchases and company formation.',
    },
    {
      question: 'Do I need to visit a notary in my own country?',
      answer:
        'Usually yes, to sign and witness the power of attorney, though the exact requirement depends on your country and whether Spain has a legalization agreement (such as an apostille) with it.',
    },
    {
      question: 'How do I know my lawyer actually submitted my application?',
      answer:
        'A reputable service confirms each step and provides your NIE certificate once issued — ask for progress updates if you don’t receive them proactively.',
    },
    {
      question: 'Can I still travel to Spain later even after applying remotely?',
      answer:
        'Yes, the NIE number is valid regardless of how it was obtained, and doesn’t restrict future travel or applications in any way.',
    },
  ],
  ctaHeading: 'Get your NIE without leaving home',
  ctaText:
    'Espallo handles the entire NIE application remotely through our partner lawyers in Spain — no flight, no appointment to chase.',
  ctaButton: 'Start your remote NIE application',
  disclaimer:
    'Espallo is an administrative service, not a law firm. We do not provide legal advice; the partner lawyers and notaries in Spain who process your case have a direct professional relationship with you as their client.',
}

export default content
