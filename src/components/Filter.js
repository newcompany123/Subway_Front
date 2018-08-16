import React from 'react'

export default class Filter extends React.Component {
  render () {
    return (
      <div className='filter-container'>
        <p className='filter-container__subtitle'>
          정렬 방식
        </p>
        <div className='method-container'>
          <button className='method-container--method'>
            <p className='method-container--method__text'>랭킹 높은 순</p>
          </button>
          <button className='method-container--method'>
            <p className='method-container--method__text'>하트 많은 순</p>
          </button>
          <button className='method-container--method--selected'>
            <p className='method-container--method__text--selected'>저장 많은 순</p>
          </button>
          <button className='method-container--method'>
            <p className='method-container--method__text'>최신 등록 순</p>
          </button>
        </div>
        <hr className='filter-container__border' />
        <p className='filter-container__subtitle'>
          카테고리
        </p>
        <div className='category-container'>
          <div className='category-container--content'>
            <button className='category-container__button'>
              <p >모두</p>
            </button>
            <button className='category-container__button'>
              <p >신제품</p>
            </button>
            <button className='category-container__button'>
              <p >프로모션</p>
            </button>
            <button className='category-container__button'>
              <p >클래식</p>
            </button>
            <button className='category-container__button'>
              <p >프래쉬 &amp; 라이트</p>
            </button>
            <button className='category-container__button'>
              <p >프리미엄</p>
            </button>
            <button className='category-container__button'>
              <p >아침메뉴</p>
            </button>
          </div>
        </div>
      </div>
    )
  }
}
