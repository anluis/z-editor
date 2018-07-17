import React from 'react'
import PropTypes from 'prop-types'
import Rnd from 'react-rnd'

const Com = ({ updateCom, focusCom, context, style, id }) => {
  const deafultStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'solid 1px #ddd',
    background: 'white',
    backgroundSize: 'cover',
    backgroundImage: `url(` + style.imgUrl + `)`
  }

  return (
    <Rnd
      bounds={'.design-area'}
      style={deafultStyle}
      size={{ width: style.width, height: style.height }}
      position={{ x: style.x, y: style.y }}
      onDragStop={(e, d) => {
        const updatedStyle = {
          ...style,
          x: d.x,
          y: d.y,
          width: style.width,
          height: style.height
        }
        updateCom(id, updatedStyle, context)
      }}
      onResize={(e, direction, ref, delta, position) => {
        const updatedStyle = {
          ...style,
          width: ref.offsetWidth,
          height: ref.offsetHeight,
          ...position
        }
        updateCom(id, updatedStyle, context)
      }}
      onDragStart={(e, d) => {
        focusCom(id)
      }}
    >
      {context.name}
    </Rnd>
  )
}

Com.propTypes = {
  updateCom: PropTypes.func.isRequired,
  focusCom: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  style: PropTypes.object.isRequired,
  context: PropTypes.object.isRequired
}
export default Com
