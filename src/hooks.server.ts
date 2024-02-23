import { authUser } from "$lib/server/auth";
import { type Handle, redirect } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
  const { url } = event
  const isProtectedRoute = !!["/new-cv", "/cv"].some((route) => url.pathname.startsWith(route)) || url.pathname === "/"
  const isAuthRoute = !!["/signin", "/signup"].includes(url.pathname)

  await authUser(event)

  if (isProtectedRoute && !event.locals.user) {
    redirect(303, "/signin")
  }

  if (isAuthRoute && event.locals.user) {
    redirect(303, "/")
  }

  return await resolve(event)
}
