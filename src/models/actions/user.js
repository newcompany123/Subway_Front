const LOGIN_USER = 'mysubway/user/LOGIN_USER'
const LOGIN_USER_SUCCEED = 'mysubway/user/LOGIN_USER_SUCCEED'

export const actionTypes = {
  LOGIN_USER,
  LOGIN_USER_SUCCEED
}

const loginUser = (source, accessToken) => ({
  type: LOGIN_USER,
  source,
  accessToken
})

const loginUserSucceed = (user) => ({
  type: LOGIN_USER_SUCCEED,
  user
})

export const actionCreators = {
  loginUser,
  loginUserSucceed
}
