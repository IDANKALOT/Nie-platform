'use client'

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { CreditCard, ArrowRight, Loader2 } from 'lucide-react'

export default function PaymentStatCard({
  applicationId,
  label,
  value,
}: {
  applicationId: string
  label: string
  value: string
}) {
  const [loading, setLoading] = useState(false)

  async function handleClick() {
    setLoading(true)
    try {
      const res = await fetch('/api/stripe/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ applicationId }),
      })
      const data = await res.json()
      if (data.url) {
        window.location.href = data.url
      } else {
        setLoading(false)
      }
    } catch {
      setLoading(false)
    }
  }

  return (
    <Card
      className="bg-white hover:shadow-md transition-shadow cursor-pointer"
      onClick={handleClick}
    >
      <CardContent className="pt-5 pb-4">
        <div className="flex items-center justify-between mb-2">
          {loading ? (
            <Loader2 className="w-5 h-5 text-gray-400 animate-spin" />
          ) : (
            <CreditCard className="w-5 h-5 text-gray-400" />
          )}
          <ArrowRight className="w-4 h-4 text-gray-300" />
        </div>
        <p className="text-xs text-gray-400">{label}</p>
        <p className="font-semibold text-gray-900 mt-0.5">{value}</p>
      </CardContent>
    </Card>
  )
}
