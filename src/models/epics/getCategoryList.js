import 'rxjs'

import { actionCreators, actionTypes } from '../actions/sandwich'
import api from '../../clients/sandwich'

export default action$ => action$
  .ofType(actionTypes.GET_CATEGORY_LIST)
  .switchMap((action) =>
    api.getCategoryList(action.methodType, action.category)
      .map(categoryList => actionCreators.getCategoryListSucceed(categoryList))
  )
