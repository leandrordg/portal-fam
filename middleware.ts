import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isProtectedRoutes = createRouteMatcher(["/dashboard(.*)"]);
const isAuthRoutes = createRouteMatcher(["/sign-in(.*)", "/sign-up(.*)"]);
const isAdminRoute = createRouteMatcher(["/admin(.*)"]);

export default clerkMiddleware(async (auth, req) => {
  const { sessionClaims, userId } = await auth();

  if (isAdminRoute(req) && sessionClaims?.metadata?.role !== "admin") {
    return NextResponse.redirect(new URL("/dashboard", req.nextUrl));
  }

  if (isAuthRoutes(req) && userId) {
    return NextResponse.redirect(new URL("/dashboard", req.nextUrl));
  }

  if (isProtectedRoutes(req)) await auth.protect();
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
