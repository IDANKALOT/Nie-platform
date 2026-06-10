'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Cookie } from 'lucide-react'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent')
    if (!consent) setVisible(true)
  }, [])

  function accept() {
    localStorage.setItem('cookie_consent', 'accepted')
    setVisible(false)
  }

  function decline() {
    localStorage.setItem('cookie_consent', 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <div className="max-w-2xl mx-auto bg-white border border-gray-200 rounded-2xl shadow-lg p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <Cookie className="w-6 h-6 text-amber-500 shrink-0 mt-0.5 sm:mt-0" />
        <div className="flex-1 text-sm text-gray-600">
          Vi bruger cookies til at forbedre din oplevelse og analysere vores trafik.{' '}
          <Link href="/cookiepolitik" className="underline hover:text-gray-900">
            Læs vores cookiepolitik
          </Link>
          .
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <Button variant="outline" size="sm" onClick={decline}>Afvis</Button>
          <Button size="sm" onClick={accept} style={{ backgroundColor: '#1B3A6B' }}>
            Accepter
          </Button>
        </div>
      </div>
    </div>
  )
}
