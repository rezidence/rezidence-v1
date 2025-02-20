import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // List of protected paths
  const protectedPaths = [
    '/properties',
    '/blog',
    '/properties/list',
    '/connect/contact'

  ]

  // Check if the current path starts with any of the protected paths
  const isProtectedPath = protectedPaths.some(path => 
    request.nextUrl.pathname.startsWith(path)
  )

  if (isProtectedPath) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  return NextResponse.next()
}

// Configure paths that will trigger middleware
export const config = {
  matcher: [
    '/properties/:path*',
    '/blog/:path*',
    '/properties/list',
    '/connect/contact'
  ]
} 