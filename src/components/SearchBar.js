import React from 'react'
import { connect } from 'react-redux'

import { images } from '../common/ImageUtils'
import { actionCreators } from '../models/actions/screen'

class SearchBar extends React.PureComponent {
  render () {
    return (
      <div className='search'>
        <div className='search--border'>
          <img className='search__icon' src={images.icSearch} alt='search' />
          <input className='search--contents' type='text' placeholder='레시피 검색하기' />
        </div>
        <button className='search__filter' onClick={this.props.openFilterModal}>
          <img src={images.filter} alt='filter' />
        </button>
      </div>
    )
  }
}

const mapDispatchToProps = {
  openFilterModal: actionCreators.openFilterModal
}

export default connect(null, mapDispatchToProps)(SearchBar)
