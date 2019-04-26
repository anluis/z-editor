import * as React from 'react'
import { TextCom } from '../../types/coms'
interface Props extends TextCom {
  mode?: string
}
class Text extends React.Component<Props> {
  render() {
    const { width, height, fontSize, context, letterSpacing, color, mode, x, y, backgroundColor } = this.props
    let bindStyle: React.CSSProperties = {
      position: 'absolute',
      width: width + 'px',
      height: height + 'px',
      fontSize: fontSize + 'px',
      color: color,
      letterSpacing: letterSpacing + 'px',
      top: y + 'px',
      left: x + 'px',
      backgroundColor: backgroundColor
    }
    if (mode === 'editor') {
      bindStyle.top = '0'
      bindStyle.left = '0'
    }
    return <div style={bindStyle}>
      {context}
    </div>
  }
}

export default Text