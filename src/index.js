import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { createEpicMiddleware } from 'redux-observable'

import App from './App'
import reducers from './models/reducers'
import { loadUser, saveUser } from './localStorage'
import rootEpic from './models/epics'

const epicMiddleware = createEpicMiddleware(rootEpic)
const persistedStore = loadUser()
const store = createStore(reducers, persistedStore, applyMiddleware(epicMiddleware))

store.subscribe(() => {
  saveUser(store.getState().user)
})

ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.querySelector('#root')
)
