import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Login from './Login'
import Main from './Main'

export default class App extends React.Component {
  render () {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route exact path='/' component={Login} />
            <Route exact path='/main' component={Main} />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}
