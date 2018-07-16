import React from 'react'
import ComCollections from '../containers/ComCollections/ComCollections'
import MenuBar from '../containers/MenuBar/MenuBar'
import FunctionArea from '../containers/FunctionBar/FunctionBar'
import FunctionTabs from '../containers/FunctionTabs/FunctionTabs'
import '../assets/style/App.less'
import 'normalize.css'

const App = () => {
  return (
    <div className="main-wrap">
      <div className="main-top">
        <FunctionArea />
      </div>
      <div className="main-remain">
        <div className="main-left">
          <MenuBar />
        </div>
        <div className="main-middle">
          <ComCollections />
        </div>
        <div className="main-right">
          <FunctionTabs />
        </div>
      </div>
    </div>
  )
}

export default App
