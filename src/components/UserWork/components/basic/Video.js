import React from 'react'

class Video extends React.Component {
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
        <video controls="controls" src={attribute.videoUrl} style={inStyle} />
      </div>
    )
  }
}

export default Video
