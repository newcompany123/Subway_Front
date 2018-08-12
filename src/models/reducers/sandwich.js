import produce from 'immer'

import { actionTypes } from '../actions/sandwich'

const initialState = {
  Main: {
    page: 1,
    items: []
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_RANKING:
      return produce(state, (draft) => {
        draft.Main.page += 1
        draft.Main.items = draft.Main.items.concat(action.payload)
      })
    default:
      return state
  }
}
