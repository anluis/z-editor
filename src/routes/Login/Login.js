import React, { lazy, Suspense } from 'react'
import { Route } from 'react-router-dom'
const LoginPage = lazy(() => import('../../containers/Login/Login'))
class Login extends React.Component {
  render() {
    return (
      <Suspense fallback={null}>
        <Route path="/editor" component={LoginPage} exact />
      </Suspense>
    )
  }
}

export default Login