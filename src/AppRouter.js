import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Login from './components/Login'
import Ranking from './components/Ranking'

export default class AppRouter extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <div>
          <Route exact path='/' component={Login} />
          <Route exact path='/ranking' component={Ranking} />
        </div>
      </BrowserRouter>
    )
  }
}