import { Link } from '@/i18n/navigation'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { PURPLE, PURPLE_PILL_BG } from '@/lib/theme'

export default function ArticleCta({
  heading,
  text,
  button,
}: {
  heading: string
  text: string
  button: string
}) {
  return (
    <div
      className="rounded-2xl p-6 sm:p-8 not-prose"
      style={{ backgroundColor: PURPLE_PILL_BG, border: '1px solid #DCD3FF' }}
    >
      <p className="text-lg font-semibold" style={{ color: PURPLE }}>
        {heading}
      </p>
      <p className="text-sm text-gray-600 mt-2 mb-5 max-w-2xl">{text}</p>
      <Link href="/register">
        <Button style={{ backgroundColor: PURPLE }}>
          {button}
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </Link>
    </div>
  )
}
