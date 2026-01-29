/**
 * Route Protection Configuration
 * 
 * Defines which routes require authentication and how to handle unauthorized access.
 */

export const protectedRoutes = ['/dashboard', '/settings', '/profile', '/analytics']

export const publicRoutes = ['/login', '/signup', '/forgot-password']

export const authRoutes = ['/login']

/**
 * Check if a route requires authentication
 */
export function isProtectedRoute(pathname: string): boolean {
  return protectedRoutes.some(route => pathname.startsWith(route))
}

/**
 * Check if a route is public
 */
export function isPublicRoute(pathname: string): boolean {
  return publicRoutes.some(route => pathname.startsWith(route))
}

/**
 * Check if a route is an auth page
 */
export function isAuthRoute(pathname: string): boolean {
  return authRoutes.some(route => pathname.startsWith(route))
}
