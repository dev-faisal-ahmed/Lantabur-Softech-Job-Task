import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

const protectedUrl = '/profile';
const authPages = ['/login', '/register'];

export default function middleware(request: NextRequest) {
  const token = cookies().get('user');

  if (protectedUrl === request.nextUrl.pathname && !token) {
    const absoluteUrl = new URL('/login', request.nextUrl.origin);
    return NextResponse.redirect(absoluteUrl);
  }

  if (authPages.includes(request.nextUrl.pathname) && token) {
    const absoluteUrl = new URL('/', request.nextUrl.origin);
    return NextResponse.redirect(absoluteUrl);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/profile', '/login', '/register'],
};
