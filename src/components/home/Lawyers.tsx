import { MapPin, Mail, Star } from 'lucide-react'

const lawyers = [
  {
    name: 'García & Asociados',
    city: 'Madrid',
    specialization: 'NIE-ansøgninger, ejendomshandler',
    rating: 5,
    description: 'Erfaret advokatfirma med over 15 års erfaring i hjælp til udlændinge i Spanien.',
  },
  {
    name: 'López Notaría',
    city: 'Barcelona',
    specialization: 'Notariale services, NIE',
    rating: 5,
    description: 'Anerkendt notarkontor i Barcelona med specialisering i internationale klienter.',
  },
  {
    name: 'Martínez Legal',
    city: 'Málaga',
    specialization: 'NIE, residency, ejendom',
    rating: 5,
    description: 'Lokalt advokatfirma på Costa del Sol med stærk erfaring i danske klienters behov.',
  },
  {
    name: 'Fernández & Partners',
    city: 'Valencia',
    specialization: 'NIE-ansøgninger, skatteret',
    rating: 5,
    description: 'Flersprogede advokater med dansk-talende medarbejdere og hurtig sagsbehandling.',
  },
]

export default function Lawyers() {
  return (
    <section id="lawyers" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: '#2D8E6C' }}>
            Vores netværk
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">
            Samarbejdende advokater i Spanien
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-xl mx-auto">
            Vi arbejder udelukkende med godkendte og erfarne advokater og notarer i de
            vigtigste spanske byer.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {lawyers.map((lawyer) => (
            <div
              key={lawyer.name}
              className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-md transition-shadow"
            >
              {/* Avatar placeholder */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg mb-4"
                style={{ backgroundColor: '#1B3A6B' }}
              >
                {lawyer.name[0]}
              </div>

              <div className="flex items-center gap-0.5 mb-2">
                {Array.from({ length: lawyer.rating }).map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <h3 className="font-semibold text-gray-900 text-sm mb-1">{lawyer.name}</h3>

              <div className="flex items-center gap-1 text-xs text-gray-400 mb-3">
                <MapPin className="w-3 h-3" />
                {lawyer.city}
              </div>

              <p className="text-xs text-gray-500 leading-relaxed mb-3">{lawyer.description}</p>

              <span
                className="inline-block text-xs px-2 py-1 rounded-md"
                style={{ backgroundColor: '#EBF5F0', color: '#2D8E6C' }}
              >
                {lawyer.specialization}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
