export const dynamic = 'force-dynamic'

import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import CookieBanner from '@/components/CookieBanner'
import GeoLanguageBanner from '@/components/GeoLanguageBanner'

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <GeoLanguageBanner />
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <CookieBanner />
    </>
  )
}
