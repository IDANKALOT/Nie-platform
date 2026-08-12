import { createArticlePage } from '@/lib/articles/createArticlePage'
import en from '@/content/articles/nie-without-travelling/en'
import de from '@/content/articles/nie-without-travelling/de'
import da from '@/content/articles/nie-without-travelling/da'
import sv from '@/content/articles/nie-without-travelling/sv'
import nl from '@/content/articles/nie-without-travelling/nl'
import no from '@/content/articles/nie-without-travelling/no'

const { generateStaticParams, generateMetadata, Page } = createArticlePage(
  'nie-without-travelling',
  '/nie-nummer-ohne-nach-spanien-zu-reisen',
  { en, de, da, sv, nl, no }
)

export { generateStaticParams, generateMetadata }
export default Page
