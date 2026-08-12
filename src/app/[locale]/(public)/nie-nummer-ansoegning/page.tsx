import { createArticlePage } from '@/lib/articles/createArticlePage'
import en from '@/content/articles/apply-for-nie-number/en'
import de from '@/content/articles/apply-for-nie-number/de'
import da from '@/content/articles/apply-for-nie-number/da'
import sv from '@/content/articles/apply-for-nie-number/sv'
import nl from '@/content/articles/apply-for-nie-number/nl'
import no from '@/content/articles/apply-for-nie-number/no'

const { generateStaticParams, generateMetadata, Page } = createArticlePage(
  'apply-for-nie-number',
  '/nie-nummer-ansoegning',
  { en, de, da, sv, nl, no }
)

export { generateStaticParams, generateMetadata }
export default Page
