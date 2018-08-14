import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'

import App from './App'
import reducers from './models/reducers'
import { loadUser, saveUser } from './localStorage'

const persistedStore = loadUser()
const store = createStore(reducers, persistedStore, applyMiddleware(reduxThunk))

store.subscribe(() => {
  saveUser(store.getState().user)
})

ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.querySelector('#root')
)
