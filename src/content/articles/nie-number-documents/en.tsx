import Link from 'next/link'
import { articleHref } from '@/lib/articles/href'
import type { ArticleContent } from '../types'

const content: ArticleContent = {
  title: 'What Documents Do You Need for an NIE Number?',
  description:
    'The core document checklist for an NIE application, plus what changes depending on whether you’re buying property, working, or opening a bank account.',
  breadcrumbHome: 'Home',
  breadcrumbLabel: 'NIE Number Documents',
  h1: 'What Documents Do You Need for an NIE Number?',
  updatedLabel: 'Last updated',
  lastUpdated: '2026-08-12',
  intro: (
    <p>
      Every NIE application needs the same core paperwork, plus one document that
      changes depending on your reason for applying. Missing or mismatched documents
      are the single biggest cause of rejected applications in our{' '}
      <Link href={articleHref('how-to-get-nie-number', 'en')}>step-by-step process</Link>,
      so it&apos;s worth checking this list against your situation before you book an
      appointment.
    </p>
  ),
  body: (
    <>
      <section>
        <h2>Core documents, required for every applicant</h2>
        <ul>
          <li>A valid passport, plus a photocopy of the identification pages</li>
          <li>The completed and signed EX-15 application form</li>
          <li>Proof of payment of the Modelo 790, código 012 administrative fee</li>
          <li>
            One recent passport-style photo (required by some, but not all, offices —
            check with your specific station or consulate)
          </li>
        </ul>
      </section>

      <section>
        <h2>The document that changes by reason</h2>
        <p>
          You must also show why you need the NIE. The most common supporting
          documents are:
        </p>
        <ul>
          <li>
            <strong>Buying property:</strong> a signed reservation contract (contrato de
            reserva) or arras contract with the seller or agency
          </li>
          <li>
            <strong>Working:</strong> a signed job offer or employment contract from a
            Spanish employer
          </li>
          <li>
            <strong>Opening a bank account:</strong> a letter from the bank confirming
            they require an NIE to proceed
          </li>
          <li>
            <strong>Setting up as self-employed (autónomo):</strong> proof of registered
            economic activity or a business plan
          </li>
          <li>
            <strong>No specific reason yet (general interest):</strong> some offices
            accept a general statement of intent to invest or reside, though this is
            handled less consistently than the categories above
          </li>
        </ul>
      </section>

      <section>
        <h2>If a document isn&apos;t in Spanish</h2>
        <p>
          Documents issued outside Spain sometimes need a certified (sworn) Spanish
          translation, and in some cases an apostille to confirm the original is
          legitimate. Whether this applies depends on the document type and the office
          processing your application — it&apos;s worth confirming before your appointment,
          since a translation typically takes longer to arrange than the appointment
          slot itself.
        </p>
      </section>
    </>
  ),
  faqHeading: 'Frequently asked questions',
  faq: [
    {
      question: 'Do I need to bring originals, or are copies enough?',
      answer:
        'Bring originals plus photocopies. Offices generally check the original and keep the copy.',
    },
    {
      question: 'What happens if I show up with the wrong supporting document?',
      answer:
        'Your application is typically rejected on the spot, and you need to book a new appointment with the correct document — there is no same-day fix.',
    },
    {
      question: 'Does my passport need a minimum validity period?',
      answer:
        'It should be valid for the foreseeable future — an expired or soon-to-expire passport is grounds for rejection at some offices.',
    },
    {
      question: 'Can I use a driving licence instead of a passport?',
      answer:
        'No, a valid passport (or national ID card for some EU citizens) is required; a driving licence is not accepted as identification for an NIE application.',
    },
  ],
  ctaHeading: 'Not sure which documents you need?',
  ctaText:
    'Espallo reviews your situation and prepares the exact document set for your application, so nothing gets rejected for a paperwork mismatch.',
  ctaButton: 'Get help preparing your NIE application',
  disclaimer:
    'Espallo is an administrative service, not a law firm. We do not provide legal advice; the partner lawyers and notaries in Spain who process your case have a direct professional relationship with you as their client.',
}

export default content
