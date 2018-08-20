import { combineEpics } from 'redux-observable'

import getCategoryList from './getCategoryList'
import getRanking from './getRanking'
import loginUser from './loginUser'

export default combineEpics(
  getCategoryList,
  getRanking,
  loginUser
)
