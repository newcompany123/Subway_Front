export const loadUser = () => {
  try {
    const serializedUser = window.localStorage.getItem('user')
    if (serializedUser === null) {
      return undefined
    }
    return JSON.parse(serializedUser)
  } catch (error) {
    return undefined
  }
}

export const saveUser = (user) => {
  try {
    const serializedUser = JSON.stringify(user)
    window.localStorage.setItem('user', serializedUser)
  } catch (error) {
    console.warn('user not serializable. Failed to save state')
  }
}
