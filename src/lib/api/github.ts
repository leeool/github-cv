export const searchGithubUsers = async (username: string) => {
  const req = await fetch(`https://api.github.com/search/users?q=${username}`);

  if (!req.ok) return

  const data: { items: IGithubUser[], total_count: number } = await req.json()

  if (data.total_count === 0) return

  return data
}

export const getGithubUser = async (githubUserId: string) => {
  const req = await fetch(`https://api.github.com/user/${githubUserId}`)
  const githubUser: IGithubUser = await req.json()

  return githubUser
}
