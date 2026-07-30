import { NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'
import { createAdminClient } from '@/lib/supabase/admin'
import type Stripe from 'stripe'

export async function POST(request: Request) {
  const body = await request.text()
  const signature = request.headers.get('stripe-signature')

  if (!signature) {
    return NextResponse.json({ error: 'Missing signature' }, { status: 400 })
  }

  let event: Stripe.Event
  try {
    event = stripe.webhooks.constructEvent(body, signature, process.env.STRIPE_WEBHOOK_SECRET!)
  } catch (err) {
    console.error('Stripe webhook signature verification failed:', err)
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session
    const applicationId = session.metadata?.application_id ?? session.client_reference_id

    if (applicationId) {
      const adminClient = createAdminClient()
      const { error } = await adminClient
        .from('applications')
        .update({ payment_status: 'paid', updated_at: new Date().toISOString() })
        .eq('id', applicationId)

      if (error) {
        console.error('Failed to update payment_status:', error)
        return NextResponse.json({ error: 'Database update failed' }, { status: 500 })
      }
    }
  }

  return NextResponse.json({ received: true })
}
