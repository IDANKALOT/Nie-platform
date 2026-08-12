import { createArticlePage } from '@/lib/articles/createArticlePage'
import en from '@/content/articles/nie-number-documents/en'
import de from '@/content/articles/nie-number-documents/de'
import da from '@/content/articles/nie-number-documents/da'
import sv from '@/content/articles/nie-number-documents/sv'
import nl from '@/content/articles/nie-number-documents/nl'
import no from '@/content/articles/nie-number-documents/no'

const { generateStaticParams, generateMetadata, Page } = createArticlePage(
  'nie-number-documents',
  '/nie-nummer-dokumenter',
  { en, de, da, sv, nl, no }
)

export { generateStaticParams, generateMetadata }
export default Page
