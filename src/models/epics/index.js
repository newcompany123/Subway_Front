import { combineEpics } from 'redux-observable'

import getRanking from './getRanking'

export default combineEpics(
  getRanking
)
