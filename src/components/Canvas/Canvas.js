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
      size: {
        height: number,
        width: number
      }
    }
  },

}
class Canvas extends React.Component<Props> {

  constructor() {
    super()
    this.state = {
      baseY: 0,
      moving: false
    }
  }

  handleMouseDown = (e) => {
    this.setState({
      baseY: e.clientY,
      moving: true
    })
  }

  handleMouseMove = (e) => {
    // maybe use component's own state
    // then async to store
    const { moving } = this.state
    const { currentPageItem, updatePage, currentPage } = this.props
    const itemCopy = { ...currentPageItem }
    if (moving) {
      itemCopy.settings.size.height += e.clientY - this.state.baseY
      updatePage(currentPage, currentPageItem)
    }
  }

  handleMouseUp = (e) => {
    console.log('up')
    this.setState({
      moving: false
    })
  }

  handleMouseOver = (e) => {
    console.log('over')
    this.setState({
      moving: false
    })
  }

  render() {
    const { height, width } = this.props.currentPageItem.settings.size
    const designArea = {
      width: `${width}px`,
      height: `${height}px`,
      border: '1px dashed #a3afb7',
      backgroundColor: '#eef1f6'
    }

    const dragArea = {
      width: `${width}px`,
      height: '60px',
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
