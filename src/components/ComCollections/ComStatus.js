import React from 'react'
import Input from '@material-ui/core/Input'
import { connect } from 'react-redux'

const ComStatus = ({ currentCom, updateCom }) => {
  if (currentCom === null || currentCom === undefined) {
    return null
  } else
    return (
      <div className="attributes">
        <div className="attr-item">
          组件id:
          {currentCom.id}
        </div>
        <div className="attr-item">
          组件名称:
          <Input
            onChange={event => {
              let updatedComStatus = currentCom.context
              updatedComStatus.name = event.target.value
              updateCom(currentCom.id, currentCom.style, {
                ...updatedComStatus
              })
            }}
            value={currentCom.context.name}
          />
        </div>
        <div className="attr-item">
          组件X:
          <Input
            onChange={event => {
              let updatedCom = currentCom.style
              updatedCom.x = Number(event.target.value)
              updateCom(currentCom.id, { ...updatedCom }, currentCom.context)
            }}
            value={currentCom.style.x}
          />
        </div>
        <div className="attr-item">
          组件Y:
          <Input
            onChange={event => {
              let updatedCom = currentCom.style
              updatedCom.y = Number(event.target.value)
              updateCom(currentCom.id, { ...updatedCom }, currentCom.context)
            }}
            value={currentCom.style.y}
          />
        </div>
        <div className="attr-item">
          组件width:
          <Input
            onChange={event => {
              let updatedCom = currentCom.style
              updatedCom.width = Number(event.target.value)
              updateCom(currentCom.id, { ...updatedCom }, currentCom.context)
            }}
            value={currentCom.style.width}
          />
        </div>
        <div className="attr-item">
          组件height:
          <Input
            onChange={event => {
              let updatedCom = currentCom.style
              updatedCom.height = Number(event.target.value)
              updateCom(currentCom.id, { ...updatedCom }, currentCom.context)
            }}
            value={currentCom.style.height}
          />
        </div>
        <div className="attr-item">
          图片:
          <Input
            onChange={event => {
              let updatedCom = currentCom.style
              updatedCom.imgUrl = event.target.value
              updateCom(currentCom.id, { ...updatedCom }, currentCom.context)
            }}
            value={currentCom.style.imgUrl}
          />
        </div>
      </div>
    )
}

export default connect()(ComStatus)
