import React from 'react'

class Background extends React.Component {
  render() {
    const { attribute } = this.props

    const outStyle = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'transparent',
      width: '100%',
      height: '100%',
      position: 'absolute',
      left: '0px',
      top: '0px'
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
    // 遍历所有attr的属性
    // 转化数值、字符串为css属性
    return (
      <div style={outStyle}>
        <div style={inStyle} />
      </div>
    )
  }
}

export default Background
