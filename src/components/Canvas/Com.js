import React from 'react'
import PropTypes from 'prop-types'
import Rnd from 'react-rnd'
const Com = ({ updateCom, focusCom, attribute, id, zIndex }) => {
  const deafultStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'solid 1px #ddd',
    background: 'white',
    backgroundSize: 'cover',
    backgroundImage: `url("` + attribute.imgUrl + `")`,
    zIndex: zIndex
  }

  return (
    <Rnd
      bounds={'.design-area'}
      style={deafultStyle}
      size={{ width: attribute.width, height: attribute.height }}
      position={{ x: attribute.x, y: attribute.y }}
      onDragStop={(e, d) => {
        const updatedAttr = {
          ...attribute,
          x: d.x,
          y: d.y,
          width: attribute.width,
          height: attribute.height
        }
        updateCom(id, updatedAttr)
      }}
      onResize={(e, direction, ref, delta, position) => {
        const updatedAttr = {
          ...attribute,
          width: ref.offsetWidth,
          height: ref.offsetHeight,
          ...position
        }
        updateCom(id, updatedAttr)
      }}
      onDragStart={(e, d) => {
        focusCom(id)
      }}
    >
      {attribute.name}
    </Rnd>
  )
}

Com.propTypes = {
  updateCom: PropTypes.func.isRequired,
  focusCom: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  attribute: PropTypes.object.isRequired
}
export default Com
