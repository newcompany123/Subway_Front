import React from 'react'
import { Link } from 'react-router-dom'

import { images } from '../common/ImageUtils'

export default class SearchBar extends React.PureComponent {
  render () {
    return (
      <div className='search'>
        <div className='search--border'>
          <img className='search__icon' src={images.icSearch} alt='search' />
          <input className='search--contents' type='text' placeholder='레시피 검색하기' />
        </div>
        <button className='search__filter'>
          <Link to='/filter'>
            <img src={images.filter} alt='filter' />
          </Link>
        </button>
      </div>
    )
  }
}
