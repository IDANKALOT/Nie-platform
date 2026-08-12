import Link from 'next/link'
import { articleHref } from '@/lib/articles/href'
import type { ArticleContent } from '../types'

const content: ArticleContent = {
  title: 'What Is an NIE Number in Spain?',
  description:
    'A plain-English explanation of the Spanish NIE number: what it looks like, who issues it, how it differs from residency, and why almost every foreigner in Spain needs one.',
  breadcrumbHome: 'Home',
  breadcrumbLabel: 'What Is an NIE Number',
  h1: 'What Is an NIE Number in Spain?',
  updatedLabel: 'Last updated',
  lastUpdated: '2026-08-12',
  intro: (
    <p>
      NIE stands for <strong>Número de Identificación de Extranjero</strong> — literally
      &quot;Foreigner Identification Number.&quot; It&apos;s the number Spain assigns to
      every non-Spaniard it needs to identify for legal, financial, or administrative
      purposes, and it&apos;s one of the first things almost anyone dealing with Spain
      ends up needing.
    </p>
  ),
  body: (
    <>
      <section>
        <h2>What does an NIE number look like?</h2>
        <p>
          It&apos;s a short alphanumeric code — a letter, seven digits, and a final
          check letter, for example <code>X1234567Z</code>. Spanish citizens have an
          equivalent number on their national ID (DNI); the NIE is the foreigner
          equivalent, issued once and never reused.
        </p>
      </section>

      <section>
        <h2>Who issues it, and what does the certificate look like?</h2>
        <p>
          The NIE is issued by the Spanish Ministry of the Interior, via the Policía
          Nacional (Oficina de Extranjería) inside Spain, or via Spanish consulates
          abroad. Once approved, you receive a white A4 certificate (the{' '}
          <em>certificado de asignación de NIE</em>) stating your number, your name,
          and the reason it was issued. This piece of paper — not a card — is the
          official proof of your NIE.
        </p>
      </section>

      <section>
        <h2>NIE vs residency — the most common confusion</h2>
        <p>
          Having an NIE does not mean you are a legal resident of Spain, and it does not
          grant a visa or work permit. It&apos;s purely an identification number used in
          transactions — buying property, opening a bank account, signing a contract,
          paying tax. EU citizens who move to Spain long-term separately register on
          the EU citizen registry; non-EU citizens who want to live in Spain apply for
          the TIE residence card. Both processes typically require an NIE first, but the
          NIE itself is not proof of residency.
        </p>
      </section>

      <section>
        <h2>Why almost everyone dealing with Spain needs one</h2>
        <p>
          Spanish banks, notaries, tax offices (Agencia Tributaria), utility companies,
          and property registries all use the NIE as the primary identifier for
          foreigners. Without it, you legally cannot complete transactions like buying
          a home or registering a company, even as a non-resident. For the full list of
          situations where you&apos;ll be asked for it, see our guide to{' '}
          <Link href={articleHref('nie-number-spain', 'en')}>
            getting an NIE number in Spain
          </Link>
          .
        </p>
      </section>
    </>
  ),
  faqHeading: 'Frequently asked questions',
  faq: [
    {
      question: 'Is NIE the same as a tax number?',
      answer:
        'Functionally yes for most purposes — the NIE also serves as your NIF (tax identification number) for foreigners once assigned.',
    },
    {
      question: 'Can two people have the same NIE number?',
      answer:
        'No. Each NIE is unique and permanently tied to one individual, even if you never return to Spain after receiving it.',
    },
    {
      question: 'Do children need an NIE number?',
      answer:
        'Yes, if they will be named on a property deed, bank account, or other official document, minors need their own NIE number too.',
    },
    {
      question: 'Is the NIE certificate the same as the old NIE card?',
      answer:
        'No. Spain used to issue a physical NIE card; today you receive a white A4 paper certificate instead. Older cards issued before the change remain valid as proof of the number.',
    },
  ],
  ctaHeading: 'Ready to apply for your NIE number?',
  ctaText:
    'Espallo handles the full application on your behalf, including cases where you never need to set foot in Spain.',
  ctaButton: 'Start your NIE application',
  disclaimer:
    'Espallo is an administrative service, not a law firm. We do not provide legal advice; the partner lawyers and notaries in Spain who process your case have a direct professional relationship with you as their client.',
}

export default content
