import produce from 'immer'

import { actionTypes } from '../actions/sandwich'

const initialState = {
  Ranking: {
    page: 1,
    items: []
  },
  FilterModal: {
    items: []
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_RANKING_SUCCEED:
      return produce(state, (draft) => {
        draft.Ranking.page += 1
        draft.Ranking.items = draft.Ranking.items.concat(action.list)
      })
    case actionTypes.GET_CATEGORY_LIST_SUCCEED:
      return produce(state, (draft) => {
        draft.FilterModal.items = action.categoryList
      })
    case actionTypes.FILTER_RANKING_SUCCEED:
      return produce(state, draft => {
        draft.Ranking.page = 1
        draft.Ranking.items = action.filteredList
      })
    case actionTypes.GET_RANKING_FAILED: // Fallthrough
    default:
      return state
  }
}
