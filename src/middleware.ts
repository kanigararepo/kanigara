import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { cookies } from "next/headers";

export default async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const store = await cookies();
  const token = store.get("token");

  // Allow access to /admin without restriction
  if (pathname === "/admin") {
    return NextResponse.next();
  }

  // Protect all subroutes under /admin
  if (pathname.startsWith("/admin/")) {
    if (!token) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin", "/admin/:path*"],
};
