import { API_URL } from "$lib/constants"
import type { RequestEvent } from "./$types"

export const load = async ({ cookies }: RequestEvent) => {
  const session_id = cookies.get("session_id")

  const req = await fetch(`${API_URL}/auth/me`, {
    method: "GET", headers: { "content-type": "application/json", authorization: `Bearer ${session_id}` }
  })
  const json = await req.json()

  if (!req.ok) {
    console.log("erro")
    return { success: false }
  }

  return { user: json }
}
