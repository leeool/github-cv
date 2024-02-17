import {  type Actions } from "@sveltejs/kit";

export const actions = {
  search: async ({ url, locals }) => {
    const username = url.searchParams.get("username")
    const req = await fetch(`https://api.github.com/search/users?q=${username}`);

    if (!req.ok) {
      return { success: false }
    }

    const data: { items: IGithubUser[], total_count: number } = await req.json()

    if (data.total_count === 0) {
     return { success: false }
    }

    const githubUsers: Pick<IGithubUser, "login" | "avatar_url" | "id">[] = []

    for (const user of data.items) {
      githubUsers.push({ login: user.login, avatar_url: user.avatar_url, id: user.id })
    }

    return { success: true, githubUsers }
  }
} satisfies Actions
