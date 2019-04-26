import * as React from 'react'
import { VideoCom } from '../../types/coms'

interface Props extends VideoCom {
  mode?: string
}

class Video extends React.Component<Props> {
  render() {
    const { videoUrl, width, height } = this.props
    const bindStyle = {
      width: width + 'px',
      height: height + 'px'
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