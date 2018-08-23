import { MuiThemeProvider, createMuiTheme, withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import Toolbar from '@material-ui/core/Toolbar'
import Settings from '@material-ui/icons/Settings'

import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { COLORS } from '../common/Constants'
import { images } from '../common/ImageUtils'

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flexGrow: 1
  }
}

const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      root: {
        color: COLORS.DARK_GREEN,
        padding: 0,
        minWidth: 50
      }
    },
    MuiIconButton: {
      colorPrimary: {
        color: COLORS.BLACK
      }
    }
  }
})

const barStyle = {
  position: 'fixed',
  flex: 1,
  backgroundColor: COLORS.DARK_WHITE
}

const iconStyle = {
  style: {
    top: 0,
    left: 0,
    width: 20
  },
  color: 'primary',
  ariaLabel: 'settings'
}

const settingsStyle = {
  style: {
    width: 15,
    height: 15
  }
}

class Header extends React.Component {
  render () {
    const { classes } = this.props

    return (
      <div className={classes.root}>
        <MuiThemeProvider theme={theme}>
          <AppBar
            position='static'
            style={barStyle}
          >
            <Toolbar className='header--container'>
              <div>
                <img className='header__logo' src={images.icLogo} alt='logo' />
              </div>
              <div>
                <Button>랭킹</Button>
                <Button>로그아웃</Button>
                <IconButton {...iconStyle}>
                  <Settings {...settingsStyle} />
                </IconButton>
              </div>
            </Toolbar>
          </AppBar>
        </MuiThemeProvider>
      </div>
    )
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
}

export default connect()(withStyles(styles)(Header))
