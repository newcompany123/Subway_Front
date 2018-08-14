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
    case actionTypes.LOGIN_USER:
      const data = action.payload
      return produce(state, (draft) => {
        draft.id = data.id
        draft.username = data.username
        draft.email = data.email
        draft.token = data.token
      })
    default:
      return state
  }
}
