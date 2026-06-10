'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { createClient } from '@/lib/supabase/client'
import { toast } from 'sonner'
import { ChevronDown, MessageSquarePlus } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Textarea } from '@/components/ui/textarea'
import { STATUS_LABELS, STATUS_ORDER, type ApplicationStatus } from '@/types'

interface Props {
  applicationId: string
  currentStatus: ApplicationStatus
}

export default function AdminApplicationActions({ applicationId, currentStatus }: Props) {
  const [noteOpen, setNoteOpen] = useState(false)
  const [noteText, setNoteText] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const supabase = createClient()

  async function handleStatusChange(newStatus: ApplicationStatus) {
    setLoading(true)
    const { error } = await supabase
      .from('applications')
      .update({ status: newStatus, updated_at: new Date().toISOString() })
      .eq('id', applicationId)

    if (error) {
      toast.error('Fejl ved statusopdatering.')
    } else {
      toast.success(`Status opdateret til: ${STATUS_LABELS[newStatus]}`)
      router.refresh()
    }
    setLoading(false)
  }

  async function handleAddNote() {
    if (!noteText.trim()) return
    setLoading(true)

    const { data: { user } } = await supabase.auth.getUser()

    const { error } = await supabase.from('notes').insert({
      application_id: applicationId,
      admin_id: user!.id,
      note: noteText.trim(),
    })

    if (error) {
      toast.error('Fejl ved tilføjelse af note.')
    } else {
      toast.success('Note tilføjet.')
      setNoteText('')
      setNoteOpen(false)
      router.refresh()
    }
    setLoading(false)
  }

  return (
    <>
      <div className="flex items-center gap-2 shrink-0">
        <Button
          size="sm"
          variant="outline"
          onClick={() => setNoteOpen(true)}
          className="gap-1.5"
        >
          <MessageSquarePlus className="w-3.5 h-3.5" />
          Tilføj note
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger
            className="inline-flex items-center justify-center gap-1.5 rounded-md px-3 py-1.5 text-sm font-medium text-white disabled:opacity-50"
            style={{ backgroundColor: '#1B3A6B' }}
            disabled={loading}
          >
            Skift status
            <ChevronDown className="w-3.5 h-3.5" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {STATUS_ORDER.map((status) => (
              <DropdownMenuItem
                key={status}
                onClick={() => handleStatusChange(status)}
                disabled={status === currentStatus}
                className={status === currentStatus ? 'font-semibold opacity-50' : ''}
              >
                {STATUS_LABELS[status]}
                {status === currentStatus && ' (nuværende)'}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <Dialog open={noteOpen} onOpenChange={setNoteOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Tilføj note til sagen</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <Textarea
              placeholder="Skriv din note her..."
              value={noteText}
              onChange={(e) => setNoteText(e.target.value)}
              rows={4}
            />
            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => setNoteOpen(false)}>Annuller</Button>
              <Button
                onClick={handleAddNote}
                disabled={loading || !noteText.trim()}
                style={{ backgroundColor: '#1B3A6B' }}
              >
                Gem note
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
