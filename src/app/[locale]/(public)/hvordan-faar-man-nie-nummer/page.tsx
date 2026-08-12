import { createArticlePage } from '@/lib/articles/createArticlePage'
import en from '@/content/articles/how-to-get-nie-number/en'
import de from '@/content/articles/how-to-get-nie-number/de'
import da from '@/content/articles/how-to-get-nie-number/da'
import sv from '@/content/articles/how-to-get-nie-number/sv'
import nl from '@/content/articles/how-to-get-nie-number/nl'
import no from '@/content/articles/how-to-get-nie-number/no'

const { generateStaticParams, generateMetadata, Page } = createArticlePage(
  'how-to-get-nie-number',
  '/hvordan-faar-man-nie-nummer',
  { en, de, da, sv, nl, no }
)

export { generateStaticParams, generateMetadata }
export default Page
