import classNames from 'classnames/bind'
import PropTypes from 'prop-types'
import React from 'react'

import { images } from '../common/ImageUtils'

export default class StatusBar extends React.PureComponent {
  static propTypes = {
    likes: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    highlight: PropTypes.bool.isRequired
  };

  render () {
    const { likes, id, highlight } = this.props

    const statusBar = classNames(
      { 'status-bar--right': id % 2 === 0 },
      { 'status-bar--left' : id % 2 === 1 },
      { 'status-bar--highlight': highlight }
    )

    return (
      <div className={statusBar}>
          <button className='like-container'>
            <img className='like-container__icon' src={images.love} alt='love' />
            <p className='like-container__status'> {likes}명이 좋아해요</p>
          </button>
          <button className='bookmark-container'>
            <img src={images.bookmark} alt='bookmark' />
          </button>
          <button className='share-container'>
            <img src={images.share} alt='share' />
          </button>
      </div>
    )
  }
}
