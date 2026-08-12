import { Link } from '@/i18n/navigation'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

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
      style={{ backgroundColor: '#F0F4FF', border: '1px solid #D6E0FF' }}
    >
      <p className="text-lg font-semibold" style={{ color: '#1B3A6B' }}>
        {heading}
      </p>
      <p className="text-sm text-gray-600 mt-2 mb-5 max-w-2xl">{text}</p>
      <Link href="/register">
        <Button style={{ backgroundColor: '#1B3A6B' }}>
          {button}
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </Link>
    </div>
  )
}
