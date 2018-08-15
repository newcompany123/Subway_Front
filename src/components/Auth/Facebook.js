import React from 'react'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import { connect } from 'react-redux'

import { images } from '../../common/ImageUtils'
import { actionCreators } from '../../models/actions/user'

class Facebook extends React.Component {
  _onResponse = (response) => {
    this.props.loginUser(response.accessToken)
  }

  render () {
    return (
      <FacebookLogin
        appId='325579307985900'
        autoLoad
        callback={this._onResponse}
        render={(renderProps) => (
          <div className='facebook-login'>
            <button className='facebook-login__button' onClick={renderProps.onClick}>
              <img className='facebook-login__logo' src={images.fbLogo} alt='fb_logo' />
              <div className='facebook-login--border' />
              <p className='facebook-login__text'>
                페이스북 계정으로 로그인
              </p>
            </button>
          </div>
        )}
      />
    )
  }
}

const mapDispatchToProps = {
  loginUser: actionCreators.loginFacebookUser
}

export default connect(null, mapDispatchToProps)(Facebook)
