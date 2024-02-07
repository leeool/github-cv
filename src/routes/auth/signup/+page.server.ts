import type { Actions } from './$types'
import { redirect } from "@sveltejs/kit"

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

    console.log(body)

    const res = await fetch("http://localhost:8080/auth/signup", {
      method: "POST",
      body,
      headers: { "content-type": "application/json" }
    })

    console.log(await res.json())

    if (!res.ok) {
      return { success: false }
    }

    const user: IUser = await res.json()

    cookies.set("session_id", user.id, {
      path: '/',
      httpOnly: true,
      sameSite: 'strict',
      secure: false,
      maxAge: 60 * 60 * 24 * 7 // uma semana 
    })

    throw redirect(303, "/")

  },
} satisfies Actions


const a = async (): Promise<[]> => {
  const value = await Promise.all([])
  return value
}


console.log(a);


