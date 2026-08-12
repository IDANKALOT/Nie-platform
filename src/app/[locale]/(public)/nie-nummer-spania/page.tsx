import { createArticlePage } from '@/lib/articles/createArticlePage'
import en from '@/content/articles/nie-number-spain/en'
import de from '@/content/articles/nie-number-spain/de'
import da from '@/content/articles/nie-number-spain/da'
import sv from '@/content/articles/nie-number-spain/sv'
import nl from '@/content/articles/nie-number-spain/nl'
import no from '@/content/articles/nie-number-spain/no'

const { generateStaticParams, generateMetadata, Page } = createArticlePage(
  'nie-number-spain',
  '/nie-nummer-spania',
  { en, de, da, sv, nl, no }
)

export { generateStaticParams, generateMetadata }
export default Page
