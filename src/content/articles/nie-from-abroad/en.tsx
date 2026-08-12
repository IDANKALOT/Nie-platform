import Link from 'next/link'
import { articleHref } from '@/lib/articles/href'
import type { ArticleContent } from '../types'

const content: ArticleContent = {
  title: 'How to Get an NIE Number From Abroad',
  description:
    'Applying at a Spanish consulate in your own country: how it differs from applying in Spain, what to expect from the booking system, and when to use a representative instead.',
  breadcrumbHome: 'Home',
  breadcrumbLabel: 'NIE From Abroad',
  h1: 'How to Get an NIE Number From Abroad',
  updatedLabel: 'Last updated',
  lastUpdated: '2026-08-12',
  intro: (
    <p>
      If you&apos;re not planning a trip to Spain, applying through your local Spanish
      consulate is the direct government route. It runs on the same rules as applying
      in Spain, but the practical experience — booking, documents, and collection —
      differs enough that it&apos;s worth knowing what to expect before you start. (If you&apos;d
      rather skip the consulate entirely, see our page on{' '}
      <Link href={articleHref('nie-without-travelling', 'en')}>
        getting an NIE without travelling
      </Link>
      , via power of attorney.)
    </p>
  ),
  body: (
    <>
      <section>
        <h2>Consulate appointment systems vary by country</h2>
        <p>
          Each Spanish consulate manages its own appointment calendar, and demand
          varies enormously — some consulates offer appointments within weeks, others
          are booked out for months, particularly in countries with large expat or
          property-buyer populations. There is no way to book at a different
          consulate than the one covering your place of residence.
        </p>
      </section>

      <section>
        <h2>What&apos;s often different from applying in Spain</h2>
        <p>
          Consulates more frequently require certified translations of supporting
          documents, since the underlying paperwork (a job offer, a property contract)
          is often issued outside Spain. Some consulates also issue the NIE certificate
          by post rather than handing it over at the appointment, which adds time you
          should budget for. Check your specific consulate&apos;s requirements directly, as
          they&apos;re not standardized across countries.
        </p>
      </section>

      <section>
        <h2>If the wait is too long</h2>
        <p>
          When your nearest consulate&apos;s appointment calendar is booked out further
          than your timeline allows, the practical alternative is applying by power of
          attorney through a Spain-based representative, who applies at a police
          station in Spain on your behalf instead of at your local consulate. This is
          how Espallo&apos;s service works — no consulate appointment needed.
        </p>
      </section>
    </>
  ),
  faqHeading: 'Frequently asked questions',
  faq: [
    {
      question: 'Can I apply at any Spanish consulate, or only the one near me?',
      answer:
        'Only the consulate covering your registered place of residence — you can’t book at a consulate in a different jurisdiction to get a shorter wait.',
    },
    {
      question: 'Does applying at a consulate cost more than applying in Spain?',
      answer:
        'The government fee is the same either way; the only extra cost is likely translation of documents if your consulate requires it.',
    },
    {
      question: 'How will I receive my NIE certificate if I apply at a consulate?',
      answer:
        'This varies by consulate — some hand it over at a follow-up appointment, others post it. Confirm the process when you book.',
    },
    {
      question: 'Is it faster to use a representative in Spain instead of my local consulate?',
      answer:
        'Often yes, if your consulate has long wait times, since a representative applies directly at a Spanish police station instead of waiting for a consulate slot.',
    },
  ],
  ctaHeading: "Consulate wait too long?",
  ctaText:
    'Espallo applies for your NIE number in Spain through a power of attorney — no consulate appointment needed, wherever you are.',
  ctaButton: 'Skip the consulate wait',
  disclaimer:
    'Espallo is an administrative service, not a law firm. We do not provide legal advice; the partner lawyers and notaries in Spain who process your case have a direct professional relationship with you as their client.',
}

export default content
