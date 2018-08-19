import 'rxjs'

import { actionCreators, actionTypes } from '../actions/user'
import api from '../../clients/user'

export default action$ => action$
  .ofType(actionTypes.LOGIN_USER)
  .switchMap((action) =>
    api.loginUser(action.source, action.accessToken)
      .map(user => actionCreators.loginUserSucceed(user))
  )
