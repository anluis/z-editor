import React from 'react'
import Com from './Com'

const Canvas = ({ comList, updateCom, focusCom, currentCom }) => {
  const designArea = {
    width: '375px',
    height: '667px',
    border: '1px solid gray',
    backgroundColor: 'white'
  }

  const sortByOrder = (items, order) => {
    let result = []
    order.forEach(e => {
      let r = items.find(item => item.id === e)
      if (r !== undefined) {
        result.push(r)
      }
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
        {renderComs !== undefined
          ? renderComs.map((com, index) => (
              <Com
                key={com.id}
                {...com}
                updateCom={updateCom}
                focusCom={focusCom}
                zIndex={index}
              />
            ))
          : null}
      </div>
    </div>
  )
}

export default Canvas
