import React from 'react'
import PropTypes from 'prop-types'
import Rnd from 'react-rnd'

const style = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 'solid 1px #ddd',
  background: '#f0f0f0'
}

const Com = ({ onClick, text }) => (
  <Rnd
    onDragStart={() => this.handleComClick()}
    bounds={'.design-area'}
    style={style}
    size={{ width: this.state.width, height: this.state.height }}
    position={{ x: this.state.x, y: this.state.y }}
    onDragStop={(e, d) => {
      this.setState({ x: d.x, y: d.y })
      this.props.transferState(this.state)
    }}
    onResize={(e, direction, ref, delta, position) => {
      this.setState({
        width: ref.offsetWidth,
        height: ref.offsetHeight,
        ...position
      })
      this.props.transferState(this.state)
    }}
  >
    {text}
  </Rnd>
)

Com.PropTypes = {
  text: PropTypes.string.isRequired
}
