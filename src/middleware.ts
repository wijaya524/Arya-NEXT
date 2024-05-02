import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { withAuth } from "next-auth/middleware";
 export function MainMiddleware(req: NextRequest) {
    const res = NextResponse.next();
    return res;
 }

 export default withAuth(MainMiddleware, ["/profile"]);
