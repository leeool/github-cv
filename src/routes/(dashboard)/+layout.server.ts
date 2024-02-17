import type { RequestEvent } from "./$types"

export const load = async ({ cookies, locals }: RequestEvent) => {

  return { user: locals.user }
}
