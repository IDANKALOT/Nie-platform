import { createArticlePage } from '@/lib/articles/createArticlePage'
import en from '@/content/articles/what-is-an-nie-number/en'
import de from '@/content/articles/what-is-an-nie-number/de'
import da from '@/content/articles/what-is-an-nie-number/da'
import sv from '@/content/articles/what-is-an-nie-number/sv'
import nl from '@/content/articles/what-is-an-nie-number/nl'
import no from '@/content/articles/what-is-an-nie-number/no'

const { generateStaticParams, generateMetadata, Page } = createArticlePage(
  'what-is-an-nie-number',
  '/hva-er-nie-nummer',
  { en, de, da, sv, nl, no }
)

export { generateStaticParams, generateMetadata }
export default Page
