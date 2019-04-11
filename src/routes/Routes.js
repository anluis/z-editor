import React, { lazy, Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'

const Error404Page = lazy(() => import('../containers/Error404Page/Error404Page'))
const LandingPage = lazy(() => import('../containers/LandingPage/LandingPage'))
const Editor = lazy(() => import('./Editor/Editor'))

const Routes = () => {
  return (
    <Suspense fallback={null}>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/editor" component={Editor} excat />
        <Route component={Error404Page} />
      </Switch>
    </Suspense>
  )
}

export default Routes