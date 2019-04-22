import * as React from 'react'
import { Redirect, Route, RouteProps } from 'react-router-dom'

export interface ProtectedRouteProps extends RouteProps {
  isAuthenticated: boolean
  authenticationPath: string
}

export class ProtectedRoute extends Route<ProtectedRouteProps> {
  public render() {
    let redirectPath: string = ''
    const { isAuthenticated, authenticationPath } = this.props
    if (!isAuthenticated) {
      redirectPath = authenticationPath
    }
    if (redirectPath) {
      const renderComponent = () => (<Redirect to={{ pathname: redirectPath }} />);
      return <Route {...this.props} component={renderComponent} render={undefined} />;
    } else {
      return <Route {...this.props} />;
    }
  }
}