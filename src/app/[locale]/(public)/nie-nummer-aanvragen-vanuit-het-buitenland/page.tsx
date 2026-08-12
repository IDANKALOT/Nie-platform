import { createArticlePage } from '@/lib/articles/createArticlePage'
import en from '@/content/articles/nie-from-abroad/en'
import de from '@/content/articles/nie-from-abroad/de'
import da from '@/content/articles/nie-from-abroad/da'
import sv from '@/content/articles/nie-from-abroad/sv'
import nl from '@/content/articles/nie-from-abroad/nl'
import no from '@/content/articles/nie-from-abroad/no'

const { generateStaticParams, generateMetadata, Page } = createArticlePage(
  'nie-from-abroad',
  '/nie-nummer-aanvragen-vanuit-het-buitenland',
  { en, de, da, sv, nl, no }
)

export { generateStaticParams, generateMetadata }
export default Page
