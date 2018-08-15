import React from 'react'
import KakaoLogin from 'react-kakao-login'
import { connect } from 'react-redux'

import { images } from '../../common/ImageUtils'
import { actionCreators } from '../../models/actions/user'

class LoginButton extends React.PureComponent {
  render () {
    return (
      <div className='kakao-login'>
        <a className='kakao-login--button'>
          <img className='kakao-login__logo' src={images.ktLogo} alt='kt_logo' />
          <div className='kakao-login--border' />
          <p className='kakao-login__text'>
            카카오 계정으로 로그인
          </p>
        </a>
      </div>
    )
  }
}

class Kakao extends React.Component {
  _onSuccess = ({ response }) => {
    this.props.loginUser(response.access_token)
  }

  _onFailure = (error) => {
    console.error('Kakao Login Failure: ', error)
  }

  render () {
    return (
      <KakaoLogin
        jsKey={process.env.REACT_APP_KAKAO_KEY}
        onSuccess={this._onSuccess}
        onFailure={this._onFailure}
        buttonComponent={<LoginButton />}
        buttonClass={'kakao-login--button'}
        getProfile={false}
      />
    )
  }
}

const mapDispatchToProps = {
  loginUser: actionCreators.loginKakaoUser
}

export default connect(null, mapDispatchToProps)(Kakao)
