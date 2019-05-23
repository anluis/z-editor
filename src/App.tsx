import * as React from 'react';
import { connect } from 'react-redux'
import { withRouter, RouteComponentProps } from 'react-router-dom';
import IStoreState from './types/IStoreState'
import Routes from './routes/Routes';
import './App.css'
import { ThunkDispatch } from 'redux-thunk';
import { setWxShareUrl } from './actions/auth';

interface OwnProps extends RouteComponentProps<any> {

}

interface DispatchProps {
  setWechatConfigUrl: (wxUrl: string) => void
}

interface StateProps {
  isAuthenticated: boolean
}

type Props = StateProps & OwnProps & DispatchProps

class App extends React.Component<Props> {

  componentDidMount() {
    this.props.setWechatConfigUrl(location.href)
  }

  render() {
    const { isAuthenticated } = this.props
    return (
      <Routes isAuthenticated={isAuthenticated} />
    );
  }
}
const mapStateToProps = (state: IStoreState) => {
  const { isAuthenticated } = state.auth
  return {
    isAuthenticated
  }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>): DispatchProps => {
  return {
    setWechatConfigUrl: (url: string) => {
      dispatch(setWxShareUrl(url))
    }
  }
}

const connectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default withRouter(connectedApp)
