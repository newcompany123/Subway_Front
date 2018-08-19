import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import { createEpicMiddleware } from 'redux-observable'

import App from './App'
import reducers from './models/reducers'
import { loadUser, saveUser } from './localStorage'
import rootEpic from './models/epics'

const epicMiddleware = createEpicMiddleware()
const persistedStore = loadUser()
const store = createStore(reducers, persistedStore, applyMiddleware(epicMiddleware))

store.subscribe(() => {
  saveUser(store.getState().user)
})

epicMiddleware.run(rootEpic)

ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.querySelector('#root')
)
