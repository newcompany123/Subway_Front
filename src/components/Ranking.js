import _ from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'
import Modal from 'react-modal'
import { connect } from 'react-redux'

import { actionCreators } from '../models/actions/sandwich'

import FilterModal from './FilterModal'
import SearchBar from './SearchBar'
import StatusBar from './StatusBar'

const initialState = {
  isLoading: false,
  error: false
}

Modal.setAppElement('#root')

class Ranking extends React.Component {
  static propTypes = {
    page: PropTypes.number.isRequired,
    items: PropTypes.array
  }

  constructor (props) {
    super(props)
    // Sets up our initial state
    this.state = {
      error: false,
      isLoading: false,
      details: {},
      // move hasMore to redux. keep track
      hasMore: true
    }
  }

  componentDidMount () {
    this.setState({
      ...initialState
    })
    window.addEventListener('scroll', this._onScroll, false)
    this.props.getRanking(this.props.page)
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this._onScroll, false)
  }

  _onScroll = () => {
    const { error, isLoading, hasMore } = this.state
    if (error || isLoading || !hasMore) return

    const reachedBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight

    if (reachedBottom) {
      this.setState({
        isLoading: true
      })
      this.props.getRanking(this.props.page)
    }
  }

  _toggleView = (id) => {
    const existing = _.get(this.state.details, [id], false)
    if (existing) {
      this.setState({
        details: _.assign(this.state.details, { [id]: false })
      })
    } else {
      this.setState({
        details: _.assign(this.state.details, { [id]: true })
      })
    }
  }

  _showDetails = (category) => {
    const detail = category.multi
      ? _.map(category.route, item => (
        <div key={item.name}>
          <img src={item.image} className='item-detail__image' alt={item.name} />
          <p className='item-detail--container__name'>
            { item.name }
          </p>
        </div>
      ))
      : (
        <div>
          <img src={category.route.image} className='item-detail__image' alt={category.name} />
          <p className='item-detail--container__name'>
            { category.route.name }
          </p>
        </div>
      )
    return (
      <div key={category.title} className='item-detail'>
        <p className='item-detail__title'>
          { category.title }
        </p>
        <div className='item-detail--container'>
          { detail }
        </div>
      </div>
    )
  }

  _getDetails = (item) => ([
    { title: '메인 재료', multi: true, route: item.sandwich.main_ingredient },
    { title: '빵 선택', multi: false, route: item.bread },
    { title: '치즈 선택', multi: false, route: item.cheese },
    { title: '추가 선택', multi: true, route: item.toppings },
    { title: '토스팅 여부', multi: false, route: item.toasting },
    { title: '야채 선택', multi: true, route: item.vegetables },
    { title: '소스 선택', multi: true, route: item.sauces }
  ])

  // TODO(royhong): Use classnames library to combine both renderRight and renderLeft
  _renderRight (item, index) {
    const existing = _.get(this.state.details, item.id, false)
    return (
      <div key={index}>
        <div className='sandwich-item--right'>
          <img src={item.sandwich.image_right} className='sandwich-item__image' alt='sandwich_right' />
        </div>
        <div
          className='sandwich-item__details--right'
          onClick={() => this._toggleView(item.id)}
        >
          <div className='sandwich-item__container--right'>
            <div className='sandwich-item__container__name-ranking--right'>
              <p className='sandwich-item__container__name-ranking__name--right'>
                { item.name.name }
              </p>
              <p className='sandwich-item__container__name-ranking__ranking'>
                { String(index + 1).padStart(2, '0') }
              </p>
            </div>
            <div className='sandwich-item__divider-container--right'>
              <div className='sandwich-item__divider-container__divider' />
            </div>
            { existing && _.map(this._getDetails(item), category => this._showDetails(category)) }
          </div>
        </div>
        <StatusBar id={index} likes={item.like_count} highlight={existing} />
      </div>
    )
  }

  _renderLeft (item, index) {
    const existing = _.get(this.state.details, item.id, false)
    return (
      <div key={index}>
        <div className='sandwich-item--left'>
          <img src={item.sandwich.image_left} width='320px' height='165px' alt='sandwich_left' />
        </div>
        <div
          className='sandwich-item__details--left'
          onClick={() => this._toggleView(item.id)}
        >
          <div className='sandwich-item__container--left'>
            <div className='sandwich-item__container__name-ranking--left'>
              <p className='sandwich-item__container__name-ranking__name--left'>
                { item.name.name }
              </p>
              <p className='sandwich-item__container__name-ranking__ranking'>
                { String(index + 1).padStart(2, '0') }
              </p>
            </div>
            <div className='sandwich-item__divider-container--left'>
              <div className='sandwich-item__divider-container__divider' />
            </div>
            { existing && _.map(this._getDetails(item), category => this._showDetails(category)) }
          </div>
        </div>
        <StatusBar id={index} likes={item.like_count} highlight={existing} />
      </div>
    )
  }

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
        <FilterModal />
      </div>
    )
  }
}

const mapStateToProps = ({ sandwich, screen }) => ({
  ...sandwich.Ranking
})

const mapDispatchToProps = {
  getRanking: actionCreators.getRanking
}

export default connect(mapStateToProps, mapDispatchToProps)(Ranking)
