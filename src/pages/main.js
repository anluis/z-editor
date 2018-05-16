import React from 'react'
import Button from '@material-ui/core/Button'
import Costum from '../components/costum'
class Main extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 0,
      coms: []
    }
  }

  renderCoustum = (context, index) => {
    return <Costum key={index} />
  }
  handleComAdd = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  render() {
    let Coms = []
    for (let i = 0; i < this.state.count; i++) {
      Coms.push({})
    }

    const allComponents = Coms.map((context, index) => {
      return this.renderCoustum(context, index)
    })

    return (
      <div className="main-wrap">
        <div className="main-left">{allComponents}</div>
        <div className="main-right">
          <Button
            onClick={() => this.handleComAdd()}
            variant="raised"
            color="primary"
          >
            新增
          </Button>
          <div />
        </div>
      </div>
    )
  }
}
export default Main
