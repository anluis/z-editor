import * as React from 'react'
const lottie = require('lottie-web')
import { LottieCom } from '../../types/coms'

interface Props extends LottieCom {
  mode?: string
}

class Lottie extends React.Component<Props> {
  initAnimation = () => {
    const { id, assetsPath, path } = this.props
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
    const { id, width, height } = this.props
    const bindStyle = {
      width: width + 'px',
      height: height + 'px'
    }
    return <div id={`lottie-${id}`} style={bindStyle}></div>
  }
}

export default Lottie