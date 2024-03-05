import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

const protectedRoute = '/profile';

export default function middleware(request: NextRequest) {
  const url = request.nextUrl.pathname;
  if (protectedRoute === url) {
    const token = cookies().get('user');
    if (!token) {
      const absoluteUrl = new URL('/login', request.nextUrl.origin);
      return NextResponse.redirect(absoluteUrl);
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/profile'],
};
