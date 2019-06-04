import * as React from 'react';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

interface Props {

}

interface State {
  open: boolean
}

class MenuAppBar extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      open: false
    }
  }

  naviToMyAccount = () => {

  }

  logOut = () => {

  }

  render() {
    const { open } = this.state
    return (
      <div>
        <IconButton
          aria-label="Account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          // onClick={handleMenu}
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <Menu
          id="menu-appbar"
          // anchorEl={anchorEl}
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
        // onClose={handleClose}
        >
          <MenuItem onClick={() => this.naviToMyAccount()}>我的账户</MenuItem>
          <MenuItem onClick={() => this.logOut()}>注销</MenuItem>
        </Menu>
      </div>
    )
  }

}

export default MenuAppBar