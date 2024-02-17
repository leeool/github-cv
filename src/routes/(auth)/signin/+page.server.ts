import { API_URL } from '$lib/constants';
import type { Actions } from './$types';

export const actions = {
  login: async ({ cookies, request }) => {
    const formData = await request.formData()
    const email = formData.get("email")
    const password = formData.get("password")

    const body = JSON.stringify({ email, password })
    const req = await fetch(`${API_URL}/auth/signin`, {
      method: "POST",
      body,
      headers: { "content-type": "application/json" }
    })

    if (!req.ok) {
      return { success: false }
    }

    const { token } = await req.json()

    cookies.set("session_id", token, {
      path: '/',
      httpOnly: true,
      sameSite: 'strict',
      secure: false,
      maxAge: 60 * 60 * 24 * 7 // uma semana 
    })
  },
} satisfies Actions;
