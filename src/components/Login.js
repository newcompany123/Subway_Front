import React from 'react'
import { Link } from 'react-router-dom'

import { COLORS } from '../common/Constants'
import { images } from '../common/ImageUtils'

const styles = {
  arrow: {
    width: 10,
    height: 10,
    justifyContent: 'center'
  },
  facebookBorder: {
    width: 1,
    height: '100%',
    marginLeft: 17,
    backgroundColor: COLORS.WHITE
  },
  facebookBtn: {
    width: 230,
    height: 40,
    flex: 1,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: COLORS.SEA_BLUE
  },
  facebookLogo: {
    width: 12,
    height: 21,
    marginLeft: 12
  },
  kakaoBorder: {
    height: '100%',
    width: 1,
    marginLeft: 9,
    backgroundColor: COLORS.WHITE
  },
  kakaoBtn: {
    width: 230,
    height: 40,
    flex: 1,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: COLORS.YELLOW
  },
  kakaoLogo: {
    width: 23,
    height: 22,
    marginLeft: 9,
    marginTop: 5
  },
  loginContainer: {
    paddingTop: '3.125%',
    justifyContent: 'center'
  },
  loginFacebook: {
    fontSize: 14,
    marginLeft: 14,
    color: COLORS.WHITE,
    fontWeight: 'bold',
    justifyContent: 'center'
  },
  loginKakao: {
    fontSize: 14,
    marginLeft: 14,
    color: COLORS.WHITE,
    fontWeight: 'bold'
  },
  logoContentsContainer: {
    width: '44.6%',
    height: '7.5%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoOuterContainer: {
    justifyContent: 'center',
    paddingBottom: '18%'
  },
  optionDivider: {
    paddingTop: '0.625%',
    paddingBottom: '2.5%',
    justifyContent: 'center'
  },
  outerContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    height: '100%'
  },
  sandwichContainer: {
    paddingTop: '6.7%',
    justifyContent: 'center'
  },
  sandwichImage: {
    width: '100%',
    height: '21%'
  },
  skipContainer: {
    justifyContent: 'center'
  },
  skipText: {
    display: 'inline',
    paddingLeft: 4.5,
    fontSize: 12,
    color: COLORS.WARM_GREY
  }
}

export default class Login extends React.Component {
  render () {
    return (
      <div className='hero is-fullheight' style={styles.outerContainer}>
        <div className='container-fluid'>
          <div className='is-flex' style={styles.logoOuterContainer}>
            <img style={styles.logoContentsContainer} src={images.logo} alt='logo' />
          </div>
        </div>
        <div>
          <div className='is-flex' style={styles.loginContainer}>
            <div>
              <a className='button' style={styles.facebookBtn}>
                <div>
                  <img style={styles.facebookLogo} src={images.fbLogo} alt='fb_logo' />
                </div>
                <div style={styles.facebookBorder} />
                <p style={styles.loginFacebook}>
                  페이스북 계정으로 로그인
                </p>
              </a>
            </div>
          </div>
          <div className='is-flex' style={styles.optionDivider}>
            <div>
              <a className='button' style={styles.kakaoBtn}>
                <div>
                  <img style={styles.kakaoLogo} src={images.ktLogo} alt='kt_logo' />
                </div>
                <div style={styles.kakaoBorder} />
                <p style={styles.loginKakao}>
                  카카오 계정으로 로그인
                </p>
              </a>
            </div>
          </div>
          <div className='is-flex' style={styles.skipContainer}>
            <Link to='/main'>
              <div>
                <img src={images.rightArrow} style={styles.arrow} alt='right_arrow' />
                <p style={styles.skipText}>
                  회원가입 건너뛰고 레시피 확인하기
                </p>
              </div>
            </Link>
          </div>
          <div className='is-flex' style={styles.sandwichContainer}>
            <img style={styles.sandwichImage} src={images.bgSandwich} alt='bg_sandwich' />
          </div>
        </div>
      </div>
    )
  }
}
