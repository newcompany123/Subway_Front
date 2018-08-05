import React from 'react'
import { connect } from 'react-redux'

import { COLORS } from '../common/Constants'
import { images } from '../common/ImageUtils'
import { actionCreators } from '../models/actions/sandwich'

import SearchBar from './SearchBar'
import StatusBar from './StatusBar'

// TODO(royhong): Clean up CSS, avoid inline styling
// TODO(royhong): Make Contents responsive
const styles = {
  greenBar: {
    width: 56,
    height: 4,
    marginTop: -4,
    backgroundColor: COLORS.GREEN,
    zIndex: 2
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
  }
}

// TODO(royhong): Make DRY
class Main extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      page: 0
    }
  }

  componentDidMount () {
    this.props.getRanking()
  }

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
              <div style={styles.greenBar} />
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
              <img src={images.leftSandwich} style={{ width: 326, height: 160 }} alt='sample_left' />
            </div>
          </div>
          <StatusBar id={2} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {}
}

const mapDispatchToProps = {
  getRanking: actionCreators.getRanking
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
