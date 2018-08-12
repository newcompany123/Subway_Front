import _ from 'lodash'
import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { COLORS } from '../common/Constants'
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
  static propTypes = {
    page: PropTypes.number.isRequired
  }

  componentDidMount () {
    this.props.getRanking(this.props.page)
  }

  _renderRight (item, index) {
    return (
      <div key={index}>
        <div className='is-flex' style={{ flexDirection: 'column-reverse' }}>
          <div className='is-flex' style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
            <div style={styles.greenBar} />
          </div>
          <div className='is-flex' style={styles.sandwichInfoOuterContainer}>
            <div style={styles.sandwichInfoContainer}>
              <div className='is-flex' style={styles.sandwichContainer}>
                <p className='is-flex' style={styles.sandwichTitle}>
                  { item.name.name }
                </p>
                <p style={{ fontSize: 64, fontWeight: 'bold', marginRight: 14 }}>
                  { String(index + 1).padStart(2, '0') }
                </p>
              </div>
            </div>
          </div>
          <div className='is-flex' style={{ paddingTop: 21, flexDirection: 'row', justifyContent: 'flex-end' }}>
            <img src={item.sandwich.image_right} alt='sandwich_right' />
          </div>
        </div>
        <StatusBar id={index} likes={item.like_count} />
      </div>
    )
  }

  _renderLeft (item, index) {
    return (
      <div key={index}>
        <div className='is-flex' style={{ flexDirection: 'column-reverse' }}>
          <div className='is-flex' style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
            <div style={styles.greenBar} />
          </div>
          <div className='is-flex' style={{ marginTop: -25, flexDirection: 'row', justifyContent: 'flex-start' }}>
            <div style={{ width: 341, height: 100, backgroundColor: COLORS.LIGHT_GREY, borderRadius: 4 }}>
              <div className='is-flex' style={{ width: '100%', height: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
                <p style={{ fontSize: 64, fontWeight: 'bold', marginRight: 14 }}>
                  { String(index + 1).padStart(2, '0') }
                </p>
                <p className='is-flex' style={{ zIndex: 1, width: '80%', alignItems: 'flex-end', fontSize: 26, fontWeight: 'bold', marginLeft: 14, textAlign: 'right', marginRight: 14 }}>
                  { item.name.name }
                </p>
              </div>
            </div>
          </div>
          <div className='is-flex' style={{ paddingTop: 21, flexDirection: 'row', justifyContent: 'flex-start' }}>
            <img src={item.sandwich.image_left} height={160} width={320} alt='sample_left' />
          </div>
        </div>
        <StatusBar id={index} likes={item.like_count} />
      </div>
    )
  }

  // TODO(royhong): View should not assume data
  render () {
    const { items } = this.props
    const data = []
    _.forEach(items, (item, index) => {
      if (index % 2 === 0) {
        data.push(this._renderRight(item, index))
      } else {
        data.push(this._renderLeft(item, index))
      }
    })
    return (
      <div>
        <SearchBar />
        { data }
      </div>
    )
  }
}

const mapStateToProps = ({ sandwich }) => ({
  ...sandwich.Main
})

const mapDispatchToProps = {
  getRanking: actionCreators.getRanking
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
