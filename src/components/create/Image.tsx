import * as React from 'react'
import { ImageCom } from '../../types/coms'

interface Props extends ImageCom {
  mode?: string
  zIndex: number
}

class Image extends React.Component<Props> {
  render() {
    const { width, height, imgUrl, zIndex } = this.props
    const bindStyle = {
      width: width + 'px',
      height: height + 'px',
      backgroundImage: `url("` + imgUrl + `")`,
      backgroundSize: 'cover',
      zIndex: zIndex
    }
    return (
      <div style={bindStyle}></div>
    )
  }
}

export default Image