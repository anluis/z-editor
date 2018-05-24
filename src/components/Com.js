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

const Com = ({ onClick, text, width, height, x, y }) => (
  <Rnd
    onDragStart={() => this.handleComClick()}
    bounds={'.design-area'}
    style={style}
    size={{ width: width, height: height }}
    position={{ x: x, y: y }}
    onDragStop={(e, d) => {
      // this.setState({ x: d.x, y: d.y })
      // this.props.transferState(this.state)
    }}
    onResize={(e, direction, ref, delta, position) => {
      // this.setState({
      //   width: ref.offsetWidth,
      //   height: ref.offsetHeight,
      //   ...position
      // })
      // this.props.transferState(this.state)
    }}
  >
    {text}
  </Rnd>
)

Com.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired
}

export default Com
