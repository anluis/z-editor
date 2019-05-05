import * as React from 'react'
import { ImageCom } from '../../types/coms'

interface Props extends ImageCom {
  mode?: string
  zIndex: number
}

class Image extends React.Component<Props> {
  render() {
    const { width, height, imgUrl, zIndex, x, y, mode } = this.props
    let bindStyle: React.CSSProperties = {
      position: 'absolute',
      width: width + 'px',
      height: height + 'px',
      backgroundImage: `url("` + imgUrl + `")`,
      backgroundSize: 'cover',
      zIndex: zIndex,
      left: x + 'px',
      top: y + 'px'
    }
    if (mode === 'editor') {
      bindStyle.left = '0'
      bindStyle.top = '0'
      bindStyle.height = '100%'
      bindStyle.width = '100%'
    }
    return (
      <div style={bindStyle}></div>
    )
  }
}

export default Image