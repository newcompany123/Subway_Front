import { combineEpics } from 'redux-observable'

import filterRanking from './filterRanking'
import getCategoryList from './getCategoryList'
import getRanking from './getRanking'
import loginUser from './loginUser'

export default combineEpics(
  filterRanking,
  getCategoryList,
  getRanking,
  loginUser
)
