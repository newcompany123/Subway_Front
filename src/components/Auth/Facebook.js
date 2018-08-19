import React from 'react'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import { connect } from 'react-redux'

import { images } from '../../common/ImageUtils'
import { actionCreators } from '../../models/actions/user'

// TODO(royhong): Fix Facebook Login automatically popup
class Facebook extends React.Component {
  _onResponse = (response) => {
    this.props.loginUser('facebook', response.accessToken)
  }

  render () {
    return (
      <FacebookLogin
        appId='325579307985900'
        autoLoad
        callback={this._onResponse}
        render={(renderProps) => (
          <div className='facebook-login'>
            <button onClick={renderProps.onClick} className='facebook-login__button'>
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
  loginUser: actionCreators.loginUser
}

export default connect(null, mapDispatchToProps)(Facebook)
