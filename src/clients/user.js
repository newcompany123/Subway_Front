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
