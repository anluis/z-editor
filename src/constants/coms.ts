import { TextCom } from "../types/coms";
export const TEXT = 'TEXT'
export const IMAGE = 'IMAGE'
export const VIDEO = 'VIDEO'
export const PHOTO_GET = 'PHOTO_GET'
export const LOTTIE = 'LOTTIE'

export const initText: TextCom = {
  x: 0,
  y: 0,
  width: 100,
  height: 100,
  fontSize: '14',
  color: 'black',
  letterSpacing: '0',
  name: '',
  type: TEXT,
  id: 0,
  context: ''
}