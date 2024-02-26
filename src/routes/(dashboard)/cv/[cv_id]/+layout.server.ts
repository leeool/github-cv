import { API_URL } from '$lib/constants';
import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ params, cookies }) => {
  const cvId = params.cv_id
  const session = cookies.get("session_id")

  if (!session) {
    redirect(303, "/")
  }

  const req = await fetch(`${API_URL}/curriculum/${cvId}`, { method: "GET", headers: { Authorization: session } })

  if (!req.ok) {
    redirect(303, "/")
  }

  const curriculum: ICurriculum = await req.json()

  return { curriculum }
};
