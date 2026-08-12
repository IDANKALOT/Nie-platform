import Link from 'next/link'
import { articleHref } from '@/lib/articles/href'
import type { ArticleContent } from '../types'

const content: ArticleContent = {
  title: 'NIE Number Spain – Get Help With Your Spanish NIE',
  description:
    'Need an NIE number in Spain? Learn how the process works, what documents you need, how long it takes, and how Espallo can get it for you without a trip to Spain.',
  breadcrumbHome: 'Home',
  breadcrumbLabel: 'NIE Number Spain',
  h1: 'NIE Number Spain – Professional Help With Your NIE',
  updatedLabel: 'Last updated',
  lastUpdated: '2026-08-12',
  intro: (
    <p>
      If you&apos;re buying property, opening a bank account, working, or simply moving to
      Spain, you will need a <strong>NIE number</strong> (Número de Identificación de
      Extranjero) — the tax ID Spain issues to every foreigner it deals with. This guide
      explains what it is, who needs one, and the fastest way to get it, including how
      Espallo handles the entire process for clients who can&apos;t or don&apos;t want to
      queue at a Spanish police station themselves.
    </p>
  ),
  body: (
    <>
      <section>
        <h2>What exactly is an NIE number?</h2>
        <p>
          The NIE is a unique, permanent identification number that Spanish authorities,
          banks, notaries, and tax offices use to identify you in any official transaction.
          Unlike residency, the NIE itself doesn&apos;t grant you the right to live or work
          in Spain — it&apos;s purely an identification number, similar in function to a tax
          ID. See our full explainer on{' '}
          <Link href={articleHref('what-is-an-nie-number', 'en')}>
            what an NIE number actually is
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Who needs an NIE number?</h2>
        <p>You need an NIE if you plan to do any of the following in Spain:</p>
        <ul>
          <li>Buy or sell property</li>
          <li>Open a Spanish bank account</li>
          <li>Work as an employee or become self-employed (autónomo)</li>
          <li>Pay Spanish taxes, including non-resident property tax</li>
          <li>Buy a car, get utilities connected, or sign a long-term lease</li>
          <li>Apply for residency (TIE) as a non-EU citizen</li>
        </ul>
      </section>

      <section>
        <h2>How the process normally works</h2>
        <p>
          The standard route is to book a <em>cita previa</em> (prior appointment) at a
          designated police station (Oficina de Extranjería) or, if you&apos;re not yet in
          Spain, at the Spanish consulate in your home country. You submit the EX-15
          application form together with your passport, proof of the economic, professional
          or social reason for the request, and pay a small administrative fee (Modelo 790,
          código 012) before your NIE certificate is issued.
        </p>
        <p>
          In practice, this is where most people get stuck: consulate appointment slots can
          be booked out for months, the EX-15 form is easy to fill in incorrectly, and a
          missing or wrong document means starting the appointment process over. See our
          full{' '}
          <Link href={articleHref('how-to-get-nie-number', 'en')}>
            step-by-step guide to getting an NIE number
          </Link>{' '}
          for the complete walkthrough.
        </p>
      </section>

      <section>
        <h2>How Espallo helps</h2>
        <p>
          Espallo handles the paperwork, the appointment booking, and the submission on your
          behalf through our partner network of Spanish lawyers — including options that
          don&apos;t require you to travel to Spain or wait months for a consulate slot. You
          fill in your details online, sign digitally, and we take it from there.
        </p>
      </section>
    </>
  ),
  faqHeading: 'Frequently asked questions',
  faq: [
    {
      question: 'Can I get an NIE number without travelling to Spain?',
      answer:
        'Yes, in many cases a lawyer can apply on your behalf using a power of attorney, without you needing to be physically present at a police station or consulate.',
    },
    {
      question: 'How long does it take to get an NIE number?',
      answer:
        'It depends heavily on appointment availability. Direct applications can take a few weeks; using a representative with existing appointment access is usually faster.',
    },
    {
      question: 'Does an NIE number expire?',
      answer:
        'No, the NIE number itself never expires. The physical certificate can be reissued at any time if lost, and it stays valid even if you leave and later return to Spain.',
    },
    {
      question: 'Is an NIE the same as Spanish residency?',
      answer:
        'No. The NIE is only an identification number. Residency (and the TIE card for non-EU citizens) is a separate process that some NIE holders never need.',
    },
    {
      question: 'What documents do I need to apply?',
      answer:
        'Typically a valid passport, the completed EX-15 form, and proof of the reason for your application (e.g. a property reservation contract or job offer). See our full documents checklist.',
    },
  ],
  ctaHeading: 'Need help with your NIE number?',
  ctaText:
    'Espallo handles the application, appointment, and paperwork for international clients — including remote applications that don’t require a trip to Spain.',
  ctaButton: 'Get help with your NIE number',
  disclaimer:
    'Espallo is an administrative service, not a law firm. We do not provide legal advice; the partner lawyers and notaries in Spain who process your case have a direct professional relationship with you as their client.',
}

export default content
