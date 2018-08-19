import 'rxjs'

import { actionCreators, actionTypes } from '../actions/sandwich'
import api from '../../clients/sandwich'

export default action$ => action$
  .ofType(actionTypes.GET_RANKING)
  .switchMap((action) => api.getRanking(action.page)
    .do(x => console.log(x))
    .map(sandwichList => actionCreators.getRankingSucceed(sandwichList))
  )
