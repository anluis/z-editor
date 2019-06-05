import * as React from 'react';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { connect } from 'react-redux';
import { logout } from '../../../actions/auth';
import { ThunkDispatch } from 'redux-thunk';
import { RouteComponentProps, withRouter } from 'react-router-dom';

interface OwnProps extends RouteComponentProps<any> {

}

interface DispatchProps {
  logout: () => Promise<void>
}

type Props = OwnProps & DispatchProps

interface State {
  open: boolean
  anchorEl: any
}

class MenuAppBar extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      open: false,
      anchorEl: null
    }
  }

  naviToMyAccount = () => {
    this.props.history.push({
      pathname: '/editor/myaccount/'
    })
  }

  logOut = () => {
    this.props.logout()
  }

  handleMenu = (event: any) => {
    this.setState({
      anchorEl: event.currentTarget
    })
  }

  handleClose = () => {
    this.setState({
      anchorEl: null
    })
  }

  render() {
    const open = Boolean(this.state.anchorEl)
    const { anchorEl } = this.state
    return (
      <div>
        <IconButton
          aria-label="Account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={(e) => this.handleMenu(e)}
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={open}
          onClose={this.handleClose}
        >
          <MenuItem onClick={() => this.naviToMyAccount()}>我的账户</MenuItem>
          <MenuItem onClick={() => this.logOut()}>注销</MenuItem>
        </Menu>
      </div>
    )
  }

}

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>): DispatchProps => {
  return {
    logout: async () => {
      dispatch(logout())
    }
  }
}

export default withRouter(connect(null, mapDispatchToProps)(MenuAppBar))