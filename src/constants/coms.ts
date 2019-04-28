import { TextCom, ImageCom, VideoCom, LottieCom, PhotoGetCom } from "../types/coms";
export const TEXT = 'TEXT'
export const IMAGE = 'IMAGE'
export const VIDEO = 'VIDEO'
export const PHOTO_GET = 'PHOTO_GET'
export const LOTTIE = 'LOTTIE'

export const initText: TextCom = {
  x: 0,
  y: 0,
  width: 100,
  height: 20,
  fontSize: 14,
  color: 'black',
  letterSpacing: '0',
  name: '',
  type: TEXT,
  id: 0,
  context: '',
  backgroundColor: 'rgba(0,0,0,0)',
  opacity: 0
}

export const initImage: ImageCom = {
  name: '',
  type: IMAGE,
  id: 0,
  x: 0,
  y: 0,
  width: 100,
  height: 100,
  imgUrl: ''
}

export const initVideo: VideoCom = {
  name: '',
  type: VIDEO,
  id: 0,
  x: 0,
  y: 0,
  width: 100,
  height: 100,
  videoUrl: ''
}

export const initLottie: LottieCom = {
  type: LOTTIE,
  width: 100,
  height: 200,
  id: 0,
  x: 0,
  y: 0,
  name: '',
  path: '',
  assetsPath: ''
}

export const initPhotoGet: PhotoGetCom = {
  type: PHOTO_GET,
  width: 80,
  height: 160,
  id: 0,
  x: 0,
  y: 0,
  name: '',
  filter: `opacity(0.7)`
}