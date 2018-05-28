import React from 'react'
import PropTypes from 'prop-types'
import Rnd from 'react-rnd'
import { connect } from 'react-redux'
import { resizeCom, dragCom, setCurrentCom } from '../actions'

const Com = ({ dispatch, text, style, id }) => {
  const deafultStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'solid 1px #ddd',
    background: '#f0f0f0'
  }
  return (
    <Rnd
      bounds={'.design-area'}
      style={deafultStyle}
      size={{ width: style.width, height: style.height }}
      position={{ x: style.x, y: style.y }}
      onDragStop={(e, d) => {
        const updatedStyle = {
          x: d.x,
          y: d.y,
          width: style.width,
          height: style.height
        }
        dispatch(dragCom(updatedStyle, id))
      }}
      onResize={(e, direction, ref, delta, position) => {
        const updatedStyle = {
          width: ref.offsetWidth,
          height: ref.offsetHeight,
          ...position
        }
        dispatch(resizeCom(updatedStyle, id))
      }}
      onDragStart={(d, id) => {
        const updatedStyle = {
          x: d.x,
          y: d.y,
          width: style.width,
          height: style.height
        }
        dispatch(setCurrentCom(updatedStyle, id))
      }}
    >
      {text}
    </Rnd>
  )
}

Com.propTypes = {
  text: PropTypes.string.isRequired,
  style: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired
}

export default connect()(Com)
