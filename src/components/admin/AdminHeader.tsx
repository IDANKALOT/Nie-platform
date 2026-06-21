import type { Profile } from '@/types'

interface Props { profile: Profile | null }

export default function AdminHeader({ profile }: Props) {
  return (
    <header className="bg-white border-b border-gray-200 px-6 h-14 flex items-center justify-between shrink-0">
      <div className="flex items-center gap-2">
        <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded-full font-medium">
          Admin
        </span>
        <span className="text-sm text-gray-500">NIE Spanien Administration</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-600">{profile?.name}</span>
        <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold">
          {profile?.name?.[0]?.toUpperCase() ?? 'A'}
        </div>
      </div>
    </header>
  )
}
