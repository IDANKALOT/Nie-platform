'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'Hvad er et NIE-nummer?',
    answer:
      'NIE (Número de Identificación de Extranjero) er et spansk identifikationsnummer for udlændinge. Det er påkrævet for alle, der ønsker at købe ejendom, åbne bankkonto, arbejde eller investere i Spanien.',
  },
  {
    question: 'Behøver jeg at rejse til Spanien?',
    answer:
      'Nej. Gennem vores service kan hele processen håndteres digitalt fra Danmark. Du giver en fuldmagt til vores samarbejdende advokater, som derefter repræsenterer dig over for de spanske myndigheder.',
  },
  {
    question: 'Hvor lang tid tager det at få et NIE-nummer?',
    answer:
      'Den typiske behandlingstid er 4-8 uger, afhængigt af de spanske myndigheders sagsbehandlingstid. Vi holder dig løbende opdateret om status.',
  },
  {
    question: 'Hvad er inkluderet i prisen på 215 EUR?',
    answer:
      'Vores servicepris dækker: digital formularudfyldelse, digital underskrift, dokumentgenerering, koordinering med advokat og status-opdateringer. Advokat-, notar- og myndighedsgebyrer i Spanien betales direkte af dig og er ikke inkluderet.',
  },
  {
    question: 'Hvilke dokumenter skal jeg bruge?',
    answer:
      'Du skal primært bruge et gyldigt pas. Afhængigt af formålet med NIE-nummeret kan der være behov for yderligere dokumentation, som vi vejleder dig om undervejs.',
  },
  {
    question: 'Er mine personlige data sikre?',
    answer:
      'Ja. Vi overholder GDPR-reglerne fuldt ud. Dine data opbevares krypteret og deles kun med de nødvendige parter (advokat/notar) for at behandle din ansøgning.',
  },
  {
    question: 'Kan jeg følge min sags status?',
    answer:
      'Ja. Via dit personlige dashboard kan du til enhver tid se status på din sag, downloade dokumenter og læse opdateringer fra os.',
  },
  {
    question: 'Hvad sker der, hvis min ansøgning afvises?',
    answer:
      'Afvisninger er sjældne, men hvis det sker, hjælper vi dig gratis med at finde ud af årsagen og indsende en ny ansøgning.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: '#2D8E6C' }}>
            Spørgsmål & svar
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">
            Ofte stillede spørgsmål
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl overflow-hidden"
            >
              <button
                className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium text-gray-900 text-sm">{faq.question}</span>
                <ChevronDown
                  className={`w-4 h-4 text-gray-400 flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
