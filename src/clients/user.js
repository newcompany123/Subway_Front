import axios from 'axios'
import { Observable } from 'rxjs/Observable'

import { SERVER } from '../common/Constants'

const TIMEOUT = 1000

export default {
  loginUser (source, accessToken) {
    return new Observable((observer) => {
      const timerId = setTimeout(() => {
        axios.post(`${SERVER}/user/${source}-login/`,
          { 'access_token': accessToken })
          .then((response) => {
            console.log(response)
            observer.next(response.data)
            observer.complete()
          })
          .catch((error) => {
            observer.error(error)
            observer.complete()
          })
      }, TIMEOUT)
      return () => clearTimeout(timerId)
    })
  }
}
// const loginFacebookUser = (accessToken) => async dispatch => {
//   try {
//     const response = await axios.post(
//       `${SERVER}/user/facebook-login/`,
//       { 'access_token': accessToken }
//     )
//     dispatch({ type: LOGIN_USER, payload: response.data })
//   } catch (error) {
//     // TODO(royhong): handle error
//   }
// }

// const loginKakaoUser = (accessToken) => async dispatch => {
//   try {
//     const response = await axios.post(
//       `${SERVER}/user/kakao-login/`,
//       { 'access_token': accessToken }
//     )
//     dispatch({ type: LOGIN_USER, payload: response.data })
//   } catch (error) {
//     // TODO(royhong): handle error
//   }
// }
