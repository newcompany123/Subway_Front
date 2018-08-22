import _ from 'lodash'
import 'rxjs'
import { actionCreators as sandwichActionCreators, actionTypes } from '../actions/sandwich'
import { actionCreators as screenActionCreators } from '../actions/screen'
import api from '../../clients/sandwich'

const METHOD_TO_URI = {
  '랭킹 높은 순': '-=-',
  '하트 많은 순': 'ordering=-like_count,-bookmark_count',
  '저장 많은 순': 'ordering=-bookmark_count,-like_count',
  '최신 등록 순': 'ordering=-created_date'
}

const createUriFromList = (methodType, list) => {
  const orderUri = METHOD_TO_URI[methodType]
  let sandwichUri = ''
  _.each(list, sandwich => {
    sandwichUri += sandwich.name + ','
  })
  return [orderUri, sandwichUri.slice(0, -1)]
}

export default action$ => action$
  .ofType(actionTypes.FILTER_RANKING)
  .switchMap((action) =>
    api.filterRanking(createUriFromList(action.methodType, action.list))
      .flatMap(filteredData => [
        sandwichActionCreators.filterRankingSucceed(filteredData),
        screenActionCreators.closeFilterModal()
      ]))
