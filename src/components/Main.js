import React from 'react'

import { COLORS } from '../common/Constants'
import { images } from '../common/ImageUtils'

// TODO(royhong): Clean up CSS, avoid inline styling
// TODO(royhong): Make Contents responsive
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
  greenBar: {
    width: 56,
    height: 4,
    marginTop: -4,
    backgroundColor: COLORS.GREEN,
    zIndex: 2
  },
  loveIcon: {
    justifyContent: 'center'
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
  outerContainerEven: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 7
  },
  outerContainerOdd: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingTop: 7
  },
  sandwichContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  sandwichInfoContainer: {
    width: 341,
    height: 100,
    borderRadius: 4,
    backgroundColor: COLORS.LIGHT_GREY
  },
  sandwichInfoOuterContainer: {
    flexDirection: 'row',
    marginTop: -25,
    justifyContent: 'flex-end'
  },
  sandwichTitle: {
    width: '80%',
    alignItems: 'flex-end',
    fontSize: 26,
    fontWeight: 'bold',
    marginLeft: 14,
    textAlign: 'right',
    marginRight: 14,
    zIndex: 1
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

class StatusBar extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      numLoves: 256
    }
  }

  // TODO(royhong): Switch second bookmark to export icon
  render () {
    if (this.props.id % 2 === 1) {
      return (
        <div className='is-flex' style={styles.outerContainerOdd}>
          <div>
            <button className='is-flex' style={styles.loveContainer}>
              <img src={images.love} style={styles.loveIcon} alt='love' />
              <p style={styles.currentLoves}> {this.state.numLoves}명이 좋아해요</p>
            </button>
          </div>
          <div style={styles.bookmarkContainer}>
            <button className='is-flex' style={styles.bookmarkContents}>
              <i className='far fa-bookmark' />
            </button>
          </div>
          <div style={styles.shareContainer}>
            <button className='is-flex' style={styles.shareContents}>
              <i className='far fa-bookmark' />
            </button>
          </div>
        </div>
      )
    } else {
      return (
        <div className='is-flex' style={styles.outerContainerEven}>
          <div>
            <button className='is-flex' style={styles.loveContainerEven}>
              <img src={images.love} style={styles.loveIcon} alt='love' />
              <p style={styles.currentLoves}> {this.state.numLoves}명이 좋아해요</p>
            </button>
          </div>
          <div style={styles.bookmarkContainer}>
            <button className='is-flex' style={styles.bookmarkContents}>
              <i className='far fa-bookmark' />
            </button>
          </div>
          <div style={styles.shareContainer}>
            <button className='is-flex' style={styles.shareContents}>
              <i className='far fa-bookmark' />
            </button>
          </div>
        </div>
      )
    }
  }
}

// TODO(royhong): Make DRY
class Main extends React.Component {
  render () {
    return (
      <div>
        <SearchBar />
        <div>
          {/* Odd = Right Side */}
          <div className='is-flex' style={{ flexDirection: 'column-reverse' }}>
            <div className='is-flex' style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
              <div style={styles.greenBar} />
            </div>
            <div className='is-flex' style={styles.sandwichInfoOuterContainer}>
              <div style={styles.sandwichInfoContainer}>
                <div className='is-flex' style={styles.sandwichContainer}>
                  <p className='is-flex' style={styles.sandwichTitle}>
                    BTS가 팬들에게 사주고 싶은 BLT
                  </p>
                  <p style={{ fontSize: 64, fontWeight: 'bold', marginRight: 14 }}>
                    01
                  </p>
                </div>
              </div>
            </div>
            <div className='is-flex' style={{ paddingTop: 21, flexDirection: 'row', justifyContent: 'flex-end' }}>
              <img src={images.rightSandwich} style={{ width: 326, height: 160 }} alt='sample_right' />
            </div>
          </div>
          <StatusBar id={1} />
        </div>

        <div>
          {/* Even = Left Side */}
          <div className='is-flex' style={{ flexDirection: 'column-reverse' }}>
            <div className='is-flex' style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
              <div style={{ zIndex: 2, width: 56, height: 4, marginTop: -4, backgroundColor: '#228B22' }} />
            </div>
            <div className='is-flex' style={{ marginTop: -25, flexDirection: 'row', justifyContent: 'flex-start' }}>
              <div style={{ width: 341, height: 100, backgroundColor: COLORS.LIGHT_GREY, borderRadius: 4 }}>
                <div className='is-flex' style={{ width: '100%', height: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
                  <p style={{ fontSize: 64, fontWeight: 'bold', marginRight: 14 }}>
                    02
                  </p>

                  <p className='is-flex' style={{ zIndex: 1, width: '80%', alignItems: 'flex-end', fontSize: 26, fontWeight: 'bold', marginLeft: 14, textAlign: 'right', marginRight: 14 }}>
                    불금 클럽 샌드위치
                  </p>
                </div>
              </div>
            </div>
            <div className='is-flex' style={{ paddingTop: 21, flexDirection: 'row', justifyContent: 'flex-start' }}>
              <img src={images.leftSandwich} style={{ width: 326, height: 160 }} alt='sample_right' />
            </div>
          </div>
          <StatusBar id={2} />
        </div>
      </div>
    )
  }
}

export default Main
