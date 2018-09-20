import React from 'react'
import lottie from 'lottie-web'

class Input extends React.Component {
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
    const { attribute } = this.props
    const outStyle = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'transparent',
      width: attribute.width + 'px',
      height: attribute.height + 'px',
      position: 'absolute',
      left: (attribute.x / 375) * window.innerWidth + 'px',
      top: (attribute.y / 667) * window.innerHeight + 'px'
    }
    const inStyle = {
      width: '100%',
      height: '100%',
      background: attribute.background,
      animationName: attribute.animationName,
      animationDuration: attribute.animationDuration + 's',
      animationDelay: attribute.animationDelay + 's',
      animationIterationCount: attribute.animationIterationCount,
      backgroundImage: `url("` + attribute.imgUrl + `")`,
      backgroundSize: 'cover',
      border: 'solid 1px #ddd',
      color: attribute.color,
      opacity: attribute.opacity,
      borderWidth: attribute.borderWidth + 'px',
      borderColor: attribute.borderColor,
      borderStyle: attribute.borderStyle,
      borderRadius: attribute.borderRadius + 'px',
      textAlign: attribute.textAlign,
      wordWrap: attribute.wordWrap,
      fontSize: attribute.fontSize + 'px',
      lineHeight: attribute.lineHeight,
      letterSpacing: attribute.letterSpacing + 'em',
      wordBreak: 'break-all'
    }
    return (
      <div style={outStyle}>
        <div style={inStyle} id="animation" />
      </div>
    )
  }
}

export default Input
