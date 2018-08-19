import { actionTypes } from '../actions/screen'

const initialState = {
  filterModalVisible: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.OPEN_FILTER_MODAL:
      return {
        ...state,
        filterModalVisible: true
      }
    case actionTypes.CLOSE_FILTER_MODAL:
      return {
        ...state,
        filterModalVisible: false
      }
    default:
      return state
  }
}
