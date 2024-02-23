import { API_URL } from '$lib/constants'
import { redirect } from '@sveltejs/kit'
import type { Actions } from './$types'

export const actions = {
  signup: async ({ request, cookies }) => {
    const data = await request.formData()

    const { email, username, password } = {
      username: data.get("username"),
      email: data.get("email"),
      password: data.get("password")
    }

    if (!email || !username || !password) return

    const body = JSON.stringify({ username, password, email })

    const res = await fetch(`${API_URL}/auth/signup`, {
      method: "POST",
      body,
      headers: { "content-type": "application/json" }
    })

    if (!res.ok) {
      return { success: false }
    }

    const user = await res.json()

     cookies.set("session_id", user.id, {
       path: '/',
       httpOnly: true,
       sameSite: 'strict',
       secure: false,
       maxAge: 60 * 60 * 24 * 7 // uma semana 
     })

    redirect(303, "/")

  },
} satisfies Actions





