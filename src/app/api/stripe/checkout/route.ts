import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { stripe, APPLICATION_PRICE_EUR_CENTS } from '@/lib/stripe'

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

    const { data: application, error } = await supabase
      .from('applications')
      .select('id, case_number, payment_status, user_id')
      .eq('id', applicationId)
      .eq('user_id', user.id)
      .single()

    if (error || !application) {
      return NextResponse.json({ error: 'Application not found' }, { status: 404 })
    }

    if (application.payment_status === 'paid') {
      return NextResponse.json({ error: 'Already paid' }, { status: 400 })
    }

    const { data: activePackage } = await supabase
      .from('packages')
      .select('name, description, price_cents, currency')
      .eq('is_active', true)
      .order('sort_order', { ascending: true })
      .limit(1)
      .maybeSingle()

    const priceCents = activePackage?.price_cents ?? APPLICATION_PRICE_EUR_CENTS
    const currency = activePackage?.currency?.toLowerCase() ?? 'eur'
    const productName = activePackage
      ? `${activePackage.name} – Sag #${application.case_number}`
      : `NIE-ansøgning – Sag #${application.case_number}`
    const productDescription = activePackage?.description || 'Espallo servicegebyr for behandling af NIE-ansøgning'

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL!

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      managed_payments: { enabled: false },
      customer_email: user.email,
      client_reference_id: application.id,
      metadata: { application_id: application.id },
      line_items: [
        {
          price_data: {
            currency,
            unit_amount: priceCents,
            product_data: {
              name: productName,
              description: productDescription,
            },
          },
          quantity: 1,
        },
      ],
      success_url: `${siteUrl}/dashboard/ansogning?payment=success`,
      cancel_url: `${siteUrl}/dashboard/ansogning?payment=cancelled`,
    })

    return NextResponse.json({ url: session.url })
  } catch (err) {
    console.error('Stripe checkout error:', err)
    return NextResponse.json({ error: 'Failed to create checkout session' }, { status: 500 })
  }
}
