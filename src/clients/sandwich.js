import axios from 'axios'
import { Observable } from 'rxjs/Observable'

import { PAGE_SIZE, SERVER } from '../common/Constants'

const TIMEOUT = 1000

export default {
  getRanking (page) {
    return new Observable((observer) => {
      const timerId = setTimeout(() => {
        axios.get(`${SERVER}/recipe/?page=${page}&page_size=${PAGE_SIZE}`)
          .then((response) => {
            observer.next(response.data.results)
            observer.complete()
          })
          .catch((error) => {
            observer.error(error)
            observer.complete()
          })
      }, TIMEOUT)
      return () => clearTimeout(timerId)
    })
  },
  getCategoryList (methodType, category) {
    return new Observable((observer) => {
      const timerId = setTimeout(() => {
        if (category === '모두') {
          axios.get(`${SERVER}/ingredients/sandwich/`)
            .then((response) => {
              observer.next(response.data.results)
              observer.complete()
            })
            .catch((error) => {
              observer.error(error)
              observer.complete()
            })
        } else {
          const param = encodeURIComponent(category)
          axios.get(`${SERVER}/ingredients/sandwich/?category=${param}`)
            .then((response) => {
              observer.next(response.data.results)
              observer.complete()
            })
            .catch((error) => {
              observer.error(error)
              observer.complete()
            })
        }
      }, TIMEOUT)
      return () => clearTimeout(timerId)
    })
  }
}
