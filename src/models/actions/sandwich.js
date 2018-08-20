const GET_RANKING = 'mysubway/sandwich/GET_RANKING'
const GET_RANKING_SUCCEED = 'mysubway/sandwich/GET_RANKING_SUCCEED'
const GET_RANKING_FAILED = 'mysubway/sandwich/GET_RANKING_FAILED'

const GET_CATEGORY_LIST = 'mysubway/sandwich/GET_CATEGORY_LIST'
const GET_CATEGORY_LIST_SUCCEED = 'mysubway/sandwich/GET_CATEGORY_LIST_SUCCEED'

export const actionTypes = {
  GET_RANKING,
  GET_RANKING_SUCCEED,
  GET_RANKING_FAILED,
  GET_CATEGORY_LIST,
  GET_CATEGORY_LIST_SUCCEED
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

const getCategoryList = (category) => ({
  type: GET_CATEGORY_LIST,
  category
})

const getCategoryListSucceed = (categoryList) => ({
  type: GET_CATEGORY_LIST_SUCCEED,
  categoryList
})

export const actionCreators = {
  getRanking,
  getRankingSucceed,
  getRankingFailed,
  getCategoryList,
  getCategoryListSucceed
}
