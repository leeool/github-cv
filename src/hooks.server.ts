import { authUser } from "$lib/server/auth";
import {  type Handle, error, redirect } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
  const { url } = event
  const isProtectedRoute = !!["/", "/new-cv"].includes(url.pathname)
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
