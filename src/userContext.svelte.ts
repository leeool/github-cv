const userContext = () => {
  let user: IUser | null = $state({ email: "leonardo", id: "1", username: "dasdsad" })

  return {
    get user() { return user },
    setUser: (newUser: IUser) => user = newUser
  }
}

export default userContext
