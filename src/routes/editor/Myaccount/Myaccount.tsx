import * as React from 'react'
import { handleAxiosAsyncError } from '../../../utils/helper/errorHandle/axiosError';
import { user } from '../../../apis/user/userGet';
import styles from './Myaccount.module.css'
import { TextField, Button } from '@material-ui/core';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { setLoading } from '../../../actions/status';
import { connect } from 'react-redux';
import { userPatch } from '../../../apis/user/userPatch';
import { logout } from '../../../actions/auth';

interface OwnProps {

}

interface DispatchProps {
  signOut: () => void
  setLoading: (status: boolean) => void
}

type Props = OwnProps & DispatchProps

interface State {
  password: string
  confirmpassword: string
  name: string
}

class Myaccount extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props)
    this.state = {
      password: '',
      confirmpassword: '',
      name: ''
    }
  }

  componentDidMount() {
    this.fetchUserData()
  }

  fetchUserData = async () => {
    try {
      const userData: any = await user()
      this.setState({
        name: userData.data.name
      })
    } catch (err) {
      console.warn(err.message)
      handleAxiosAsyncError(err)
    }
  }


  handlePsdChange = (e: string) => {
    this.setState({
      password: e
    })
  }

  handleConfirmPsdChange = (e: string) => {
    this.setState({
      confirmpassword: e
    })
  }

  handlePassWordChangeSubmit = async () => {
    const { confirmpassword, password } = this.state
    if (confirmpassword !== password) {
      alert('两次输入的密码不一致')
      return
    }
    try {
      const userInfoPayload = {
        name: this.state.name,
        password: this.state.password
      }
      const changeResult: any = await userPatch(userInfoPayload)
      if (changeResult.status === 200) {
        alert('修改成功！')
        this.props.signOut()
      }
    } catch (err) {
      console.warn(err.message)
      handleAxiosAsyncError(err)
    }
  }

  render() {
    return <form className={styles.myaccount}>

      <TextField
        autoFocus
        margin="dense"
        id="account-name"
        label="用户名"
        placeholder="暂不支持修改用户名"
        disabled
        fullWidth
        value={this.state.name}
      />

      <TextField
        autoFocus
        margin="dense"
        id="account-password"
        label="密码"
        autoComplete="false"
        placeholder="请输入新密码"
        fullWidth
        type="password"
        value={this.state.password}
        onChange={(e) => this.handlePsdChange(e.target.value)}
      />

      <TextField
        autoFocus
        margin="dense"
        id="account-confirm"
        label="确认密码"
        placeholder="请输入确认密码"
        autoComplete="false"
        fullWidth
        type="password"
        value={this.state.confirmpassword}
        onChange={(e) => this.handleConfirmPsdChange(e.target.value)}
      />

      <Button
        variant="contained"
        component="span"
        onClick={() => this.handlePassWordChangeSubmit()}
      >
        确定
      </Button>

    </form >
  }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, AnyAction>): DispatchProps => {
  return {
    setLoading: (status: boolean) => {
      dispatch(setLoading(status))
    },
    signOut: () => {
      dispatch(logout())
    }
  }
}

export default connect(null, mapDispatchToProps)(Myaccount)