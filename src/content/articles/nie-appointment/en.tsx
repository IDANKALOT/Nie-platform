import Link from 'next/link'
import { articleHref } from '@/lib/articles/href'
import type { ArticleContent } from '../types'

const content: ArticleContent = {
  title: 'How to Get an NIE Appointment in Spain',
  description:
    'How the cita previa booking system for NIE appointments actually works, why slots are so hard to find, and practical tips for getting one.',
  breadcrumbHome: 'Home',
  breadcrumbLabel: 'NIE Appointment',
  h1: 'How to Get an NIE Appointment in Spain',
  updatedLabel: 'Last updated',
  lastUpdated: '2026-08-12',
  intro: (
    <p>
      The <em>cita previa</em> (prior appointment) system is the single most common
      obstacle in the entire NIE process — more than the paperwork, more than the
      form itself. Here&apos;s how the booking system works and what actually helps.
    </p>
  ),
  body: (
    <>
      <section>
        <h2>How the booking system works</h2>
        <p>
          Appointments are booked through Spain&apos;s official online system, tied to a
          specific office (a police station&apos;s Oficina de Extranjería, or a consulate
          if you&apos;re abroad — see our page on{' '}
          <Link href={articleHref('nie-from-abroad', 'en')}>
            applying from abroad
          </Link>
          ). You select a province and office, then a purpose (NIE), and the system
          shows available slots — if there are any.
        </p>
      </section>

      <section>
        <h2>Why slots are so hard to find</h2>
        <p>
          Demand at popular offices (major cities, coastal areas with high numbers of
          foreign property buyers) regularly outstrips the number of daily slots
          released. There&apos;s no waitlist and no way to reserve a slot in advance beyond
          what the system shows — appointments open up when the system releases them,
          often at a fixed time of day, and get taken within minutes.
        </p>
      </section>

      <section>
        <h2>Practical tips</h2>
        <ul>
          <li>Check regularly rather than once — slots open up as others cancel</li>
          <li>
            Some regions or smaller offices have shorter waits than the busiest
            provincial capitals
          </li>
          <li>
            Have your documents ready before you book, so you don&apos;t need to reschedule
            if something&apos;s missing
          </li>
          <li>
            If the wait is unworkable for your timeline, a representative with
            existing appointment access removes the problem entirely
          </li>
        </ul>
      </section>
    </>
  ),
  faqHeading: 'Frequently asked questions',
  faq: [
    {
      question: 'Can I book an NIE appointment at any office, not just my local one?',
      answer:
        'In Spain, you can generally book at any Oficina de Extranjería with available slots, not only the one nearest you — some applicants book at less busy offices in other provinces.',
    },
    {
      question: 'What time of day do new appointment slots usually appear?',
      answer:
        'This varies by office and changes over time; there’s no single reliable schedule, which is part of why the system is frustrating to use.',
    },
    {
      question: 'Can someone else book the appointment for me?',
      answer:
        'Yes — a representative can book and attend on your behalf with a power of attorney, without you needing to use the booking system yourself.',
    },
    {
      question: 'What happens if I miss my appointment?',
      answer:
        'You lose the slot and need to book again from scratch — there is generally no rescheduling within the system itself.',
    },
  ],
  ctaHeading: 'Tired of refreshing the booking page?',
  ctaText:
    'Espallo already has appointment access through our partner lawyers in Spain — no refreshing, no missed slots.',
  ctaButton: 'Skip the appointment hunt',
  disclaimer:
    'Espallo is an administrative service, not a law firm. We do not provide legal advice; the partner lawyers and notaries in Spain who process your case have a direct professional relationship with you as their client.',
}

export default content
