import { Users, Award, Globe, HeartHandshake } from 'lucide-react'

const values = [
  {
    icon: Award,
    title: 'Ekspertise',
    description: 'Over 6 års erfaring med spanske NIE-ansøgninger for danske kunder.',
  },
  {
    icon: Globe,
    title: 'Lokalt netværk',
    description: 'Samarbejde med godkendte advokater og notarer direkte i Spanien.',
  },
  {
    icon: Users,
    title: 'Personlig service',
    description: 'Dedikeret dansk kundesupport gennem hele processen.',
  },
  {
    icon: HeartHandshake,
    title: 'Tillid',
    description: 'GDPR-kompatibel håndtering af dine personlige oplysninger.',
  },
]

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Text */}
          <div>
            <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: '#2D8E6C' }}>
              Om os
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
              Din betroede partner til spanske NIE-ansøgninger
            </h2>
            <p className="mt-5 text-gray-500 leading-relaxed">
              NIE Spanien er en dansk virksomhed specialiseret i at hjælpe danskere med at
              navigere i det spanske bureaukrati. Vi forstår, at det kan være komplekst og tidskrævende
              at ansøge om et spansk NIE-nummer på egen hånd.
            </p>
            <p className="mt-4 text-gray-500 leading-relaxed">
              Gennem vores etablerede netværk af kvalificerede advokater og notarer i Spanien sikrer
              vi, at din ansøgning behandles korrekt og effektivt – uden at du behøver at rejse
              til Spanien.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { number: '2.400+', label: 'Behandlede sager' },
                { number: '98%', label: 'Tilfredse kunder' },
                { number: '48t', label: 'Gennemsnitlig svartid' },
                { number: '6+', label: 'År i branchen' },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-4 rounded-xl" style={{ backgroundColor: '#F5F7FA' }}>
                  <div className="text-2xl font-bold" style={{ color: '#1B3A6B' }}>{stat.number}</div>
                  <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Values grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {values.map((value) => (
              <div
                key={value.title}
                className="p-6 rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
                  style={{ backgroundColor: '#EBF0FF' }}
                >
                  <value.icon className="w-5 h-5" style={{ color: '#1B3A6B' }} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{value.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
