import { createArticlePage } from '@/lib/articles/createArticlePage'
import en from '@/content/articles/nie-processing-time/en'
import de from '@/content/articles/nie-processing-time/de'
import da from '@/content/articles/nie-processing-time/da'
import sv from '@/content/articles/nie-processing-time/sv'
import nl from '@/content/articles/nie-processing-time/nl'
import no from '@/content/articles/nie-processing-time/no'

const { generateStaticParams, generateMetadata, Page } = createArticlePage(
  'nie-processing-time',
  '/nie-nummer-behandlingstid',
  { en, de, da, sv, nl, no }
)

export { generateStaticParams, generateMetadata }
export default Page
