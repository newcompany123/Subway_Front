import React from 'react'
import { Link } from 'react-router-dom'

import { images } from '../common/ImageUtils'

export default class Login extends React.Component {
  render () {
    return (
      <div className='login-container'>
        <div className='login-container--main'>
          <div className='logo-container'>
            <img className='logo-container__logo' src={images.logo} alt='logo' />
          </div>
          <div className='facebook-login'>
            <a className='facebook-login__button'>
              <img className='facebook-login__logo' src={images.fbLogo} alt='fb_logo' />
              <div className='facebook-login--border' />
              <p className='facebook-login__text'>
                페이스북 계정으로 로그인
              </p>
            </a>
          </div>
          <div className='kakao-login'>
            <a className='kakao-login--button'>
              <img className='kakao-login__logo' src={images.ktLogo} alt='kt_logo' />
              <div className='kakao-login--border' />
              <p className='kakao-login__text'>
                카카오 계정으로 로그인
              </p>
            </a>
          </div>
          <div className='skip-container'>
            <Link to='/ranking'>
              <div>
                <img className='skip-container__arrow' src={images.rightArrow} alt='right_arrow' />
                <p className='skip-container__text'>
                  회원가입 건너뛰고 레시피 확인하기
                </p>
              </div>
            </Link>
          </div>
        </div>
        <div className='bottom-sandwich'>
          <img className='bottom-sandwich__image' src={images.bgSandwich} alt='bg_sandwich' />
        </div>
      </div>
    )
  }
}
