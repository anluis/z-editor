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

  navigate = (path: string) => {
    this.props.history.push({
      pathname: `/${path}`
    })
  }

  render() {
    return <div className={styles.menubar}>
      <div className={styles.pane} onClick={() => this.navigate('editor')}>
        工作区
      </div>
      <div className={styles.pane} onClick={() => this.navigate('editor/works')}>
        作品
      </div>
      <div className={styles.pane} onClick={() => this.navigate('editor/templates')}>
        模版
      </div>
      <div className={styles.pane} onClick={() => this.navigate('editor/materials')}>
        素材
      </div>
      <div
        className={`${styles.pane} ${styles.logout}`}
        onClick={this.handleLogOut}>
        登出
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