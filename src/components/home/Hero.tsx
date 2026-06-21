import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, CheckCircle2, Clock, Shield } from 'lucide-react'

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #1B3A6B 0%, #2A5298 50%, #1B3A6B 100%)',
      }}
    >
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 text-center">
        {/* Trust badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-8">
          <Shield className="w-3.5 h-3.5 text-green-400" />
          <span className="text-white/90 text-xs font-medium">
            Administrativ service — ikke et advokatfirma
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 max-w-4xl mx-auto">
          Få dit spanske{' '}
          <span className="relative inline-block">
            <span className="relative z-10">NIE-nummer</span>
            <span
              className="absolute inset-x-0 bottom-1 h-3 -z-10 rounded"
              style={{ backgroundColor: 'rgba(45, 142, 108, 0.5)' }}
            />
          </span>{' '}
          nemt og sikkert
        </h1>

        <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          Vi håndterer hele ansøgningsprocessen for dig — fra udfyldelse af formularer til
          behandling hos spanske myndigheder. Du behøver ikke rejse til Spanien.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
          <Link href="/register">
            <Button
              size="lg"
              className="text-base px-8 h-12 font-semibold shadow-lg hover:shadow-xl transition-all"
              style={{ backgroundColor: '#2D8E6C', color: 'white' }}
            >
              Start ansøgning nu
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
          <a href="#how-it-works">
            <Button
              size="lg"
              variant="outline"
              className="text-base px-8 h-12 border-white/30 text-white hover:bg-white/10 hover:text-white bg-transparent"
            >
              Se hvordan det fungerer
            </Button>
          </a>
        </div>

        {/* Trust indicators */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          {[
            { icon: CheckCircle2, text: 'Fast pris – 215 EUR' },
            { icon: Clock, text: 'Svar inden for 48 timer' },
            { icon: Shield, text: 'GDPR-kompatibel behandling' },
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-2 text-white/70">
              <item.icon className="w-4 h-4 text-green-400 flex-shrink-0" />
              <span className="text-sm">{item.text}</span>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="mt-12 max-w-xl mx-auto border-t border-white/10 pt-8">
          <p className="text-xs text-white/45 leading-relaxed">
            NIE Spanien er et administrativt servicebureau og ikke et advokatfirma. Vi yder ikke juridisk rådgivning.
            Vores samarbejdende advokater og notarer i Spanien er selvstændige og har et direkte retsforhold med dig som kunde.
          </p>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 80L1440 80L1440 40C1200 0 900 80 720 40C540 0 240 80 0 40L0 80Z"
            fill="white"
            fillOpacity="0.03"
          />
          <path
            d="M0 80L1440 80L1440 50C1200 20 900 80 720 50C540 20 240 80 0 50L0 80Z"
            fill="#F9FAFB"
          />
        </svg>
      </div>
    </section>
  )
}
