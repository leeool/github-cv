import { API_URL } from '$lib/constants';
import { redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const PUT: RequestHandler = async ({ url, request, fetch, cookies }) => {
  const session_id = cookies.get("session_id")

  if (!session_id) {
    redirect(302, "/")
  }

  const body = JSON.stringify(await request.json())
  const cvId = url.searchParams.get("cv_id")
  const req = await fetch(`${API_URL}/curriculum/${cvId}`, {
    method: "PUT",
    headers: { "content-type": "application/json", "Authorization": session_id },
    body
  })

  return Promise.resolve(req)
};
