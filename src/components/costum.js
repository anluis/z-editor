import React from 'react'
import Rnd from 'react-rnd'
const style = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 'solid 1px #ddd',
  background: '#f0f0f0'
}

class Costum extends React.Component {
  constructor() {
    super()
    this.state = {
      width: 200,
      height: 200,
      x: 10,
      y: 10
    }
  }
  render() {
    return (
      <Rnd
        style={style}
        size={{ width: this.state.width, height: this.state.height }}
        position={{ x: this.state.x, y: this.state.y }}
        onDragStop={(e, d) => {
          this.setState({ x: d.x, y: d.y })
        }}
        onResize={(e, direction, ref, delta, position) => {
          this.setState({
            width: ref.offsetWidth,
            height: ref.offsetHeight,
            ...position
          })
        }}
      >
        Rnd
      </Rnd>
    )
  }
}

export default Costum
