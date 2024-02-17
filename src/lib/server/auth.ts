import { API_URL } from "$lib/constants"
import {  type RequestEvent } from "@sveltejs/kit"

export const authUser = async (event: RequestEvent) => {
  const session_id = event.cookies.get("session_id")

  if (!session_id) {
    event.locals.user = null
    return
  }

  const req = await fetch(`${API_URL}/auth/me`, {
    method: "GET", headers: { "content-type": "application/json", authorization: `Bearer ${session_id}` }
  })

  if (req.ok) {
    const json = await req.json()
    event.locals.user = json
  } else {
    event.cookies.delete("session_id", {path: "/"})
    event.locals.user = null
  }
}
