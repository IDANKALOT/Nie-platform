'use client'

import { useState } from 'react'
import { Link, usePathname } from '@/i18n/navigation'
import { Button } from '@/components/ui/button'
import { Globe, X } from 'lucide-react'

interface Props {
  text: string
  switchLabel: string
  dismissLabel: string
}

export default function GeoLanguageBannerClient({ text, switchLabel, dismissLabel }: Props) {
  const [dismissed, setDismissed] = useState(false)
  const pathname = usePathname()

  function dismiss() {
    document.cookie = 'geo_banner_dismissed=1; path=/; max-age=' + 60 * 60 * 24 * 365
    setDismissed(true)
  }

  if (dismissed) return null

  return (
    <div className="fixed top-16 inset-x-0 z-40 bg-blue-50 border-b border-blue-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-sm text-blue-900">
          <Globe className="w-4 h-4 shrink-0" />
          <span>{text}</span>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <Link href={pathname} locale="en" onClick={dismiss}>
            <Button size="sm" variant="outline" className="h-7 text-xs bg-white">
              {switchLabel}
            </Button>
          </Link>
          <button
            onClick={dismiss}
            aria-label={dismissLabel}
            className="text-blue-400 hover:text-blue-600 p-1"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
