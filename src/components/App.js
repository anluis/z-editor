import React from 'react'
import AddCom from '../containers/AddCom'
import VisibleComList from '../containers/VisibleComList'
import '../assets/style/App.less'

const App = () => {
  return (
    <div className="main-wrap">
      <VisibleComList />
      <div className="main-right">
        <AddCom />
      </div>
    </div>
  )
}

export default App
