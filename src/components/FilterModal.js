import _ from 'lodash'
import React from 'react'
import Modal from 'react-modal'
import { connect } from 'react-redux'

import { images } from '../common/ImageUtils'
import { actionCreators } from '../models/actions/screen'

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
  { status: '프래쉬 & 라이트' },
  { status: '프리미엄' },
  { status: '아침메뉴' }
]

function makeInitialState () {
  return {
    methodType: METHOD[0].type,
    category: CATEGORY[0].status
  }
}

class FilterModal extends React.Component {
  constructor (props) {
    super(props)
    this.state = makeInitialState()
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
    this.props.closeFilterModal() && this.setState(makeInitialState());
  }

  render () {
    const { filterModalVisible } = this.props
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
        </div>
      </Modal>
    )
  }
}

const mapStateToProps = ({screen}) => ({
  ...screen
})

const mapDispatchToProps = {
  closeFilterModal: actionCreators.closeFilterModal
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterModal)
