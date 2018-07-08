import React from 'react'

import { images } from '../common/ImageUtils'
import '../styles/styles.css'

export default class Login extends React.Component {
  render () {
    return (
        <div className="file is-desktop is-centered">
          <img src={images.bgSandwich} alt='bg_sandwich' />
        </div>
    )
  }
}
