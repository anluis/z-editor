// @flow
import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from './App'
import Login from './containers/Login/Login'
import UserWork from './containers/UserWork/UserWork'

const Root = ({ store }: { store: Object }) => (
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/login" component={Login} />
        <Route path="/page" component={UserWork} />
      </div>
    </Router>
  </Provider>
)

export default Root
