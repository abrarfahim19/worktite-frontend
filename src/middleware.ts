import { NextRequest, NextResponse } from 'next/server';
import { frontendLinks } from '@/config/common/app-link';
import { getCookie, parseToken } from '@/config/common';
import { UserType } from '@/config/common/AppEnums';

export const config = {
  matcher: ['/:path*'],
};

const protectedRoute = Object.values(frontendLinks.PROTECTED);
const privateRoute = Object.values(frontendLinks.PRIVATE);

function checkProtectedRoute(
  pathname: string,
  user: any,
  token: any,
  request: NextRequest
) {
  if (protectedRoute.includes(pathname)) {
    if (!token || !user || user?.type == UserType.client) {
      return NextResponse.redirect(
        new URL(frontendLinks.LINK_SIGNUP, request.url)
      );
    }
  }
}
function checkPrivateRoute(
  pathname: string,
  user: any,
  token: any,
  request: NextRequest
) {
  if (privateRoute.includes(pathname)) {
    if (!token || !user || user?.type == UserType.admin) {
      return NextResponse.redirect(
        new URL(frontendLinks.LINK_SIGNUP, request.url)
      );
    }
  }
}
export default async function middleware(request: NextRequest) {
  const token = getCookie('jwt_token');
  const user = parseToken(
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1VHlwZSI6MSwic3ViIjoiMTIzNDU2Nzg5MCIsIm5hbWUiOiJKb2huIERvZSIsImlhdCI6MTUxNjIzOTAyMn0.uCmK5s_7yMWI_pBJS92edGsU7SSX882cbztqJRMXxtY'
  );
  const { pathname } = request.nextUrl;
  console.log('user', user);
  // TODO: implement the user role based redirection
  // checkProtectedRoute(pathname, user, token, request)

  // TODO: implement the user role based redirection
  checkPrivateRoute(pathname, user, token, request);
}
