import React from 'react'
import RenderSingleCom from './RenderSingleCom'

class RenderEachComs extends React.Component {
  render() {
    const coms = this.props.coms
    // need to add index
    const ComCollections = coms.map(e => {
      const zIndex = {
        zIndex: e.zIndex
      }
      const renderSingleCom = RenderSingleCom(e)
      return <div style={zIndex}> {renderSingleCom} </div>
    })
    return <div>{ComCollections}</div>
  }
}

export default RenderEachComs
