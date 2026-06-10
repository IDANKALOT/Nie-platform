'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Mail, Phone, Clock, Send } from 'lucide-react'
import { toast } from 'sonner'

export default function Contact() {
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    // Simulate send
    await new Promise((r) => setTimeout(r, 1000))
    setLoading(false)
    toast.success('Tak for din besked! Vi vender tilbage inden for 24 timer.')
    ;(e.target as HTMLFormElement).reset()
  }

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: '#2D8E6C' }}>
            Kontakt
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">
            Tag fat i os
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Har du spørgsmål? Vi er klar til at hjælpe.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact info */}
          <div className="space-y-6">
            <h3 className="font-semibold text-gray-900 text-lg">Kontaktoplysninger</h3>

            {[
              {
                icon: Mail,
                title: 'E-mail',
                value: 'info@nienummerservice.dk',
                href: 'mailto:info@nienummerservice.dk',
              },
              {
                icon: Phone,
                title: 'Telefon',
                value: '+45 12 34 56 78',
                href: 'tel:+4512345678',
              },
              {
                icon: Clock,
                title: 'Åbningstider',
                value: 'Mandag–fredag: 9:00–17:00',
                href: null,
              },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: '#EBF0FF' }}
                >
                  <item.icon className="w-5 h-5" style={{ color: '#1B3A6B' }} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-0.5">{item.title}</p>
                  {item.href ? (
                    <a href={item.href} className="text-sm font-medium text-gray-800 hover:underline">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium text-gray-800">{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            <div
              className="mt-8 p-5 rounded-xl"
              style={{ backgroundColor: '#F0F4FF', border: '1px solid #D6E0FF' }}
            >
              <p className="text-sm font-semibold" style={{ color: '#1B3A6B' }}>
                Klar til at starte?
              </p>
              <p className="text-sm text-gray-600 mt-1 mb-4">
                Opret en konto og begynd din NIE-ansøgning i dag.
              </p>
              <a href="/register">
                <Button size="sm" style={{ backgroundColor: '#1B3A6B' }}>
                  Start ansøgning
                </Button>
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="contact-name">Navn</Label>
                  <Input id="contact-name" placeholder="Dit fulde navn" required />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="contact-email">E-mail</Label>
                  <Input id="contact-email" type="email" placeholder="din@email.dk" required />
                </div>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="contact-subject">Emne</Label>
                <Input id="contact-subject" placeholder="Hvad drejer din henvendelse sig om?" required />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="contact-message">Besked</Label>
                <Textarea
                  id="contact-message"
                  placeholder="Skriv din besked her..."
                  rows={5}
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full h-11"
                disabled={loading}
                style={{ backgroundColor: '#1B3A6B' }}
              >
                {loading ? (
                  'Sender...'
                ) : (
                  <>
                    Send besked
                    <Send className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
