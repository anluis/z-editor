import * as React from 'react'
import { Com, TextCom, ImageCom, VideoCom, PhotoGetCom, LottieCom } from '../../types/coms';
import { TEXT, IMAGE, VIDEO, PHOTO_GET, LOTTIE } from '../../constants/coms'
import Text from '../create/Text'
import Image from '../create/Image'
import Video from '../create/Video'
import PhotoGet from '../create/PhotoGet';
import Lottie from '../create/Lottie';

interface RenderComProps {
  com: Com
  mode?: string
}

const RenderCom: React.SFC<RenderComProps> = (props) => {
  const { com, mode } = props
  switch (com.type) {
    case TEXT:
      return <Text {...com as TextCom} mode={mode} />
    case IMAGE:
      return <Image {...com as ImageCom} mode={mode} />
    case VIDEO:
      return <Video {...com as VideoCom} mode={mode} />
    case PHOTO_GET:
      return <PhotoGet {...com as PhotoGetCom} mode={mode} />
    case LOTTIE:
      return <Lottie {...com as LottieCom} mode={mode} />
    default:
      return null
  }
}

export default RenderCom