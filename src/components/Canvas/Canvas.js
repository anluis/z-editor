import React from 'react'
import Com from './Com'

const Canvas = ({ comList, updateCom, focusCom }) => {
  const designArea = {
    width: '375px',
    height: '667px',
    border: '1px solid gray',
    backgroundColor: 'white'
  }
  return (
    <div className="main-left">
      <div className="design-area" style={designArea}>
        {comList.map(com => (
          <Com
            key={com.id}
            {...com}
            updateCom={updateCom}
            focusCom={focusCom}
          />
        ))}
      </div>
    </div>
  )
}

export default Canvas
