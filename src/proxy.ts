import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'
import createIntlMiddleware from 'next-intl/middleware'
import { routing } from '@/i18n/routing'

const intlMiddleware = createIntlMiddleware(routing)

function stripLocale(pathname: string): { pathname: string; locale: string } {
  for (const locale of routing.locales) {
    if (locale === routing.defaultLocale) continue
    if (pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)) {
      return { pathname: pathname.slice(locale.length + 1) || '/', locale }
    }
  }
  return { pathname, locale: routing.defaultLocale }
}

function localizedPath(path: string, locale: string) {
  return locale === routing.defaultLocale ? path : `/${locale}${path}`
}

function redirectTo(path: string, locale: string, request: NextRequest, base: NextResponse) {
  const response = NextResponse.redirect(new URL(localizedPath(path, locale), request.url))
  base.cookies.getAll().forEach((cookie) => response.cookies.set(cookie))
  return response
}

export async function proxy(request: NextRequest) {
  const intlResponse = intlMiddleware(request)

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value)
          )
          cookiesToSet.forEach(({ name, value, options }) =>
            intlResponse.cookies.set(name, value, options)
          )
        },
      },
    }
  )

  const {
    data: { user },
  } = await supabase.auth.getUser()

  const { pathname, locale } = stripLocale(request.nextUrl.pathname)

  // Protect dashboard routes
  if (pathname.startsWith('/dashboard') && !user) {
    return redirectTo('/login', locale, request, intlResponse)
  }

  // Protect admin routes
  if (pathname.startsWith('/admin')) {
    if (!user) {
      return redirectTo('/login', locale, request, intlResponse)
    }
    // Check admin role
    const { data: profile } = await supabase
      .from('profiles')
      .select('role')
      .eq('id', user.id)
      .single()

    if (profile?.role !== 'admin') {
      return redirectTo('/dashboard', locale, request, intlResponse)
    }
  }

  // Redirect logged-in users away from auth pages
  if (user && (pathname === '/login' || pathname === '/register')) {
    return redirectTo('/dashboard', locale, request, intlResponse)
  }

  return intlResponse
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|_vercel|.*\\..*).*)',
  ],
}
