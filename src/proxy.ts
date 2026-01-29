import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { NextRequest, NextResponse } from "next/server";

const handleI18nRouting = createMiddleware(routing);

const AUTH_COOKIE_NAME = "auth_token";
const ACCESS_TOKEN_NAME = "access_token";
const REFRESH_TOKEN_NAME = "refresh_token";

// Paths that require authentication (under (authenticated) group)
const authenticatedPaths = [
  "/dashboard",
  "/dashboard1",
  "/dashboard2",
  "/dashboard3",
  "/dashboard4",
  "/keyword-research",
];

// Paths that should redirect to dashboard if already authenticated
const authPaths = ["/auth/login", "/auth/register"];

export default function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Get the auth token from cookies
  // Check auth_token first, then access_token, then refresh_token as a fallback for "logged in state" existence
  const authToken =
    request.cookies.get(AUTH_COOKIE_NAME)?.value ||
    request.cookies.get(ACCESS_TOKEN_NAME)?.value ||
    request.cookies.get(REFRESH_TOKEN_NAME)?.value;

  const isAuthenticated = !!authToken;

  // Extract locale from pathname (e.g., /en/dashboard -> en)
  const localeMatch = pathname.match(/^\/([a-z]{2})(\/|$)/);
  const locale = localeMatch ? localeMatch[1] : routing.defaultLocale;

  // Get the path without locale prefix
  const pathWithoutLocale = localeMatch
    ? pathname.replace(`/${locale}`, "") || "/"
    : pathname;

  // Check if current path is an authenticated route
  const isAuthenticatedRoute = authenticatedPaths.some(
    (path) =>
      pathWithoutLocale === path || pathWithoutLocale.startsWith(`${path}/`),
  );

  // Check if current path is an auth route (login/register)
  const isAuthRoute = authPaths.some(
    (path) =>
      pathWithoutLocale === path || pathWithoutLocale.startsWith(`${path}/`),
  );

  // Redirect unauthenticated users trying to access protected routes
  if (isAuthenticatedRoute && !isAuthenticated) {
    const loginUrl = new URL(`/${locale}/auth/login`, request.url);
    // Add redirect parameter to return after login
    loginUrl.searchParams.set("redirect", pathname);
    return NextResponse.redirect(loginUrl);
  }

  // Redirect authenticated users away from auth pages to dashboard
  if (isAuthRoute && isAuthenticated) {
    const dashboardUrl = new URL(`/${locale}/dashboard`, request.url);
    return NextResponse.redirect(dashboardUrl);
  }

  // Continue with i18n routing
  const response = handleI18nRouting(request);

  // If the user is visiting /en (or /en/...), next-intl will try to redirect to / (308).
  // We want to allow /en to exist explicitly.
  // We check if it's a redirect to the root (or standard non-prefixed path), and if so,
  // we return the Rewrite (which is inside the response) but without the Redirect status.
  if (
    (pathname === "/en" || pathname.startsWith("/en/")) &&
    response.status === 308
  ) {
    // Keep the detection headers and rewrite logic, but don't force browser redirect
    return NextResponse.next({
      request: {
        headers: request.headers,
      },
      headers: response.headers,
    });
  }

  // Content Security Policy
  const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-inline' 'unsafe-eval';
    style-src 'self' 'unsafe-inline';
    img-src 'self' blob: data: https://framerusercontent.com https://www.semrush.com https://cdn.prod.website-files.com;
    font-src 'self' data:;
    connect-src 'self' http://localhost:5000 ws://localhost:5000 https://9zszm619-5000.inc1.devtunnels.ms;
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;
  `
    .replace(/\s{2,}/g, " ")
    .trim();

  response.headers.set("Content-Security-Policy", cspHeader);
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");

  return response;
}

export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/_next` or `/_vercel`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
