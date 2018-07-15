import React from 'react'

import { images } from '../common/ImageUtils'

const styles = {
  facebookBorder: {
    width: 1,
    height: '100%',
    marginLeft: 17,
    backgroundColor: 'white'
  },
  facebookBtn: {
    width: 230,
    height: 40,
    flex: 1,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#507cc0'
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
    backgroundColor: 'white'
  },
  kakaoBtn: {
    width: 230,
    height: 40,
    flex: 1,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#ffcd00'
  },
  kakaoLogo: {
    width: 23,
    height: 22,
    marginLeft: 9,
    marginTop: 5,
  },
  loginContainer: {
    paddingTop: 20
  },
  loginFacebook: {
    fontSize: 14,
    marginLeft: 14,
    color: 'white',
    fontWeight: 'bold'
  },
  loginKakao: {
    fontSize: 14,
    marginLeft: 14,
    color: 'white',
    fontWeight: 'bold'
  },
  optionDivider: {
    paddingTop: 4
  }
}

export default class Login extends React.Component {
  render () {
    return (
      <div className="level">
        <div className="level-item">
          <img src={images.logo} alt='logo' />
        </div>
        <div className="level-item" style={styles.loginContainer}>
          <div>
            <a className="button" style={styles.facebookBtn}>
              <div>
                <img style={styles.facebookLogo} src={images.fbLogo} alt='fb_logo' />
              </div>
              <div style= {styles.facebookBorder} />
              <p style={styles.loginFacebook}>
                페이스북 계정으로 로그인
              </p>
            </a>
          </div>
        </div>

        <div className="level-item" style={styles.optionDivider}>
          <div>
            <a className="button" style={styles.kakaoBtn}>
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
      </div>
    )
  }
}
