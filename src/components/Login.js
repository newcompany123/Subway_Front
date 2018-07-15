import React from 'react'

import { images } from '../common/ImageUtils'

const facebookBtn = {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: 230,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#507cc0'
}

const kakaoBtn = {
  flex: 1,
  width: 230,
  height: 40,
  borderRadius: 20,
  backgroundColor: '#ffcd00',
  alignItems: 'center',
  justifyContent: 'flex-start'
}

export default class Login extends React.Component {
  render () {
    return (
      <div className="level">
        <div className="level-item">
          <img src={images.logo} alt='logo' />
        </div>
        <div className="level-item" style={{ paddingTop: 20 }}>
          <div>
            <a className="button" style={facebookBtn}>
              <div>
                <img style={{ marginLeft: 12, width: 12, height: 21 }} src={images.fbLogo} alt='fb_logo' />
              </div>
              <div style={{ marginLeft: 17, height: '100%', width: 1, backgroundColor: 'white' }} />
              <p style={{ fontSize: 14, marginLeft: 14, color: 'white', fontWeight: 'bold'}}>
                페이스북 계정으로 로그인
              </p>
            </a>
          </div>
        </div>

        <div className="level-item" style={{ paddingTop: 4 }}>
          <div>
            <a className="button" style={kakaoBtn}>
              <div>
                <img style={{ marginLeft: 9, marginTop: 5, width: 23, height: 22 }} src={images.ktLogo} alt='kt_logo' />
              </div>
              <div style={{ marginLeft: 9, height: '100%', width: 1, backgroundColor: 'white' }} />
              <p style={{ fontSize: 14, marginLeft: 14, color: 'white', fontWeight: 'bold'}}>
                카카오 계정으로 로그인
              </p>
            </a>
          </div>
        </div>
      </div>
    )
  }
}
