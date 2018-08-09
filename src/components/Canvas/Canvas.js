import React from 'react'
import Com from './Com'

const Canvas = ({ comList, updateCom, focusCom, currentCom }) => {
  const designArea = {
    width: '375px',
    height: '667px',
    border: '1px dashed #a3afb7',
    backgroundColor: '#eef1f6'
  }

  const sortByOrder = (items, order) => {
    let result = []
    order.forEach(e => {
      result.push(items.find(item => item.id === e))
    })
    return result
  }

  let renderComs = sortByOrder(
    comList.filter(item => currentCom.includes(item.id)),
    currentCom
  )

  console.dir(renderComs)

  return (
    <div className="main-left">
      <div className="design-area" style={designArea}>
        {renderComs.map((com, index) => (
          <Com
            key={com.id}
            {...com}
            updateCom={updateCom}
            focusCom={focusCom}
            zIndex={index}
          />
        ))}
      </div>
    </div>
  )
}

export default Canvas
