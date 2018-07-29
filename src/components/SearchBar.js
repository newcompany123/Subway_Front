import React from 'react'

const styles = {
  outerContainer: {
    justifyContent: 'center'
  },
  searchBar: {
    width: '80%'
  }
}

export default class SearchBar extends React.PureComponent {
  render () {
    return (
      <div className='is-flex' style={styles.outerContainer}>
        <div className='control has-icons-left' style={styles.searchBar}>
          <input className='input is-medium' type='text' placeholder='레시피 검색하기' />
          <span className='icon is-small is-left'>
            <i className='fas fa-search' />
          </span>
        </div>
      </div>
    )
  }
}
