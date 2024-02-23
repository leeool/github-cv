import { API_URL } from '$lib/constants';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ params }) => {
  const cvId = params.cv_id

  const req = await fetch(`${API_URL}/curriculum/${cvId}`, {method: "GET"})
  const curriculum: ICurriculum = await req.json()

  return { curriculum }
};
