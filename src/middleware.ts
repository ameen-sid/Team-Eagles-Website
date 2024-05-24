// Import the Requried Modules
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

// Function of Middleware
export const middleware = async (request: NextRequest) => {
	const path = request.nextUrl.pathname;

	const isPublicPath = path === '/signup' || path === '/verify-email' || path === '/login' || path === '/reset-password-email' || path === '/reset-password' || path === '/player-profile/:path*' || path === '/leaderboard' || path === '/achievements' || path === '/join-team' || path === '/all-players';
	const token = request.cookies.get("token")?.value || "";

	if(isPublicPath && token) {
		return NextResponse.redirect(new URL('/', request.url));
	}

	if(!isPublicPath && !token) {
		return NextResponse.redirect(new URL('/login', request.url));
	}
}

// See "Matching Paths" below
export const config = {
	matcher: [
		'/signup',
		'/verify-email',
		'/login',
		'/reset-password-email',
		'/reset-password',
		'/dashboard',
	]
}