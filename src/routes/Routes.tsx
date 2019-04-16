import * as React from 'react'
import { lazy, Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import { ProtectedRouteProps, ProtectedRoute } from '../components/abstract/PrivateRoute';

const Login = lazy(() => import('./login/Login'))
const Editor = lazy(() => import('./editor/Editor'))

interface RoutesProps {
  isAuthenticated: boolean
}

class Routes extends React.Component<RoutesProps> {
  render() {
    const defaultProtectedRouteProps: ProtectedRouteProps = {
      isAuthenticated: this.props.isAuthenticated,
      authenticationPath: 'login'
    }
    return (
      <Suspense fallback={null}>
        <Switch>
          <ProtectedRoute {...defaultProtectedRouteProps} exact path="/" component={Editor} />
          <Route path="/login" component={Login} />
        </Switch>
      </Suspense>
    )
  }
}

export default Routes