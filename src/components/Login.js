import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { images } from '../common/ImageUtils'

import Facebook from './Auth/Facebook'
import Kakao from './Auth/Kakao'

class Login extends React.Component {
  render () {
    return (
      <div className='login-container'>
        <div className='login-container--main'>
          <div className='logo-container'>
            <img className='logo-container__logo' src={images.logo} alt='logo' />
          </div>
          <Facebook />
          <Kakao />
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

const mapStateToProps = ({ user }) => ({
  ...user
})

export default connect(mapStateToProps)(Login)
