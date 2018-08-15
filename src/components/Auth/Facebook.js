import React from 'react'
import { connect } from 'react-redux'

import { images } from '../../common/ImageUtils'
import { actionCreators } from '../../models/actions/user'

class Facebook extends React.Component {
  componentDidMount () {
    document.addEventListener('FBObjectReady', this.initializeFacebookLogin)
  }

  componentWillUnmount () {
    document.removeEventListener('FBObjectReady', this.initializeFacebookLogin)
  }

  _onFacebookLogin = (loggedIn, result) => {
    if (loggedIn === true) {
      console.log('already logged in fb')
      this.props.loginUser(result.authResponse.accessToken)
    } else {
      // alert('Facebook login error')
    }
  }

  /**
   * Init FB object and check Facebook Login status
   */
  initializeFacebookLogin = () => {
    this.FB = window.FB
    this.checkLoginStatus()
  }

  /**
   * Check login status
   */
  checkLoginStatus = () => {
    this.FB.getLoginStatus(this.facebookLoginHandler)
  }

  /**
   * Check login status and call login api if user is not logged in
   */
  facebookLogin = () => {
    if (!this.FB) return

    this.FB.getLoginStatus(response => {
      if (response.status === 'connected') {
        this.facebookLoginHandler(response)
      } else {
        this.FB.login(this.facebookLoginHandler, {scope: 'public_profile'})
      }
    })
  }

  /**
   * Handle login response
   */
  facebookLoginHandler = response => {
    if (response.status === 'connected') {
      this.FB.api('/me', userData => {
        let result = {
          ...response,
          user: userData
        }
        this._onFacebookLogin(true, result)
      })
    } else {
      this._onFacebookLogin(false)
    }
  }

  render () {
    return (
      <div onClick={this.facebookLogin}>
        <div className='facebook-login'>
          <button className='facebook-login__button'>
            <img className='facebook-login__logo' src={images.fbLogo} alt='fb_logo' />
            <div className='facebook-login--border' />
            <p className='facebook-login__text'>
              페이스북 계정으로 로그인
            </p>
          </button>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = {
  loginUser: actionCreators.loginFacebookUser
}

export default connect(null, mapDispatchToProps)(Facebook)
