import { createArticlePage } from '@/lib/articles/createArticlePage'
import en from '@/content/articles/nie-appointment/en'
import de from '@/content/articles/nie-appointment/de'
import da from '@/content/articles/nie-appointment/da'
import sv from '@/content/articles/nie-appointment/sv'
import nl from '@/content/articles/nie-appointment/nl'
import no from '@/content/articles/nie-appointment/no'

const { generateStaticParams, generateMetadata, Page } = createArticlePage(
  'nie-appointment',
  '/nie-time-spania',
  { en, de, da, sv, nl, no }
)

export { generateStaticParams, generateMetadata }
export default Page
