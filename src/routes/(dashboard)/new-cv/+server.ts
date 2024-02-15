import { error, json } from "@sveltejs/kit";
import type { RequestEvent } from "./$types";
import { pushState } from "$app/navigation";

export async function GET(event: RequestEvent) {
  const username = event.url.searchParams.get("user")
  const req = await fetch(`https://api.github.com/search/users?q=${username}`);

  if (!req.ok) {
    return error(500, req.statusText)
  }

  const data: { items: IGithubUser[], total_count: number } = await req.json()

  if (data.total_count === 0) {
    return error(500, "No results found")
  }

  const githubUsers: Pick<IGithubUser, "login" | "avatar_url" | "id">[] = []

  for (const user of data.items) {
    githubUsers.push({ login: user.login, avatar_url: user.avatar_url, id: user.id })
  }

  return json(githubUsers)
}
