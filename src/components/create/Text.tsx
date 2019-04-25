import * as React from 'react'
import { TextCom } from '../../types/coms'
interface Props extends TextCom {

}
class Text extends React.Component<Props> {
  render() {
    const { width, height, fontSize, context } = this.props
    const bindStyle = {
      width: width + 'px',
      height: height + 'px',
      fontSize: fontSize + 'px'
    }
    return <div style={bindStyle}>
      {context}
    </div>
  }
}

export default Text