import React from 'react'
import Canvas from './containers/Canvas/Canvas'
import MenuBar from './components/MenuBar/MenuBar'
import TopBar from './containers/TopBar/TopBar'
import FunctionTabs from './components/FunctionTabs/FunctionTabs'
import './assets/style/App.less'
import 'normalize.css'

const App = () => {
  return (
    <div className="main-wrap">
      <div className="main-top">
        <TopBar />
      </div>
      <div className="main-remain">
        <div className="main-left">
          <MenuBar />
        </div>
        <div className="main-middle">
          <Canvas />
        </div>
        <div className="main-right">
          <FunctionTabs />
        </div>
      </div>
    </div>
  )
}

export default App
