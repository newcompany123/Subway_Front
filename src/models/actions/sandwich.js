const GET_RANKING = 'mysubway/sandwich/GET_RANKING'
const GET_RANKING_SUCCEED = 'mysubway/sandwich/GET_RANKING_SUCCEED'
const GET_RANKING_FAILED = 'mysubway/sandwich/GET_RANKING_FAILED'

export const actionTypes = {
  GET_RANKING,
  GET_RANKING_SUCCEED,
  GET_RANKING_FAILED
}

const getRanking = (page) => ({
  type: GET_RANKING,
  page
})

const getRankingSucceed = (list) => ({
  type: GET_RANKING_SUCCEED,
  list
})

const getRankingFailed = () => ({
  type: GET_RANKING_FAILED
})

export const actionCreators = {
  getRanking,
  getRankingSucceed,
  getRankingFailed
}
