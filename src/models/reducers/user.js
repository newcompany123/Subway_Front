import produce from 'immer'

import { actionTypes } from '../actions/user'

const initialState = {
  id: null,
  username: '',
  email: '',
  token: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_USER_SUCCEED:
      const user = action.user
      return produce(state, (draft) => {
        draft.id = user.id
        draft.username = user.username
        draft.email = user.email
        draft.token = user.token
      })
    default:
      return state
  }
}
