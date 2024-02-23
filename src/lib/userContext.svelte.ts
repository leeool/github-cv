import { getContext, setContext } from "svelte"
import { writable, type Writable } from "svelte/store"

interface IUserStore {
  user: IUser | null,
  isLoggedIn: boolean,
  curriculumData: ICurriculum | null
}

export const setUserStore = () => {
  const user = null
  const isLoggedIn = false
  const curriculumData = null

  const userStore: Writable<IUserStore> = writable({
    user,
    isLoggedIn,
    curriculumData
  })
  setContext("user_store", userStore)
}

export const getUserStore = () => {
  return getContext<Writable<IUserStore>>("user_store")
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
