import * as React from 'react'
import styles from './MenuBar.module.css'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { connect } from 'react-redux'
import IStoreState from '../../types/IStoreState';
import { ThunkDispatch } from 'redux-thunk';
import { logout } from '../../actions/auth'

interface DispatchProps {
  logout: () => Promise<void>
}

interface OwnProps extends RouteComponentProps {

}

type Props = DispatchProps & OwnProps

class MenuBar extends React.Component<Props> {

  handleLogOut = () => {
    this.props.logout()
  }

  render() {
    return <div className={styles.menubar}>
      <div className={styles.pane}>
        Works
      </div>
      <div className={styles.pane}>
        Templates
      </div>
      <div className={styles.pane}>
        Material
      </div>
      <div
        className={`${styles.pane} ${styles.logout}`}
        onClick={this.handleLogOut}>
        logOut
      </div>
    </div>
  }
}

const mapStateToProps = (state: IStoreState) => {
  const { isLoading } = state.status
  return {
    isLoading
  }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>): DispatchProps => {
  return {
    logout: async () => {
      dispatch(logout())
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MenuBar))