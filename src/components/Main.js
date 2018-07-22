import React from 'react'

import { images } from '../common/ImageUtils'

class SearchBar extends React.PureComponent {
  render () {
    return (
      <div className='is-flex' style={{ justifyContent: 'center' }}>
        <div className='control has-icons-left' style={{ width: '80%' }}>
          <input className='input is-medium' type='text' placeholder='레시피 검색하기' />
          <span className='icon is-small is-left'>
            <i className='fas fa-search' />
          </span>
        </div>
      </div>
    )
  }
}

class StatusBar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      numLikes: 256
    }
  }

  render () {
    return (
      <div className='is-flex' style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', paddingTop: 7 }}>
        <div>
          <button className='is-flex' style={{ width: 114, height: 25, borderRadius: 12, backgroundColor: 'transparent', justifyContent: 'center' }}>
            <img src={images.love} style={{ justifyContent: 'center' }} alt='love' />
            <p style={{ marginLeft: 5, display: 'inline', fontSize: 10 }}> {this.state.numLikes}명이 좋아해요</p>
          </button>
        </div>
        <div style={{ paddingLeft: 10 }}>
          <button className='is-flex' style={{ flexDirection: 'row', width: 25, height: 25, borderRadius: 12, backgroundColor: 'transparent' }}>
            <i class='far fa-bookmark' />
          </button>
        </div>
        <div style={{ paddingLeft: 7, paddingRight: 17 }}>
          <button className='is-flex' style={{ flexDirection: 'row', width: 25, height: 25, borderRadius: 12, backgroundColor: 'transparent' }}>
            <i class='far fa-bookmark' />
          </button>
        </div>
      </div>
    )
  }
}

class Main extends React.Component {
  render () {
    return (
      <div>
        <SearchBar />
        <StatusBar />
      </div>
    )
  }
}

export default Main
