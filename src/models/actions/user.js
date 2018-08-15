import axios from 'axios'

import { SERVER } from '../../common/Constants'

const LOGIN_USER = 'mysubway/user/LOGIN_USER'

export const actionTypes = {
  LOGIN_USER
}

const loginFacebookUser = (accessToken) => async dispatch => {
  try {
    const response = await axios.post(
      `${SERVER}/user/facebook-login/`,
      { 'access_token': accessToken }
    )
    dispatch({ type: LOGIN_USER, payload: response.data })
  } catch (error) {
    // TODO(royhong): handle error
  }
}

const loginKakaoUser = (accessToken) => async dispatch => {
  try {
    const response = await axios.post(
      `${SERVER}/user/kakao-login/`,
      { 'access_token': accessToken }
    )
    dispatch({ type: LOGIN_USER, payload: response.data })
  } catch (error) {
    // TODO(royhong): handle error
  }
}

export const actionCreators = {
  loginFacebookUser,
  loginKakaoUser
}
