import 'rxjs'
import { Observable } from 'rxjs/Observable'

import { actionCreators, actionTypes } from '../actions/sandwich'
import api from '../../clients/sandwich'

export default action$ => action$
  .ofType(actionTypes.GET_RANKING)
  .switchMap((action) =>
    api.getRanking(action.page)
      .map(sandwichList => actionCreators.getRankingSucceed(sandwichList))
      .catch(() => Observable.of(actionCreators.getRankingFailed()))
  )
