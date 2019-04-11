// @flow
import React from 'react'
import Com from './Com'
import { listItemSortByOrder } from '@/utils/helpers/listItemSortByOrder'

type Props = {
  comList: Array<any>,
  updateCom: () => void,
  focusCom: () => void,
  currentPage: number,
  currentCom: Array<number>,
  currentPageItem: {
    name: string,
    settings: {
      payload: {
        size: {
          height: number,
          width: number
        }
      }
    }
  }
}

class Canvas extends React.Component<Props> {

  constructor() {
    super()
    this.state = {
      baseY: 0,
      baseHeight: 0,
      moving: false
    }
  }

  handleMouseDown = (e) => {
    // console.log(e.clientY)
    e.preventDefault()
    this.setState({
      baseY: e.clientY,
      baseHeight: this.props.currentPageItem.settings.payload.size.height,
      moving: true
    })
  }

  handleMouseMove = (e) => {
    e.preventDefault()
    // maybe use component's own state
    // then async to store
    const { moving } = this.state
    const { currentPageItem, updatePage, currentPage } = this.props
    const itemCopy = { ...currentPageItem }
    if (moving) {
      // console.log(e.clientY - this.state.baseY)
      // itemCopy.settings.payload.size.height += e.clientY - this.state.baseY + this.state.baseHeight
      let caculatedHeight = e.clientY - this.state.baseY + this.state.baseHeight
      // console.log(caculatedHeight)
      itemCopy.settings.payload.size.height = caculatedHeight
      updatePage(currentPage, currentPageItem)
    }
  }

  handleMouseUp = (e) => {
    e.preventDefault()
    this.setState({
      moving: false
    })
  }

  handleMouseOver = (e) => {
    e.preventDefault()
    this.setState({
      moving: false
    })
  }

  render() {
    const { height, width } = this.props.currentPageItem.settings.payload.size
    const designArea = {
      width: `${width}px`,
      height: `${height}px`,
      border: '1px dashed #a3afb7',
      backgroundColor: '#eef1f6'
    }

    const dragArea = {
      width: `${width}px`,
      height: '30px',
      textAlign: 'center',
      cursor: 'pointer',
      border: '1px solid black'
    }

    const canvasStyle = {
      width: `${width}px`,
      height: 'auto',
      userSelect: 'none'
    }

    const { comList, currentCom, currentPage, updateCom, focusCom } = this.props

    let renderComs = listItemSortByOrder(
      comList.filter(item => currentCom.includes(item.id)),
      currentCom
    )

    return (
      <div style={canvasStyle}>
        <div className="design-area" style={designArea}>
          {renderComs.map((com, index) => (
            <Com
              key={`${currentPage} + ${com.id}`}
              {...com}
              updateCom={updateCom}
              focusCom={focusCom}
              zIndex={index}
            />
          ))}
        </div>
        <div
          className="drag-area"
          style={dragArea}
          onMouseDown={(e) => this.handleMouseDown(e)}
          onMouseMove={(e) => this.handleMouseMove(e)}
          onMouseUp={(e) => this.handleMouseUp(e)}
          onMouseOver={(e) => this.handleMouseOver(e)}
        >
          拖动调整大小
        </div>
      </div>
    )
  }
}

export default Canvas
