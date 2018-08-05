import { actionTypes } from '../actions/sandwich'

const initialState = {
  ranking: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_RANKING:
      return {
        ...state,
        ranking: action.payload
      }
    default:
      return state
  }
}
