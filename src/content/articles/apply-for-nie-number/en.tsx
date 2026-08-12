import Link from 'next/link'
import { articleHref } from '@/lib/articles/href'
import type { ArticleContent } from '../types'

const content: ArticleContent = {
  title: 'Apply for an NIE Number in Spain',
  description:
    'Three ways to apply for a Spanish NIE number — in Spain, at a consulate, or by power of attorney — and how to choose the right one for your situation.',
  breadcrumbHome: 'Home',
  breadcrumbLabel: 'Apply for an NIE Number',
  h1: 'Apply for an NIE Number in Spain',
  updatedLabel: 'Last updated',
  lastUpdated: '2026-08-12',
  intro: (
    <p>
      There are three ways to apply for an <strong>NIE number</strong>, and which one
      makes sense depends almost entirely on whether — and when — you&apos;re
      physically going to be in Spain. For the full step-by-step mechanics of any of
      these routes, see our{' '}
      <Link href={articleHref('how-to-get-nie-number', 'en')}>
        guide to getting an NIE number
      </Link>
      . This page is about choosing the right route and getting started.
    </p>
  ),
  body: (
    <>
      <section>
        <h2>Your three options</h2>
        <p>
          <strong>1. Apply in Spain.</strong> If you already have a trip booked, this is
          usually the fastest route — you book a cita previa at a local Oficina de
          Extranjería and attend in person.
        </p>
        <p>
          <strong>2. Apply at a Spanish consulate.</strong> If you&apos;re not travelling
          yet, most Spanish consulates process NIE applications, though appointment
          availability varies a lot by country and city.
        </p>
        <p>
          <strong>3. Apply by power of attorney.</strong> You authorize a Spanish lawyer
          to submit and collect the NIE on your behalf. This is the only route that
          requires no appointment and no travel from you at all — the trade-off is that
          you&apos;re paying for representation instead of doing the paperwork yourself.
        </p>
      </section>

      <section>
        <h2>What you need before you start, regardless of route</h2>
        <p>
          Every route needs the same core things: a valid passport, the completed EX-15
          form, and documented proof of why you need the NIE (a property reservation
          contract, job offer, or similar). See our full{' '}
          <Link href={articleHref('nie-number-documents', 'en')}>
            NIE documents checklist
          </Link>{' '}
          before you book anything, so you&apos;re not turned away for a missing paper.
        </p>
      </section>

      <section>
        <h2>If you choose the power-of-attorney route</h2>
        <p>
          You&apos;ll sign a power of attorney (in person at a notary, or remotely
          depending on your country), send copies of your documents, and your lawyer
          handles the appointment and submission. This is how Espallo&apos;s service
          works: no cita previa to chase, no trip to plan around a government
          appointment slot.
        </p>
      </section>
    </>
  ),
  faqHeading: 'Frequently asked questions',
  faq: [
    {
      question: 'Which application route is fastest?',
      answer:
        'It depends on appointment availability at the time, not the route itself. A representative with existing appointment access is often faster than booking yourself from scratch.',
    },
    {
      question: 'Can I switch routes if my first choice isn’t working?',
      answer:
        'Yes — if consulate appointments in your country are booked out for months, switching to a power-of-attorney application is a common and straightforward fallback.',
    },
    {
      question: 'Do I need a Spanish bank account before applying?',
      answer:
        'No. An NIE number is usually a prerequisite for opening a Spanish bank account, not the other way around.',
    },
    {
      question: 'Is the application process different for buying property vs. working?',
      answer:
        'The core NIE application is the same; only the supporting document proving your reason for applying changes.',
    },
  ],
  ctaHeading: 'Ready to apply?',
  ctaText:
    'Espallo applies for your NIE number through our partner lawyers in Spain, with no appointment or trip required on your part.',
  ctaButton: 'Start your NIE application',
  disclaimer:
    'Espallo is an administrative service, not a law firm. We do not provide legal advice; the partner lawyers and notaries in Spain who process your case have a direct professional relationship with you as their client.',
}

export default content
