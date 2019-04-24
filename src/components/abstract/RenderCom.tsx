import * as React from 'react'
import { Com, TextCom } from '../../types/coms';
import Text from '../create/Text'
import Image from '../create/Image'
import Video from '../create/Video'
import { TEXT, IMAGE, VIDEO, PHOTO_GET, LOTTIE } from '../../constants/coms'
import PhotoGet from '../create/PhotoGet';
import Lottie from '../create/Lottie';

interface RenderComProps {
  com: Com
}

const RenderCom: React.SFC<RenderComProps> = (props) => {
  const { com } = props
  switch (com.type) {
    case TEXT:
      return <Text {...com as TextCom} />
    case IMAGE:
      return <Image />
    case VIDEO:
      return <Video />
    case PHOTO_GET:
      return <PhotoGet />
    case LOTTIE:
      return <Lottie />
    default:
      return null
  }
}

export default RenderCom