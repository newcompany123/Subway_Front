import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Filter from './components/Filter'
import Login from './components/Login'
import Ranking from './components/Ranking'

export default class AppRouter extends React.Component {
  render () {
    // TODO(royhong): Path to /filter? should be modal
    return (
      <BrowserRouter>
        <div className='router'>
          <Route exact path='/' component={Login} />
          <Route exact path='/ranking' component={Ranking} />
          <Route exact path='/filter' component={Filter} />
        </div>
      </BrowserRouter>
    )
  }
}
