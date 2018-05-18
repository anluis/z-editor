import React from 'react'
import Button from '@material-ui/core/Button'
import Costum from '../components/costum'
import { bindActionCreator } from 'redux'
class Main extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 0,
      coms: [],
      currentChildState: {}
    }
  }

  renderCoustum = (context, index) => {
    return (
      <Costum transferState={state => this.transferState(state)} key={index} />
    )
  }

  handleComAdd = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  transferState = childComState => {
    this.setState({
      currentChildState: childComState
    })
  }

  render() {
    const designArea = {
      width: '90%',
      height: '90%',
      border: '1px solid gray'
    }
    let Coms = []
    for (let i = 0; i < this.state.count; i++) {
      Coms.push({})
    }

    const allComponents = Coms.map((context, index) => {
      return this.renderCoustum(context, index)
    })

    return (
      <div className="main-wrap">
        <div className="main-left">
          <div className="design-area" style={designArea}>
            {allComponents}
          </div>
        </div>
        <div className="main-right">
          <div className="func">
            <Button
              onClick={() => this.handleComAdd()}
              variant="raised"
              color="primary"
            >
              新增
            </Button>
            <Button variant="raised" color="primary">
              删除
            </Button>
          </div>

          <div>高度 : {this.state.currentChildState.height}</div>
          <div>宽度 : {this.state.currentChildState.width}</div>
          <div>左边距 : {this.state.currentChildState.x}</div>
          <div>右边距 : {this.state.currentChildState.y}</div>

          <div />
        </div>
      </div>
    )
  }
}
export default Main
