// import { withAuth } from "next-auth/middleware";
// import { NextResponse } from "next/server";

// export default withAuth(function middleware(req) {
//   // console.log("Token: ", req.nextauth.token);
//   const token = req.nextauth.token;
//   if (!token) {
//     return NextResponse.redirect(new URL(""))
//   }
// });

// export const config = { matcher: ["/home"] };
export { default } from "next-auth/middleware";

export const config = { matcher: ["/landing"] };
