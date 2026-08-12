import Link from 'next/link'
import { articleHref } from '@/lib/articles/href'
import type { ArticleContent } from '../types'

const content: ArticleContent = {
  title: 'How Long Does It Take to Get an NIE Number?',
  description:
    'What actually determines NIE processing time — appointment availability, not paperwork — and how to plan around it if you have a deadline.',
  breadcrumbHome: 'Home',
  breadcrumbLabel: 'NIE Processing Time',
  h1: 'How Long Does It Take to Get an NIE Number?',
  updatedLabel: 'Last updated',
  lastUpdated: '2026-08-12',
  intro: (
    <p>
      There&apos;s no fixed processing time for an NIE number, because the paperwork itself
      is fast — what varies wildly is how long it takes to get an appointment in the
      first place. Anyone giving you an exact number of days without knowing your
      location and route is guessing.
    </p>
  ),
  body: (
    <>
      <section>
        <h2>What actually determines the timeline</h2>
        <p>
          Once you&apos;re sitting in front of an official with the correct documents, the
          NIE itself is usually issued the same day or within a few days. The real
          variable is the wait to get to that appointment: busy police stations and
          consulates can be booked out anywhere from a few days to several months,
          depending on location and season. See our{' '}
          <Link href={articleHref('how-to-get-nie-number', 'en')}>
            step-by-step guide
          </Link>{' '}
          for where in the process this bottleneck sits.
        </p>
      </section>

      <section>
        <h2>What speeds it up, and what slows it down</h2>
        <p>
          Correct, complete documents on the first attempt avoid the biggest delay:
          having to re-book after a rejection. A representative with existing
          appointment access — rather than booking cold — is usually faster than doing
          it yourself from scratch. Peak season for property purchases and expat
          relocations (spring and early autumn in many areas) tends to mean longer
          waits at popular offices.
        </p>
      </section>

      <section>
        <h2>If you have a hard deadline</h2>
        <p>
          If you&apos;re working against a fixed date — a property completion, a job start
          date — don&apos;t wait to see if a slot opens up on its own. Start the process as
          early as possible, and consider a representative with existing appointment
          access as a way to remove the biggest uncertainty from your timeline.
        </p>
      </section>
    </>
  ),
  faqHeading: 'Frequently asked questions',
  faq: [
    {
      question: 'Can I pay extra to get my NIE faster?',
      answer:
        'There is no official expedited service. Speed comes from appointment access and getting your documents right the first time, not from paying a premium fee.',
    },
    {
      question: 'Does applying by power of attorney speed things up?',
      answer:
        'It can, mainly because a representative may already have appointment access that would otherwise take you weeks to find on your own.',
    },
    {
      question: 'What’s the single biggest cause of delay?',
      answer:
        'Appointment availability, by a wide margin — not the paperwork itself, which is processed quickly once submitted correctly.',
    },
    {
      question: 'Is processing slower for certain nationalities?',
      answer:
        'No, the process and typical timeline are the same regardless of nationality.',
    },
  ],
  ctaHeading: 'Working against a deadline?',
  ctaText:
    'Espallo applies for your NIE number using our existing appointment access, so you’re not stuck waiting for a slot to open up.',
  ctaButton: 'Start your NIE application now',
  disclaimer:
    'Espallo is an administrative service, not a law firm. We do not provide legal advice; the partner lawyers and notaries in Spain who process your case have a direct professional relationship with you as their client.',
}

export default content
