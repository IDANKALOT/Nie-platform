import Link from 'next/link'
import { articleHref } from '@/lib/articles/href'
import type { ArticleContent } from '../types'

const content: ArticleContent = {
  title: 'How to Get an NIE Number in Spain: Step-by-Step',
  description:
    'The exact steps to get a Spanish NIE number, from booking a cita previa to receiving your certificate — plus the mistakes that cost people months.',
  breadcrumbHome: 'Home',
  breadcrumbLabel: 'How to Get an NIE Number',
  h1: 'How to Get an NIE Number in Spain',
  updatedLabel: 'Last updated',
  lastUpdated: '2026-08-12',
  intro: (
    <p>
      Getting an <strong>NIE number</strong> is a fixed bureaucratic sequence, not a
      judgment call — but the sequence has enough single points of failure (appointment
      availability, one wrong document, an expired form version) that most people who do
      it themselves end up restarting at least once. Here&apos;s the process step by
      step, and where it usually breaks down.
    </p>
  ),
  body: (
    <>
      <section>
        <h2>Step 1: Decide where you&apos;ll apply</h2>
        <p>
          You have two options: apply in Spain at a police station&apos;s Oficina de
          Extranjería, or apply at a Spanish consulate in your home country before you
          travel. If you already have travel booked to Spain, applying in-country is
          usually faster. If you&apos;re not travelling yet — for example because
          you&apos;re buying property remotely — the consulate route or a
          power-of-attorney application (see below) are the only options.
        </p>
      </section>

      <section>
        <h2>Step 2: Book a cita previa</h2>
        <p>
          Both routes require a <em>cita previa</em> (prior appointment) booked through
          the Spanish government&apos;s online system. This is the single biggest
          bottleneck: slots at busy stations and consulates are frequently booked out
          weeks or months in advance, and the booking system has no waitlist — you keep
          refreshing until a slot opens.
        </p>
      </section>

      <section>
        <h2>Step 3: Gather your documents</h2>
        <p>You&apos;ll typically need:</p>
        <ul>
          <li>A valid passport (plus a photocopy)</li>
          <li>The completed EX-15 application form</li>
          <li>
            Proof of the economic, professional, or social reason for your request — for
            example a signed property reservation contract, a job offer, or a bank
            account opening letter
          </li>
          <li>Proof of payment of the Modelo 790, código 012 fee</li>
        </ul>
      </section>

      <section>
        <h2>Step 4: Fill in and submit the EX-15 form</h2>
        <p>
          The EX-15 is short but unforgiving — a wrong box ticked (residency vs.
          non-residency, for instance) or a mismatch between the stated reason and your
          supporting document is a common cause of rejected applications. There is no
          same-day correction; you re-book and start again.
        </p>
      </section>

      <section>
        <h2>Step 5: Attend your appointment and pay the fee</h2>
        <p>
          At the appointment, an officer reviews your documents and, if everything is in
          order, processes your application. You pay the administrative fee (Modelo 790,
          código 012) at a bank or online before or at the appointment, depending on the
          office.
        </p>
      </section>

      <section>
        <h2>Step 6: Receive your NIE certificate</h2>
        <p>
          Once approved, you receive the white A4 certificate with your number. Some
          offices issue it the same day; others take a few days to a few weeks. For more
          on what the certificate actually is, see{' '}
          <Link href={articleHref('what-is-an-nie-number', 'en')}>
            what an NIE number actually is
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>The alternative: apply through a representative</h2>
        <p>
          You can authorize a Spanish lawyer to apply on your behalf with a power of
          attorney, which removes steps 1 and 2 entirely for you — no appointment to
          book, no trip required. This is how{' '}
          <Link href={articleHref('nie-number-spain', 'en')}>Espallo&apos;s NIE service</Link>{' '}
          works: you provide your details and documents online, and our partner lawyers
          handle the in-person steps.
        </p>
      </section>
    </>
  ),
  faqHeading: 'Frequently asked questions',
  faq: [
    {
      question: 'What is the most common reason NIE applications get delayed?',
      answer:
        'Appointment availability, by far. The paperwork itself is short — the bottleneck is almost always waiting for a cita previa slot at a busy office or consulate.',
    },
    {
      question: 'Can someone else submit my application for me?',
      answer:
        'Yes, with a notarized power of attorney a lawyer can submit and collect your NIE on your behalf without you attending in person.',
    },
    {
      question: 'Do I need to speak Spanish for the appointment?',
      answer:
        'It helps, but is not strictly required. Many applicants bring a translator or use a representative who handles the appointment in Spanish for them.',
    },
    {
      question: 'What happens if my application is rejected?',
      answer:
        'You correct the issue (usually a document or form error) and book a new appointment — there is no appeal process for a straightforward rejection at this stage.',
    },
  ],
  ctaHeading: 'Skip the appointment queue',
  ctaText:
    'Espallo applies for your NIE number on your behalf through our partner lawyers in Spain — including fully remote applications.',
  ctaButton: 'Start your NIE application',
  disclaimer:
    'Espallo is an administrative service, not a law firm. We do not provide legal advice; the partner lawyers and notaries in Spain who process your case have a direct professional relationship with you as their client.',
}

export default content
