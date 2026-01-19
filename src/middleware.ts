import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';
import { NextRequest, NextResponse } from 'next/server';

const handleI18nRouting = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const response = handleI18nRouting(request);

  // If the user is visiting /en (or /en/...), next-intl will try to redirect to / (308).
  // We want to allow /en to exist explicitly.
  // We check if it's a redirect to the root (or standard non-prefixed path), and if so,
  // we return the Rewrite (which is inside the response) but without the Redirect status.
  if ((pathname === '/en' || pathname.startsWith('/en/')) && response.status === 308) {
      // Keep the detection headers and rewrite logic, but don't force browser redirect
      return NextResponse.next({
          request: {
              headers: request.headers,
          },
          headers: response.headers,
      });
  }

  return response;
}

export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/_next` or `/_vercel`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
