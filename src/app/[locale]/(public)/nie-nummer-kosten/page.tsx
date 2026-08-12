import { createArticlePage } from '@/lib/articles/createArticlePage'
import en from '@/content/articles/nie-number-cost/en'
import de from '@/content/articles/nie-number-cost/de'
import da from '@/content/articles/nie-number-cost/da'
import sv from '@/content/articles/nie-number-cost/sv'
import nl from '@/content/articles/nie-number-cost/nl'
import no from '@/content/articles/nie-number-cost/no'

const { generateStaticParams, generateMetadata, Page } = createArticlePage(
  'nie-number-cost',
  '/nie-nummer-kosten',
  { en, de, da, sv, nl, no }
)

export { generateStaticParams, generateMetadata }
export default Page
