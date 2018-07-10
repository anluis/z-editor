import React from 'react'
import AddCom from '../containers/ComCollections/AddCom'
import ComCollections from '../containers/ComCollections/ComCollections'
import ComStatus from '../containers/ComStatus/ComStatus'
// import TemplateArea from '../containers/TemplateArea'
// import FunctionArea from '../containers/FunctionArea'
import '../assets/style/App.less'

const App = () => {
  return (
    <div className="main-wrap">
      <div className="main-top">{/* <FunctionArea /> */}</div>
      <div className="main-remain">
        <div className="main-left">{/* <TemplateArea /> */}</div>
        <div className="main-middle">
          <ComCollections />
        </div>
        <div className="main-right">
          <ComStatus />
          <AddCom />
        </div>
      </div>
    </div>
  )
}

export default App
