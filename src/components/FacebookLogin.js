import React from 'react'

import { images } from '../common/ImageUtils'

export default class FacebookLogin extends React.Component {
  componentDidMount () {
    document.addEventListener('FBObjectReady', this.initializeFacebookLogin);
  }

  componentWillUnmount () {
    document.removeEventListener('FBObjectReady', this.initializeFacebookLogin);
  }

  /**
   * Init FB object and check Facebook Login status
   */
  initializeFacebookLogin = () => {
    this.FB = window.FB;
    this.checkLoginStatus();
  }

  /**
   * Check login status
   */
  checkLoginStatus = () => {
    this.FB.getLoginStatus(this.facebookLoginHandler);
  }

  /**
   * Check login status and call login api if user is not logged in
   */
  facebookLogin = () => {
    if (!this.FB) return;

    this.FB.getLoginStatus(response => {
      if (response.status === 'connected') {
        this.facebookLoginHandler(response);
      } else {
        this.FB.login(this.facebookLoginHandler, {scope: 'public_profile'});
      }
    }, );
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
        };
        this.props.onLogin(true, result);
      });
    } else {
      this.props.onLogin(false);
    }
  }

  render() {
    return (
      <div onClick={this.facebookLogin}>
        <div className='facebook-login'>
            <a className='facebook-login__button'>
              <img className='facebook-login__logo' src={images.fbLogo} alt='fb_logo' />
              <div className='facebook-login--border' />
              <p className='facebook-login__text'>
                페이스북 계정으로 로그인
              </p>
            </a>
          </div>
      </div>
    )
  }
}