import _ from 'lodash'
import React from 'react'

import { images } from '../common/ImageUtils'

const styles = {
  bookmarkContainer: {
    paddingLeft: 10
  },
  bookmarkContents: {
    flexDirection: 'row',
    width: 25,
    height: 25,
    borderRadius: 12,
    backgroundColor: 'transparent'
  },
  currentLoves: {
    marginLeft: 5,
    display: 'inline',
    fontSize: 10
  },
  outerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 7
  },
  loveContainer: {
    width: 114,
    height: 25,
    borderRadius: 12,
    backgroundColor: 'transparent',
    justifyContent: 'center'
  },
  loveContainerEven: {
    width: 114,
    height: 25,
    borderRadius: 12,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    marginLeft: 16
  },
  loveIcon: {
    justifyContent: 'center'
  },
  shareContainer: {
    paddingLeft: 7,
    paddingRight: 17
  },
  shareContents: {
    flexDirection: 'row',
    width: 25,
    height: 25,
    borderRadius: 12,
    backgroundColor: 'transparent'
  }
}

export default class StatusBar extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      numLoves: 256
    }
  }

  // TODO(royhong): Switch second bookmark to export icon
  render () {
    const outerContainer = {}
    const loveContainer = {}

    if (this.props.id % 2 === 1) {
      _.assign(outerContainer, styles.outerContainer, {justifyContent: 'flex-end'})
      _.assign(loveContainer, styles.loveContainer)
    } else {
      _.assign(outerContainer, styles.outerContainer, {justifyContent: 'flex-start'})
      _.assign(loveContainer, styles.loveContainer, { marginLeft: 16 })
    }

    return (
      <div className='is-flex' style={outerContainer}>
        <div>
          <button className='is-flex' style={loveContainer}>
            <img src={images.love} style={styles.loveIcon} alt='love' />
            <p style={styles.currentLoves}> {this.state.numLoves}명이 좋아해요</p>
          </button>
        </div>
        <div style={styles.bookmarkContainer}>
          <button className='is-flex' style={styles.bookmarkContents}>
            <img src={images.bookmark} alt='bookmark' />
          </button>
        </div>
        <div style={styles.shareContainer}>
          <button className='is-flex' style={styles.shareContents}>
            <img src={images.share} alt='share' />
          </button>
        </div>
      </div>
    )
  }
}
