import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Header from './components/Header'
import Login from './components/Login'
import Ranking from './components/Ranking'

export default class AppRouter extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <div className='router'>
          <Header />
          <Route exact path='/' component={Login} />
          <Route exact path='/ranking' component={Ranking} />
        </div>
      </BrowserRouter>
    )
  }
}
