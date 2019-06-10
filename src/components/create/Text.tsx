import * as React from 'react'
import { TextCom } from '../../types/coms'
import zoomByDevice from '../../utils/helper/userWorkSuckers/zoomByDevice';
import styles from './common.module.css'

interface Props extends TextCom {
  mode?: string
  zIndex: number
}

class Text extends React.Component<Props> {
  handleClickAction = () => {
    const { href, mode } = this.props
    if (mode === 'editor') {
      return
    }
    if (!href || href === '') {
      return
    } else {
      window.location.href = href
    }
  }
  render() {
    const { width, height, fontSize, context, letterSpacing, color, mode, x, y, backgroundColor, zIndex } = this.props
    let bindStyle: React.CSSProperties = {
      position: 'absolute',
      width: width + 'px',
      height: height + 'px',
      fontSize: fontSize + 'px',
      color: color,
      letterSpacing: letterSpacing + 'px',
      top: y + 'px',
      left: x + 'px',
      backgroundColor: backgroundColor,
      zIndex: zIndex
    }
    if (mode === 'editor') {
      bindStyle.top = '0'
      bindStyle.left = '0'
      bindStyle.width = '100%'
      bindStyle.height = '100%'
    }
    if (mode !== 'editor') {
      bindStyle.left = x * zoomByDevice() + 'px'
      bindStyle.top = y * zoomByDevice() + 'px'
      bindStyle.fontSize = fontSize * zoomByDevice() + 'px'
      bindStyle.height = height * zoomByDevice() + 'px'
      bindStyle.width = width * zoomByDevice() + 'px'
    }
    return <div
      style={bindStyle}
      className={styles.canclick}
      onClick={() => this.handleClickAction()}>
      {context}
    </div>
  }
}

export default Text