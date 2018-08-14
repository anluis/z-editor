// @flow
import React from 'react'
import Rnd from 'react-rnd'
import {
  INPUT_MODULE,
  VEDIO_MODULE,
  TEXT_MODULE
} from '../../constants/ModuleTypes'

const Vedio = (attribute: Object) => {
  return (
    <video
      // why attribute.attirbute?
      src={attribute.attribute.vedioUrl}
      controls="controls"
      style={{
        width: attribute.attribute.width + 'px',
        height: attribute.attribute.height + 'px'
      }}
    >
      your browser does not support the video tag
    </video>
  )
}

const Com = ({
  updateCom,
  focusCom,
  attribute,
  id,
  zIndex
}: {
  updateCom: (id: number, attr: Object) => void,
  focusCom: (id: number) => void,
  attribute: Object,
  id: number,
  zIndex: number
}) => {
  const deafultStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'solid 1px #ddd',
    background: attribute.background,
    backgroundSize: 'cover',
    backgroundImage: `url("` + attribute.imgUrl + `")`,
    zIndex: zIndex,
    color: attribute.color,
    opacity: attribute.opacity,
    borderWidth: attribute.borderWidth + 'px',
    borderColor: attribute.borderColor,
    borderStyle: attribute.borderStyle,
    borderRadius: attribute.borderRadius + 'px',
    textAlign: attribute.textAlign,
    wordWrap: attribute.wordWrap,
    fontSize: attribute.fontSize + 'px',
    lineHeight: attribute.lineHeight,
    letterSpacing: attribute.letterSpacing + 'em',
    wordBreak: 'break-word'
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
      {attribute.type === INPUT_MODULE || attribute.type === TEXT_MODULE ? (
        attribute.content
      ) : attribute.type === VEDIO_MODULE ? (
        <Vedio attribute={attribute} />
      ) : null}
    </Rnd>
  )
}

export default Com
