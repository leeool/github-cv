import { API_URL } from '$lib/constants';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ locals }) => {
  const req = await fetch(`${API_URL}/user/${locals.user?.id}/curriculums`, {method: "GET"})
  const curriculums: ICurriculum[] = await req.json()

  return { curriculums }
};
