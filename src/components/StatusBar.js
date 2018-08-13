import React from 'react'
import PropTypes from 'prop-types'

import { images } from '../common/ImageUtils'

export default class StatusBar extends React.PureComponent {
  static propTypes = {
    likes: PropTypes.number.isRequired
  };

  render () {
    const { likes } = this.props

    const statusBar = this.props.id % 2 === 0
      ? 'status-bar--right'
      : 'status-bar--left'

    return (
      <div className={statusBar}>
          <button className='like-container'>
            <img className='like-container__icon' src={images.love} alt='love' />
            <p className='like-container__status'> {likes}명이 좋아해요</p>
          </button>
          <button className='bookmark-container'>
            <img className='bookmark-container__icon' src={images.bookmark} alt='bookmark' />
          </button>
          <button className='share-container'>
            <img src={images.share} alt='share' />
          </button>
      </div>
    )
  }
}
