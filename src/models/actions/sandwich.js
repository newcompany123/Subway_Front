import axios from 'axios'

const GET_RANKING = 'mysubway/sandwich/GET_RANKING'

export const actionTypes = {
  GET_RANKING
}

const getRanking = () => async dispatch => {
  const response = await axios.get('/recipe/?page=1&page_size=5')
  dispatch({ type: GET_RANKING, payload: response.data.results })
}

export const actionCreators = {
  getRanking
}
