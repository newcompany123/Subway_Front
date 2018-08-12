import axios from 'axios'

const GET_RANKING = 'mysubway/sandwich/GET_RANKING'
const PAGE_SIZE = 5

export const actionTypes = {
  GET_RANKING
}

const getRanking = (page) => async dispatch => {
  const response = await axios.get(`/recipe/?page=${page}&page_size=${PAGE_SIZE}`)
  dispatch({ type: GET_RANKING, payload: response.data.results })
}

export const actionCreators = {
  getRanking
}
