import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Login from './components/Login'
import Main from './components/Main'

export default class AppRouter extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <div>
          <Route exact path='/' component={Login} />
          <Route exact path='/main' component={Main} />
        </div>
      </BrowserRouter>
    )
  }
}