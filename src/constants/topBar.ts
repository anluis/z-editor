import { videoIcon, getIcon, lottieIcon, imgIcon, textIcon } from "./imgs";
import { TEXT, IMAGE, VIDEO, PHOTO_GET, LOTTIE } from "./coms";

export interface topBarItem {
  name: string
  type: string
  imgUrl: string
}
const topBarSettings: Array<topBarItem> = [
  {
    name: 'Text',
    type: TEXT,
    imgUrl: textIcon
  },
  {
    name: 'Image',
    type: IMAGE,
    imgUrl: imgIcon
  },
  {
    name: 'Video',
    type: VIDEO,
    imgUrl: videoIcon
  },
  {
    name: 'PhotoGet',
    type: PHOTO_GET,
    imgUrl: getIcon
  },
  {
    name: 'Lottie',
    type: LOTTIE,
    imgUrl: lottieIcon
  }

]

export { topBarSettings }