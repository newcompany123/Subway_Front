import React from 'react'

import {images} from '../common/ImageUtils'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <img src={images.bgSandwich} />
      </div>
    )
  }
}
