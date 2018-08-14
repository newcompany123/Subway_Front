import produce from 'immer'

import { actionTypes } from '../actions/user'

const initialState = {
  user: {
    id: null,
    username: '',
    email: '',
    token: null
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_USER:
      const data = action.payload
      return produce(state, (draft) => {
        draft.user.id = data.id
        draft.user.username = data.username
        draft.user.email = data.email
        draft.user.token = data.token
      })
    default:
      return state
  }
}
