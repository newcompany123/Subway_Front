import axios from 'axios'

import { PAGE_SIZE, SERVER } from '../../common/Constants'

const GET_RANKING = 'mysubway/sandwich/GET_RANKING'

export const actionTypes = {
  GET_RANKING
}

const getRanking = (page) => async dispatch => {
  const response = await axios.get(`${SERVER}/recipe/?page=${page}&page_size=${PAGE_SIZE}`)
  dispatch({ type: GET_RANKING, payload: response.data.results })
}

export const actionCreators = {
  getRanking
}
