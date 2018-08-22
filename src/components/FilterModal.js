import _ from 'lodash'
import React from 'react'
import Modal from 'react-modal'
import { connect } from 'react-redux'

import { images } from '../common/ImageUtils'
import { actionCreators as sandwichActionCreators } from '../models/actions/sandwich'
import { actionCreators as screenActionCreators } from '../models/actions/screen'

const METHOD = [
  { type: '랭킹 높은 순' },
  { type: '하트 많은 순' },
  { type: '저장 많은 순' },
  { type: '최신 등록 순' }
]

const CATEGORY = [
  { status: '모두' },
  { status: '신제품' },
  { status: '프로모션' },
  { status: '클래식' },
  { status: '프레쉬 & 라이트' },
  { status: '프리미엄' },
  { status: '아침메뉴' }
]

function makeInitialState () {
  return {
    methodType: METHOD[0].type,
    category: CATEGORY[0].status,
    selectedItems: []
  }
}

class FilterModal extends React.Component {
  constructor (props) {
    super(props)
    this.state = makeInitialState()
    this.props.getCategoryList(this.state.category)
  }

  shouldComponentUpdate (nextProps, nextState) {
    if (this.state.category !== nextState.category) {
      this.props.getCategoryList(nextState.category)
    }

    return true
  }

  _changeMethod = (method) => {
    this.setState({
      methodType: method.type
    })
  }

  _changeStatus = (category) => {
    this.setState({
      category: category.status
    })
  }

  _closeFilterModal = () => {
    this.props.closeFilterModal() && this.setState(makeInitialState())
  }

  render () {
    const { filterModalVisible, filteredItems } = this.props
    return (
      <Modal
        isOpen={filterModalVisible}
        onRequestClose={this._closeFilterModal}
      >
        <div className='filter-container'>
          <div className='filter-container__header'>
            <p className='filter-container__header__title'>
              필터
            </p>
            <img src={images.icClose} alt='close' onClick={this._closeFilterModal} />
          </div>
          <hr className='filter-container--header-divider' />
          <div className='filter-container--frame'>
            <div className='filter-container--frame--scroll'>
              <p className='filter-container__subtitle'>
                정렬 방식
              </p>
              <div className='method-container'>
                <div className='method-container--content'>
                  { _.map(METHOD, method => {
                    let buttonStyle
                    let textStyle
                    if (method.type === this.state.methodType) {
                      buttonStyle = 'method-container__button--selected'
                      textStyle = 'method-container__button__text--selected'
                    } else {
                      buttonStyle = 'method-container__button'
                      textStyle = 'method-container__button__text'
                    }
                    return (
                      <button
                        key={method.type}
                        className={buttonStyle}
                        onClick={() => this._changeMethod(method)}
                      >
                        <p className={textStyle}>{method.type}</p>
                      </button>
                    )
                  }) }
                </div>
              </div>
              <hr className='filter-container__border' />
              <p className='filter-container__subtitle'>
                카테고리
              </p>
              <div className='category-container'>
                <div className='category-container--content'>
                  { _.map(CATEGORY, category => {
                    let buttonStyle
                    let textStyle
                    if (category.status === this.state.category) {
                      buttonStyle = 'category-container__button--selected'
                      textStyle = 'category-container__button__text--selected'
                    } else {
                      buttonStyle = 'category-container__button'
                      textStyle = 'category-container__button__text'
                    }
                    return (
                      <button
                        key={category.status}
                        className={buttonStyle}
                        onClick={() => this._changeStatus(category)}
                      >
                        <p className={textStyle}>{category.status}</p>
                      </button>
                    )
                  })}
                </div>
              </div>
              <hr className='category-container__border' />
              <div className='filter-container__category'>
                <ul className='filter-container__list'>
                  {_.map(filteredItems, (filter) => {
                    let containerStyle
                    if (this.state.selectedItems.find(object => object.id === filter.id)) {
                      containerStyle = 'filter-container__container--selected'
                    } else {
                      containerStyle = 'filter-container__container'
                    }
                    return (
                      <div key={filter.id} className={containerStyle}>
                        <button
                          className='filter-container__list__block'
                          onClick={() => {
                            if (_.includes(this.state.selectedItems, filter)) {
                              this.setState({
                                selectedItems: _.reject(this.state.selectedItems, { id: filter.id })
                              })
                            } else {
                              this.setState({
                                selectedItems: this.state.selectedItems.concat(filter)
                              })
                            }
                          }}
                        >
                          <div className='filter-container__list__block--details'>
                            <img
                              className='filter-container__list__block--details__image'
                              src={filter.image_full}
                              width='84'
                              height='60'
                              alt='sandwich'
                            />
                            <p>{filter.name}</p>
                          </div>
                        </button>
                      </div>
                    )
                  })}
                </ul>
              </div>
            </div>
          </div>
          <button
            className='filter-container__submit-button'
            onClick={() => this.props.filterRanking(this.state.methodType, this.state.selectedItems)}
          >
            <p>필터 적용</p>
          </button>
        </div>
      </Modal>
    )
  }
}

const mapStateToProps = ({sandwich, screen}) => ({
  ...screen,
  filteredItems: sandwich.FilterModal.items
})

const mapDispatchToProps = {
  closeFilterModal: screenActionCreators.closeFilterModal,
  getCategoryList: sandwichActionCreators.getCategoryList,
  filterRanking: sandwichActionCreators.filterRanking
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterModal)
