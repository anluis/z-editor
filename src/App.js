import React, { Component } from 'react'
import Routes from './routes/Routes'
import './assets/style/App.less'
import 'normalize.css'
import { withRouter } from 'react-router-dom'

class App extends Component {
  render() {
    return <Routes />
  }
}

export default withRouter(App)
