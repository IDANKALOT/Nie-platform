import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { createAdminClient } from '@/lib/supabase/admin'
import { generateEX18PDF } from '@/lib/pdf'

export async function POST(request: Request) {
  try {
    const { applicationId } = await request.json()

    if (!applicationId) {
      return NextResponse.json({ error: 'applicationId required' }, { status: 400 })
    }

    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Get application data
    const { data: appData, error } = await supabase
      .from('application_data')
      .select('*')
      .eq('application_id', applicationId)
      .single()

    if (error || !appData) {
      return NextResponse.json({ error: 'Application data not found' }, { status: 404 })
    }

    // Generate PDF
    const pdfBytes = await generateEX18PDF(appData)

    // Upload PDF to storage
    const adminClient = createAdminClient()
    const fileName = `pdfs/${applicationId}/EX18_${Date.now()}.pdf`

    const { error: uploadError } = await adminClient.storage
      .from('documents')
      .upload(fileName, pdfBytes, {
        contentType: 'application/pdf',
        upsert: true,
      })

    if (uploadError) {
      return NextResponse.json({ error: 'PDF upload failed' }, { status: 500 })
    }

    const { data: { publicUrl } } = adminClient.storage
      .from('documents')
      .getPublicUrl(fileName)

    // Save document record
    await adminClient.from('documents').insert({
      application_id: applicationId,
      file_url: publicUrl,
      file_name: 'EX18_udfyldt.pdf',
      type: 'ex18_filled',
      uploaded_by: user.id,
    })

    // Update application status
    await adminClient
      .from('applications')
      .update({ status: 'documents_generated' })
      .eq('id', applicationId)

    return NextResponse.json({ success: true, url: publicUrl })
  } catch (err) {
    console.error('PDF generation error:', err)
    return NextResponse.json({ error: 'PDF generation failed' }, { status: 500 })
  }
}
