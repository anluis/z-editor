import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import { withRouter, RouteComponentProps } from 'react-router-dom';
import IStoreState from './types/IStoreState'
import Routes from './routes/Routes';

interface OwnProps extends RouteComponentProps<any> {

}

interface StateProps {
  isAuthenticated: boolean
}

type Props = StateProps & OwnProps

class App extends Component<Props> {
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

const connectedApp = connect(
  mapStateToProps
)(App)

export default withRouter(connectedApp);
