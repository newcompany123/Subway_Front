import _ from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'

import { actionCreators } from '../models/actions/sandwich'

import SearchBar from './SearchBar'
import StatusBar from './StatusBar'

// TODO(royhong): Make Contents responsive

const initialState = {
  isLoading: false,
  error: false
}

// TODO(royhong): Make DRY
class Main extends React.Component {
  static propTypes = {
    page: PropTypes.number.isRequired
  }

  constructor (props) {
    super (props)
    // Sets up our initial state
    this.state = {
      error: false,
      isLoading: false,

      //move hasMore to redux. keep track
      hasMore: true
    }
  }

  componentDidMount() {
    this.setState({
      ...initialState
    })
    window.addEventListener('scroll', this._onScroll, false);
    this.props.getRanking(this.props.page)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this._onScroll, false);
  }


  _onScroll = () => {
    const { error, isLoading, hasMore } = this.state;
    if (error || isLoading || !hasMore) return;

    const reachedBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight

    if (reachedBottom) {
      this.setState({
        isLoading: true
      })
      this.props.getRanking(this.props.page);
    }
  }

  _renderRight (item, index) {
    return (
      <div key={index}>
        <div className='sandwich-item sandwich-item--right'>
          <img src={item.sandwich.image_right} alt='sandwich_right' />
        </div>
        <div className='sandwich-item__details--right'>
          <div className='sandwich-item__container sandwich-item__container--right'>
            <div className='sandwich-item__container__name-ranking--right'>
              <p className='sandwich-item__container__name-ranking sandwich-item__container__name-ranking__name--right'>
                { item.name.name }
              </p>
              <p className='sandwich-item__container__name-ranking sandwich-item__container__name-ranking__ranking'>
                { String(index + 1).padStart(2, '0') }
              </p>
            </div>
          </div>
        </div>
        <div className='sandwich-item__divider sandwich-item__divider--right'>
          <div className='sandwich-item__divider-green' />
        </div>
        <StatusBar id={index} likes={item.like_count} />
      </div>
    )
  }

  _renderLeft (item, index) {
    return (
      <div key={index}>
        <div className='sandwich-item sandwich-item--left'>
          <img src={item.sandwich.image_left} alt='sandwich_left' />
        </div>
        <div className='sandwich-item__details--left'>
          <div className='sandwich-item__container sandwich-item__container--left'>
            <div className='sandwich-item__container__name-ranking--left'>
              <p className='sandwich-item__container__name-ranking sandwich-item__container__name-ranking__name--left'>
                { item.name.name }
              </p>
              <p className='sandwich-item__container__name-ranking sandwich-item__container__name-ranking__ranking'>
                { String(index + 1).padStart(2, '0') }
              </p>
            </div>
          </div>
        </div>
        <div className='sandwich-item__divider sandwich-item__divider--left'>
          <div className='sandwich-item__divider-green' />
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
