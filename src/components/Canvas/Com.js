import React from 'react'
import Rnd from 'react-rnd'
import {
  INPUT_MODULE,
  VIDEO_MODULE,
  TEXT_MODULE,
  PHOTO_MODULE,
  IMG_MODULE,
  BACKGROUND_MODULE
} from '../../constants/ModuleTypes'
import 'animate.css'

const Vedio = (attribute: Object) => {
  return (
    <video
      src={attribute.videoUrl}
      controls="controls"
      style={{
        width: attribute.width + 'px',
        height: attribute.height + 'px'
      }}
    >
      your browser does not support the video tag
    </video>
  )
}

type Props = {
  updateCom: (id: number, attr: Object) => void,
  focusCom: (id: number) => void,
  attribute: Object,
  id: number,
  zIndex: number
}

class Com extends React.Component<Props> {
  render() {
    const { updateCom, focusCom, id, zIndex, attribute } = this.props
    const deafultStyle = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'transparent',
      zIndex: zIndex
    }

    const innerAnimation = {
      width: '100%',
      height: '100%',
      background: attribute.background,
      animationName: attribute.animationName,
      animationDuration: attribute.animationDuration + 's',
      animationDelay: attribute.animationDelay + 's',
      animationIterationCount: attribute.animationIterationCount,
      backgroundImage: `url("` + attribute.imgUrl + `")`,
      backgroundSize: 'cover',
      border: 'solid 1px #ddd',
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
      wordBreak: 'break-all'
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
          let updatedAttr = {}
          if (attribute.type === TEXT_MODULE) {
            updatedAttr = {
              ...attribute,
              width: ref.offsetWidth,
              height: 'auto',
              ...position
            }
          } else {
            updatedAttr = {
              ...attribute,
              width: ref.offsetWidth,
              height: ref.offsetHeight,
              ...position
            }
          }
          updateCom(id, updatedAttr)
        }}
        onDragStart={(e, d) => {
          focusCom(id)
        }}
      >
        {attribute.type === INPUT_MODULE ||
        attribute.type === TEXT_MODULE ||
        attribute.type === PHOTO_MODULE ||
        attribute.type === IMG_MODULE ||
        attribute.type === BACKGROUND_MODULE ? (
          <div id="inner" style={innerAnimation}>
            {attribute.content}
          </div>
        ) : attribute.type === VIDEO_MODULE ? (
          <Vedio {...attribute} />
        ) : null}
      </Rnd>
    )
  }
}

export default Com
