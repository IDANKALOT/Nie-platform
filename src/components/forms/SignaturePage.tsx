'use client'

import { useRef, useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import SignaturePad from 'signature_pad'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { createClient } from '@/lib/supabase/client'
import { toast } from 'sonner'
import { Eraser, ArrowRight, CheckCircle2 } from 'lucide-react'

interface Props {
  applicationId: string
  existingSignatureUrl: string | null
}

export default function SignaturePage({ applicationId, existingSignatureUrl }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const padRef = useRef<SignaturePad | null>(null)
  const [loading, setLoading] = useState(false)
  const [hasSignature, setHasSignature] = useState(false)
  const router = useRouter()
  const supabase = createClient()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    // Make canvas responsive
    function resizeCanvas() {
      if (!canvas) return
      const ratio = Math.max(window.devicePixelRatio || 1, 1)
      canvas.width = canvas.offsetWidth * ratio
      canvas.height = canvas.offsetHeight * ratio
      canvas.getContext('2d')?.scale(ratio, ratio)
    }

    resizeCanvas()

    const pad = new SignaturePad(canvas, {
      penColor: '#1B3A6B',
      backgroundColor: 'rgba(0,0,0,0)',
    })

    pad.addEventListener('endStroke', () => {
      setHasSignature(!pad.isEmpty())
    })

    padRef.current = pad
    window.addEventListener('resize', resizeCanvas)

    return () => {
      pad.off()
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  function handleClear() {
    padRef.current?.clear()
    setHasSignature(false)
  }

  function getTransparentBlob(): Promise<Blob> {
    const src = canvasRef.current!
    const tmp = document.createElement('canvas')
    tmp.width = src.width
    tmp.height = src.height
    const ctx = tmp.getContext('2d')!
    ctx.drawImage(src, 0, 0)
    const img = ctx.getImageData(0, 0, tmp.width, tmp.height)
    for (let i = 0; i < img.data.length; i += 4) {
      if (img.data[i] > 230 && img.data[i + 1] > 230 && img.data[i + 2] > 230) {
        img.data[i + 3] = 0
      }
    }
    ctx.putImageData(img, 0, 0)
    return new Promise(resolve => tmp.toBlob(b => resolve(b!), 'image/png'))
  }

  async function handleSubmit() {
    if (!padRef.current || padRef.current.isEmpty()) {
      toast.error('Venligst underskriv i feltet nedenfor.')
      return
    }

    setLoading(true)

    try {
      const blob = await getTransparentBlob()

      const fileName = `signatures/${applicationId}/signature_${Date.now()}.png`
      const { error: uploadError } = await supabase.storage
        .from('documents')
        .upload(fileName, blob, { contentType: 'image/png', upsert: true })

      if (uploadError) throw uploadError

      const { data: { publicUrl } } = supabase.storage.from('documents').getPublicUrl(fileName)

      const { error: updateError } = await supabase
        .from('application_data')
        .update({ signature_url: publicUrl })
        .eq('application_id', applicationId)

      if (updateError) throw updateError

      await supabase.from('documents').insert({
        application_id: applicationId,
        file_url: publicUrl,
        file_name: 'underskrift.png',
        type: 'signature',
      })

      await fetch('/api/generate-pdf', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ applicationId }),
      })

      toast.success('Underskrift gemt! Dokumenter genereres...')
      router.push(`/dashboard/ansogning/${applicationId}/bekraeftelse`)
    } catch {
      toast.error('Fejl ved gemning af underskrift. Prøv igen.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      <Card className="bg-white shadow-sm">
        <CardContent className="pt-5 pb-4">
          <p className="text-sm text-gray-700 leading-relaxed font-medium mb-2">Fuldmagtserklæring</p>
          <p className="text-xs text-gray-500 leading-relaxed">
            Med min underskrift nedenfor giver jeg Espalvo og deres samarbejdende advokater og
            notarer i Spanien fuldmagt til at ansøge om et spansk NIE-nummer på mine vegne. Jeg bekræfter,
            at de angivne oplysninger er korrekte og i overensstemmelse med mit pas.
          </p>
        </CardContent>
      </Card>

      <Card className="bg-white shadow-sm">
        <CardContent className="pt-5">
          <p className="text-sm font-medium text-gray-700 mb-3">
            Underskriv her:{' '}
            <span className="text-xs text-gray-400 font-normal">(brug mus eller finger)</span>
          </p>

          {existingSignatureUrl && !hasSignature ? (
            <div className="border-2 border-dashed border-gray-200 rounded-xl p-4 text-center">
              <CheckCircle2 className="w-8 h-8 mx-auto mb-2" style={{ color: '#2D8E6C' }} />
              <p className="text-sm font-medium text-gray-700">Underskrift allerede gemt</p>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={existingSignatureUrl} alt="Gemt underskrift" className="mx-auto mt-3 max-h-24 object-contain" />
            </div>
          ) : (
            <div
              className="border-2 border-gray-200 rounded-xl overflow-hidden bg-white"
              style={{ touchAction: 'none', height: '180px' }}
            >
              <canvas
                ref={canvasRef}
                style={{ width: '100%', height: '100%' }}
              />
            </div>
          )}

          <div className="flex items-center justify-between mt-3">
            <Button type="button" variant="outline" size="sm" onClick={handleClear}>
              <Eraser className="w-4 h-4 mr-1.5" />
              Ryd
            </Button>
            <p className="text-xs text-gray-400">Underskriften gemmes sikkert og krypteret.</p>
          </div>
        </CardContent>
      </Card>

      <Button
        onClick={handleSubmit}
        disabled={loading}
        className="w-full h-12 text-base font-semibold"
        style={{ backgroundColor: '#1B3A6B' }}
      >
        {loading ? 'Gemmer og genererer dokumenter...' : (
          <>
            Bekræft og send ansøgning
            <ArrowRight className="w-4 h-4 ml-2" />
          </>
        )}
      </Button>
    </div>
  )
}
