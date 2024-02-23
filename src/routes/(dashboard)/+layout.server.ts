import type { RequestEvent } from "./$types"

export const load = async ({ locals }: RequestEvent) => {

  return { user: locals.user }
}
