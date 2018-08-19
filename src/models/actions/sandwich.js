'use strict'

const GET_RANKING = 'mysubway/sandwich/GET_RANKING'

export const actionTypes = {
  GET_RANKING
}

const getRanking = (page) => ({
  type: GET_RANKING,
  page
})

export const actionCreators = {
  getRanking
}
