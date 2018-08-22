const GET_RANKING = 'mysubway/sandwich/GET_RANKING'
const GET_RANKING_SUCCEED = 'mysubway/sandwich/GET_RANKING_SUCCEED'
const GET_RANKING_FAILED = 'mysubway/sandwich/GET_RANKING_FAILED'

const GET_CATEGORY_LIST = 'mysubway/sandwich/GET_CATEGORY_LIST'
const GET_CATEGORY_LIST_SUCCEED = 'mysubway/sandwich/GET_CATEGORY_LIST_SUCCEED'

const FILTER_RANKING = 'mysubway/sandwich/FILTER_RANKING'
const FILTER_RANKING_SUCCEED = 'mysubway/sandwich/FILTER_RANKING_SUCCEED'

export const actionTypes = {
  GET_RANKING,
  GET_RANKING_SUCCEED,
  GET_RANKING_FAILED,
  GET_CATEGORY_LIST,
  GET_CATEGORY_LIST_SUCCEED,
  FILTER_RANKING,
  FILTER_RANKING_SUCCEED
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

const filterRanking = (methodType, list) => ({
  type: FILTER_RANKING,
  methodType,
  list
})

const filterRankingSucceed = (filteredList) => ({
  type: FILTER_RANKING_SUCCEED,
  filteredList
})

export const actionCreators = {
  getRanking,
  getRankingSucceed,
  getRankingFailed,
  getCategoryList,
  getCategoryListSucceed,
  filterRanking,
  filterRankingSucceed
}
