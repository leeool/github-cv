import { getContext, setContext } from "svelte"
import { writable, type Writable } from "svelte/store"


export const setUserStore = () => {
  const user = writable<IUser | null>(null)
  setContext("user", user)
}

export const getUserStore = () => {
  return getContext<Writable<IUser | null>>("user")
}
// const userContext = () => {
//   let user: IUser | null = $state(null)
// 
//   return {
//     get user() { return user },
//     auth: () => {
// 
//     },
//     set setUser(newUser: IUser) { user = newUser }
//   }
// }
// 
// export default userContext
