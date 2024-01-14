import type { Actions } from './$types';

export const actions = {
  login: async (event) => {
    const request = event.request
    const data = await request.formData()
    console.log(data)
  },
} satisfies Actions;
