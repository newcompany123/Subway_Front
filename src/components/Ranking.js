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

class Ranking extends React.Component {
  static propTypes = {
    page: PropTypes.number.isRequired,
    items: PropTypes.array
  }

  constructor (props) {
    super (props)
    // Sets up our initial state
    this.state = {
      error: false,
      isLoading: false,
      details: {},
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

  _showDetails = (item) => {
    return (
      <div style={{display: 'flex', flexDirection: 'column', marginTop: 21, marginLeft: 20, alignSelf: 'flex-start'}}>
        <p style={{ fontSize: 14, fontWeight: 'bold'}}>
          메인 재료
        </p>
        <div style={{ display: 'flex', width: 315, backgroundColor: '#fff', flexDirection: 'row', marginTop: 10 }}>
          {_.map(item.sandwich.main_ingredient, (main) => (
            <div>
              <img src={main.image} />
              <p style={{ textAlign: 'center' }}>{ main.name }</p>
            </div>
          ))}
        </div>
        <p style={{ fontSize: 14, fontWeight: 'bold', marginTop: 10 }}>
          빵 선택
        </p>
        <div style={{ display: 'flex', width: 315, backgroundColor: '#fff', flexDirection: 'row', marginTop: 10 }}>
          <div>
            <img src={item.bread.image} width='80px' height='55px' />
            <p style={{ textAlign: 'center' }}>{ item.bread.name }</p>
          </div>
        </div>
        <p style={{ fontSize: 14, fontWeight: 'bold', marginTop: 10 }}>
          치즈 선택
        </p>
        <div style={{ display: 'flex', width: 315, backgroundColor: '#fff', flexDirection: 'row', marginTop: 10 }}>
          <div>
            <img src={item.cheese.image} width='80px' height='55px' />
            <p style={{ textAlign: 'center' }}>{ item.cheese.name }</p>
          </div>
        </div>
        <p style={{ fontSize: 14, fontWeight: 'bold', marginTop: 10 }}>
          추가 선택
        </p>
        <div style={{ display: 'flex', width: 315, backgroundColor: '#fff', flexDirection: 'row', marginTop: 10 }}>
          {_.map(item.toppings, (topping) => (
            <div>
              <img src={topping.image} />
              <p style={{ textAlign: 'center' }}>{ topping.name }</p>
            </div>
          ))}
        </div>
        <p style={{ fontSize: 14, fontWeight: 'bold', marginTop: 10 }}>
          토스팅 여부
        </p>
        <div style={{ display: 'flex', width: 315, backgroundColor: '#fff', flexDirection: 'row', marginTop: 10 }}>
          <div>
            <img src={item.toasting.image} width='80px' height='55px' />
            <p style={{ textAlign: 'center' }}>{ item.toasting.name }</p>
          </div>
        </div>
        <p style={{ fontSize: 14, fontWeight: 'bold', marginTop: 10 }}>
          야채 선택
        </p>
        <div style={{ display: 'flex', width: 315, backgroundColor: '#fff', flexDirection: 'row', marginTop: 10 }}>
        {_.map(item.vegetables, (veg) => (
            <div>
              <img src={veg.image} />
              <p style={{ textAlign: 'center' }}>{ veg.name }</p>
            </div>
          ))}
        </div>
        <p style={{ fontSize: 14, fontWeight: 'bold', marginTop: 10 }}>
          소스 선택
        </p>
        <div style={{ display: 'flex', width: 315, backgroundColor: '#fff', flexDirection: 'row', marginTop: 10, marginBottom: 20 }}>
        {_.map(item.sauces, (sauce) => (
            <div>
              <img src={sauce.image} />
              <p style={{ textAlign: 'center' }}>{ sauce.name }</p>
            </div>
          ))}
        </div>
      </div>
    )
  }

  _renderRight (item, index) {
    const existing = _.get(this.state.details, item.id, false)
    return (
      <div key={index}>
        <div className='sandwich-item--right'>
          <img src={item.sandwich.image_right} width='320px' height='165px' alt='sandwich_right' />
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
            {existing && this._showDetails(item)}
          </div>
        </div>
        <div style={{ position: 'inline-block', float: 'right', width: 360, backgroundColor:'#efefef' }}>
        <StatusBar id={index} likes={item.like_count} />
        </div>
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
        {existing && this._showDetails(item)}
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
  ...sandwich.Ranking
})

const mapDispatchToProps = {
  getRanking: actionCreators.getRanking
}

export default connect(mapStateToProps, mapDispatchToProps)(Ranking)
