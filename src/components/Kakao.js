import React from 'react'
import KakaoLogin from 'react-kakao-login'

import { images } from '../common/ImageUtils'

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

export default class Kakao extends React.Component {
  _onSuccess = (profile) => {
    console.log(profile)
  }

  _onFailure = (error) => {
    console.log(error)
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
