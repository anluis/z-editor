import { videoIcon, getIcon, lottieIcon, imgIcon, textIcon } from "./imgs";

export interface topBarItem {
  name: string
  type: string
  imgUrl: string
}
const topBarSettings: Array<topBarItem> = [
  {
    name: 'Text',
    type: 'Text',
    imgUrl: textIcon
  },
  {
    name: 'Image',
    type: 'Image',
    imgUrl: imgIcon
  },
  {
    name: 'Video',
    type: 'Video',
    imgUrl: videoIcon
  },
  {
    name: 'PhotoGet',
    type: 'PhotoGet',
    imgUrl: getIcon
  },
  {
    name: 'Lottie',
    type: 'Lottie',
    imgUrl: lottieIcon
  }

]

export { topBarSettings }