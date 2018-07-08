import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Login from './Login'

export default class App extends React.Component {
  render() {
    return (
      <section className="section">
        <BrowserRouter>
          <div>
            <Route exact path='/' component={Login} />
          </div>
        </BrowserRouter>
      </section>
    )
  }
}
