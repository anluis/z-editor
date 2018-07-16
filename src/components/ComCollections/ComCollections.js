import React from 'react'
import Com from './Com'

const ComCollections = ({ coms, updateCom, focusCom }) => {
  const designArea = {
    width: '90%',
    height: '90%',
    border: '1px solid gray',
    backgroundColor: 'white'
  }
  return (
    <div className="main-left">
      <div className="design-area" style={designArea}>
        {coms.map(com => (
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

export default ComCollections
