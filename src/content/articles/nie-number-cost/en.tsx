import Link from 'next/link'
import { articleHref } from '@/lib/articles/href'
import type { ArticleContent } from '../types'

const content: ArticleContent = {
  title: 'How Much Does an NIE Number Cost in Spain?',
  description:
    'The difference between the official government fee for an NIE number and the cost of using a service to handle the whole application for you.',
  breadcrumbHome: 'Home',
  breadcrumbLabel: 'NIE Number Cost',
  h1: 'How Much Does an NIE Number Cost in Spain?',
  updatedLabel: 'Last updated',
  lastUpdated: '2026-08-12',
  intro: (
    <p>
      There are two separate costs people mean when they ask about NIE pricing, and
      mixing them up is where most confusion comes from: the small official government
      fee, and the (optional) cost of paying someone to handle the application for you.
    </p>
  ),
  body: (
    <>
      <section>
        <h2>The official government fee</h2>
        <p>
          Applying for an NIE requires paying a fixed administrative tax, Modelo 790
          código 012, directly to the Spanish tax authority (Agencia Tributaria) — it&apos;s
          a modest, government-set amount, unrelated to property value, income, or
          nationality. This fee doesn&apos;t change based on whether you apply yourself or
          through a representative; it&apos;s paid either way.
        </p>
      </section>

      <section>
        <h2>What a service like Espallo actually charges for</h2>
        <p>
          The fee you pay a service isn&apos;t for the NIE itself — it&apos;s for the work of
          getting the appointment, preparing the EX-15 correctly, submitting on your
          behalf, and not having to travel to do it. Espallo charges a single fixed
          price of 215 EUR per application, covering the full process end to end,
          including cases handled entirely without you setting foot in Spain.
        </p>
      </section>

      <section>
        <h2>Is it worth paying for help?</h2>
        <p>
          If you&apos;re already in Spain, comfortable with Spanish bureaucracy, and can get
          a cita previa easily, doing it yourself costs only the government fee. If
          you&apos;re abroad, on a tight timeline (for example a property completion date),
          or have already had an application rejected once, the time saved from not
          re-booking appointments or resubmitting forms is usually what people are
          actually paying for. See our{' '}
          <Link href={articleHref('how-to-get-nie-number', 'en')}>
            step-by-step guide
          </Link>{' '}
          to judge how much of the process you&apos;re comfortable doing alone.
        </p>
      </section>
    </>
  ),
  faqHeading: 'Frequently asked questions',
  faq: [
    {
      question: 'Do I pay the government fee even if I use a service?',
      answer:
        'Yes. The Modelo 790 código 012 fee is paid to the Spanish tax authority regardless of who submits your application — it is separate from any service fee.',
    },
    {
      question: 'Does the NIE cost more for property buyers than other applicants?',
      answer:
        'No, the government fee is the same regardless of why you need the NIE.',
    },
    {
      question: 'Are there hidden costs in the application process?',
      answer:
        'The main extra cost to budget for is document preparation — certified translations or apostilles, if any of your documents require them, which vary in price by provider.',
    },
    {
      question: "What's included in Espallo's fixed price?",
      answer:
        'The full application process: form preparation, appointment handling, submission, and follow-up until your NIE certificate is issued — no separate fees per step.',
    },
  ],
  ctaHeading: 'Know the price upfront',
  ctaText:
    'Espallo charges one fixed price of 215 EUR for the full NIE application — no hourly billing, no surprise fees.',
  ctaButton: 'Get your NIE number',
  disclaimer:
    'Espallo is an administrative service, not a law firm. We do not provide legal advice; the partner lawyers and notaries in Spain who process your case have a direct professional relationship with you as their client.',
}

export default content
