import React from 'react'
import Com from './Com'

const ComList = ({ coms }) => {
  const designArea = {
    width: '90%',
    height: '90%',
    border: '1px solid gray'
  }
  return (
    <div className="main-left">
      <div className="design-area" style={designArea}>
        {coms.map(com => <Com key={com.id} {...com} />)}
      </div>
    </div>
  )
}

export default ComList
