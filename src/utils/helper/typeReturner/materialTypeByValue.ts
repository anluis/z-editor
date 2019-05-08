import { IMAGE, VIDEO, LOTTIE, AUDIO } from '../../../constants/coms';
const materialTypeByValue = (value: number) => {
  switch (value) {
    case 0:
      return IMAGE
    case 1:
      return VIDEO
    case 2:
      return LOTTIE
    case 3:
      return AUDIO
    default:
      return null
  }
}

export default materialTypeByValue