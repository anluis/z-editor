import * as React from 'react'
const lottie = require('lottie-web')
import { LottieCom } from '../../types/coms'

interface Props extends LottieCom {
  mode?: string
  zIndex: number
}

class Lottie extends React.Component<Props> {
  initAnimation = () => {
    const { id, assetsPath, zIndex, path } = this.props
    const el = document.getElementById(`lottie-${id}`)
    if (el) {
      lottie.loadAnimation({
        container: el, // the dom element that will contain the animation
        renderer: 'svg',
        loop: true,
        autoplay: true,
        assetsPath: assetsPath,
        path: path // the path to the animation json
      })
    }
  }
  componentDidMount() {
    this.initAnimation()
  }
  render() {
    const { id, width, height, zIndex, x, y, mode } = this.props
    let bindStyle: React.CSSProperties = {
      position: 'absolute',
      width: width + 'px',
      height: height + 'px',
      zIndex: zIndex,
      left: x + 'px',
      top: y + 'px'
    }
    if (mode === 'editor') {
      bindStyle.left = '0'
      bindStyle.top = '0'
      bindStyle.width = '100%'
      bindStyle.height = '100%'

    }
    return <div id={`lottie-${id}`} style={bindStyle}></div>
  }
}

export default Lottie