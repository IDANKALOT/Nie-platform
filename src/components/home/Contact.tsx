'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Mail, Phone, Clock, Send } from 'lucide-react'
import { toast } from 'sonner'

export default function Contact() {
  const t = useTranslations('home.contact')
  const [loading, setLoading] = useState(false)

  const contactItems = [
    {
      icon: Mail,
      title: t('emailLabel'),
      value: 'info@espallo.com',
      href: 'mailto:info@espallo.com',
    },
    {
      icon: Phone,
      title: t('phoneLabel'),
      value: '+34 603 527 252',
      href: 'tel:+34603527252',
    },
    {
      icon: Clock,
      title: t('hoursLabel'),
      value: t('hoursValue'),
      href: null,
    },
  ]

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    // Simulate send
    await new Promise((r) => setTimeout(r, 1000))
    setLoading(false)
    toast.success(t('toastSuccess'))
    ;(e.target as HTMLFormElement).reset()
  }

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: '#2D8E6C' }}>
            {t('eyebrow')}
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">
            {t('heading')}
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            {t('subheading')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact info */}
          <div className="space-y-6">
            <h3 className="font-semibold text-gray-900 text-lg">{t('infoHeading')}</h3>

            {contactItems.map((item) => (
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
                {t('ctaBoxTitle')}
              </p>
              <p className="text-sm text-gray-600 mt-1 mb-4">
                {t('ctaBoxText')}
              </p>
              <a href="/register">
                <Button size="sm" style={{ backgroundColor: '#1B3A6B' }}>
                  {t('ctaBoxButton')}
                </Button>
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="contact-name">{t('formNameLabel')}</Label>
                  <Input id="contact-name" placeholder={t('formNamePlaceholder')} required />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="contact-email">{t('formEmailLabel')}</Label>
                  <Input id="contact-email" type="email" placeholder={t('formEmailPlaceholder')} required />
                </div>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="contact-subject">{t('formSubjectLabel')}</Label>
                <Input id="contact-subject" placeholder={t('formSubjectPlaceholder')} required />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="contact-message">{t('formMessageLabel')}</Label>
                <Textarea
                  id="contact-message"
                  placeholder={t('formMessagePlaceholder')}
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
                  t('formSubmitting')
                ) : (
                  <>
                    {t('formSubmit')}
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
