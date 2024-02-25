import { getGithubUser, searchGithubUsers } from "$lib/api/github";
import { API_URL } from "$lib/constants";
import { type Actions } from "@sveltejs/kit";

export const actions = {
  search: async ({ url }) => {
    const username = url.searchParams.get("username")
    if (!username) return { success: false }

    const data = await searchGithubUsers(username)

    if (!data) return { success: false }

    const githubUsers: Pick<IGithubUser, "login" | "avatar_url" | "id">[] = []
    for (const user of data.items) {
      githubUsers.push({ login: user.login, avatar_url: user.avatar_url, id: user.id })
    }

    return { success: true, githubUsers }
  },
  create: async ({ url, locals }) => {
    const githubUserId = url.searchParams.get("id")
    if (!githubUserId) return

    const githubUser = await getGithubUser(githubUserId)

    const curriculum = {
      user_id: locals.user?.id,
      github_user_id: githubUserId,
      name: githubUser.name,
      job_title: "",
      about: githubUser.bio || "",
      skills: []
    }

    const req = await fetch(`${API_URL}/curriculum/`, {
      method: "POST",
      body: JSON.stringify(curriculum),
      headers: { "content-type": "application/json" }
    })

    if (!req.ok) {
      return { success: false }
    }

    const curriculumData: ICurriculum = await req.json()

    return { cvData: curriculumData }
  }

} satisfies Actions
