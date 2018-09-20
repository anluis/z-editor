import React from 'react'
import lottie from 'lottie-web'

class Lottie extends React.Component {
  initAnimation = () => {
    const el = document.getElementById('animation')
    lottie.loadAnimation({
      container: el, // the dom element that will contain the animation
      renderer: 'svg',
      loop: true,
      autoplay: true,
      assetsPath: 'http://cdn.exe666.com/fe/marketing/jqsjb/img/',
      path: 'http://cdn.exe666.com/fe/marketing/jqsjb/json/data.json' // the path to the animation json
    })
  }
  componentDidMount() {
    this.initAnimation()
  }

  render() {
    return <div id="animation" />
  }
}
export default Lottie
