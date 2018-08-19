import { combineReducers } from 'redux'

import sandwich from './sandwich'
import screen from './screen'
import user from './user'

export default combineReducers({
  sandwich,
  screen,
  user
})
