import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

export const APPLICATION_PRICE_EUR_CENTS = 19500
