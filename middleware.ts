import { NextRequest, NextResponse } from 'next/server';
export function middleware(request: NextRequest) {
  export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - .swa (Azure Static Web Apps)
     */
    '/((?!.swa).*)',
  ],
}
  const hostname = request.headers.get('host') || '';
  const pathname = request.nextUrl.pathname;
  if (hostname.includes('tigre.abada.live')) {
    if (!pathname.startsWith('/belgique')) {
      return NextResponse.rewrite(new URL(`/belgique${pathname}`, request.url));
    }
  }
  return NextResponse.next();
}
export const config = { matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'] };
