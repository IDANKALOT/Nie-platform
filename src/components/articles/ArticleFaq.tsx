'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export type ArticleFaqItem = { question: string; answer: string }

export default function ArticleFaq({
  heading,
  items,
}: {
  heading: string
  items: ArticleFaqItem[]
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section aria-labelledby="article-faq-heading">
      <h2 id="article-faq-heading" className="text-2xl font-bold text-gray-900 mb-5">
        {heading}
      </h2>
      <div className="space-y-3">
        {items.map((faq, index) => (
          <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
            <button
              className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              aria-expanded={openIndex === index}
            >
              <span className="font-medium text-gray-900 text-sm">{faq.question}</span>
              <ChevronDown
                className={`w-4 h-4 text-gray-400 flex-shrink-0 transition-transform duration-200 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
              />
            </button>
            {openIndex === index && (
              <div className="px-5 pb-4">
                <p className="text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
