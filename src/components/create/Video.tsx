import * as React from 'react'
import { VideoCom } from '../../types/coms'

interface Props extends VideoCom {
  mode?: string
  zIndex: number
}

class Video extends React.Component<Props> {
  render() {
    const { videoUrl, width, height, zIndex, x, y, mode } = this.props
    let bindStyle: React.CSSProperties = {
      position: 'absolute',
      width: width + 'px',
      height: height + 'px',
      zIndex: zIndex,
      left: x + 'px',
      top: y + 'px'
    }
    if (mode === 'editor') {
      bindStyle.left = '0'
      bindStyle.top = '0'
      bindStyle.width = '100%'
      bindStyle.height = '100%'
    }
    return (
      <video
        src={videoUrl}
        controls
        style={bindStyle}
      >
        your browser does not support the video tag
    </video>
    )
  }
}

export default Video