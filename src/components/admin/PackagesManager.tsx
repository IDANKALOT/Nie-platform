'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { useRouter } from '@/i18n/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog'
import { createClient } from '@/lib/supabase/client'
import { toast } from 'sonner'
import { Plus, Pencil, Trash2, GripVertical } from 'lucide-react'
import type { Package } from '@/types'
import { PURPLE } from '@/lib/theme'

interface FormState {
  name: string
  description: string
  price: string
  features: string
  sortOrder: string
  isActive: boolean
}

const emptyForm: FormState = {
  name: '',
  description: '',
  price: '',
  features: '',
  sortOrder: '0',
  isActive: true,
}

export default function PackagesManager({ initialPackages }: { initialPackages: Package[] }) {
  const t = useTranslations('admin.packages')
  const router = useRouter()
  const supabase = createClient()

  const [dialogOpen, setDialogOpen] = useState(false)
  const [editing, setEditing] = useState<Package | null>(null)
  const [form, setForm] = useState<FormState>(emptyForm)
  const [saving, setSaving] = useState(false)

  function openCreate() {
    setEditing(null)
    setForm(emptyForm)
    setDialogOpen(true)
  }

  function openEdit(pkg: Package) {
    setEditing(pkg)
    setForm({
      name: pkg.name,
      description: pkg.description,
      price: (pkg.price_cents / 100).toString(),
      features: pkg.features.join('\n'),
      sortOrder: pkg.sort_order.toString(),
      isActive: pkg.is_active,
    })
    setDialogOpen(true)
  }

  async function handleSave() {
    const priceCents = Math.round(parseFloat(form.price.replace(',', '.')) * 100)

    if (!form.name.trim() || !Number.isFinite(priceCents) || priceCents <= 0) {
      toast.error(t('validationError'))
      return
    }

    setSaving(true)

    const payload = {
      name: form.name.trim(),
      description: form.description.trim(),
      price_cents: priceCents,
      currency: 'EUR',
      features: form.features
        .split('\n')
        .map((f) => f.trim())
        .filter(Boolean),
      sort_order: parseInt(form.sortOrder, 10) || 0,
      is_active: form.isActive,
    }

    const { error } = editing
      ? await supabase.from('packages').update(payload).eq('id', editing.id)
      : await supabase.from('packages').insert(payload)

    if (error) {
      toast.error(t('saveError'))
    } else {
      toast.success(editing ? t('updateSuccess') : t('createSuccess'))
      setDialogOpen(false)
      router.refresh()
    }
    setSaving(false)
  }

  async function handleDelete(pkg: Package) {
    if (!confirm(t('deleteConfirm', { name: pkg.name }))) return

    const { error } = await supabase.from('packages').delete().eq('id', pkg.id)
    if (error) {
      toast.error(t('deleteError'))
    } else {
      toast.success(t('deleteSuccess'))
      router.refresh()
    }
  }

  async function handleToggleActive(pkg: Package) {
    const { error } = await supabase
      .from('packages')
      .update({ is_active: !pkg.is_active })
      .eq('id', pkg.id)

    if (error) {
      toast.error(t('saveError'))
    } else {
      router.refresh()
    }
  }

  return (
    <>
      <div className="flex justify-end">
        <Button onClick={openCreate} style={{ backgroundColor: PURPLE }}>
          <Plus className="w-4 h-4 mr-2" />
          {t('addButton')}
        </Button>
      </div>

      {initialPackages.length === 0 ? (
        <Card className="border-dashed border-2 border-gray-200">
          <CardContent className="py-10 text-center">
            <p className="text-gray-500 text-sm">{t('empty')}</p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-3">
          {initialPackages.map((pkg) => (
            <Card key={pkg.id} className="bg-white shadow-sm">
              <CardContent className="py-4 flex items-center gap-4">
                <GripVertical className="w-4 h-4 text-gray-300 shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="font-semibold text-gray-900">{pkg.name}</p>
                    <button
                      onClick={() => handleToggleActive(pkg)}
                      className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                        pkg.is_active
                          ? 'bg-green-100 text-green-700'
                          : 'bg-gray-100 text-gray-500'
                      }`}
                    >
                      {pkg.is_active ? t('active') : t('inactive')}
                    </button>
                  </div>
                  <p className="text-sm text-gray-500 mt-0.5 truncate">{pkg.description}</p>
                  <p className="text-xs text-gray-400 mt-1">
                    {(pkg.price_cents / 100).toFixed(0)} {pkg.currency} · {pkg.features.length} {t('featuresSuffix')}
                  </p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <Button size="sm" variant="outline" onClick={() => openEdit(pkg)}>
                    <Pencil className="w-3.5 h-3.5" />
                  </Button>
                  <Button size="sm" variant="outline" onClick={() => handleDelete(pkg)}>
                    <Trash2 className="w-3.5 h-3.5 text-red-500" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{editing ? t('editTitle') : t('createTitle')}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-1.5">
              <Label htmlFor="pkg-name">{t('nameLabel')}</Label>
              <Input
                id="pkg-name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="pkg-description">{t('descriptionLabel')}</Label>
              <Textarea
                id="pkg-description"
                rows={2}
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <Label htmlFor="pkg-price">{t('priceLabel')}</Label>
                <Input
                  id="pkg-price"
                  inputMode="decimal"
                  placeholder="195"
                  value={form.price}
                  onChange={(e) => setForm({ ...form, price: e.target.value })}
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="pkg-sort">{t('sortOrderLabel')}</Label>
                <Input
                  id="pkg-sort"
                  inputMode="numeric"
                  value={form.sortOrder}
                  onChange={(e) => setForm({ ...form, sortOrder: e.target.value })}
                />
              </div>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="pkg-features">{t('featuresLabel')}</Label>
              <Textarea
                id="pkg-features"
                rows={5}
                placeholder={t('featuresPlaceholder')}
                value={form.features}
                onChange={(e) => setForm({ ...form, features: e.target.value })}
              />
            </div>
            <label className="flex items-center gap-2 text-sm text-gray-700">
              <input
                type="checkbox"
                checked={form.isActive}
                onChange={(e) => setForm({ ...form, isActive: e.target.checked })}
              />
              {t('activeLabel')}
            </label>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDialogOpen(false)}>
              {t('cancel')}
            </Button>
            <Button onClick={handleSave} disabled={saving} style={{ backgroundColor: PURPLE }}>
              {t('save')}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
