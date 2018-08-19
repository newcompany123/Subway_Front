import { combineEpics } from 'redux-observable'

import getRanking from './getRanking'
import loginUser from './loginUser'

export default combineEpics(
  getRanking,
  loginUser
)
