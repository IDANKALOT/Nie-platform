import { createClient } from '@/lib/supabase/server'
import { getTranslations } from 'next-intl/server'
import PackagesManager from '@/components/admin/PackagesManager'
import type { Package } from '@/types'

export default async function AdminPackagesPage() {
  const t = await getTranslations('admin.packages')
  const supabase = await createClient()

  const { data: packages } = await supabase
    .from('packages')
    .select('*')
    .order('sort_order', { ascending: true })

  return (
    <div className="space-y-6 max-w-5xl">
      <div>
        <h2 className="text-xl font-bold text-gray-900">{t('heading')}</h2>
        <p className="text-sm text-gray-500 mt-0.5">{t('subtitle')}</p>
      </div>

      <PackagesManager initialPackages={(packages ?? []) as Package[]} />
    </div>
  )
}
