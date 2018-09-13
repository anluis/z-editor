import * as ModuleTypes from '../../constants/ModuleTypes'

export const backgroundModule = {
  name: '背景',
  height: 665,
  width: 373,
  x: 0,
  y: 0,
  imgUrl: 'http://cdn.exe666.com/fe/marketing/img/pacific/bg.png',
  zIndex: 0,
  opacity: 1,
  background: '#fff',
  type: ModuleTypes.BACKGROUND_MODULE
}

export const imageModule = {
  name: '图片',
  height: 100,
  width: 100,
  x: 0,
  y: 0,
  imgUrl:
    'https://dn-coding-net-production-static.qbox.me/d4c0b468-29dd-4996-ae65-58a4b038fc39.JPG?imageMogr2/auto-orient/format/jpeg/crop/!538x538a0a0',
  link: '',
  opacity: 1,
  type: ModuleTypes.IMG_MODULE,
  borderWidth: 0,
  background: '#fff',
  borderColor: '#000',
  borderStyle: 'solid',
  borderRadius: 0,
  animationName: 'none',
  animationDuration: 1,
  animationDelay: 0,
  animationIterationCount: 1
}

export const inputModule = {
  name: '输入框',
  content: '输入框',
  height: 40,
  width: 300,
  x: 0,
  y: 0,
  color: '#000',
  imgUrl: '',
  opacity: 1,
  type: ModuleTypes.INPUT_MODULE,
  borderWidth: 0,
  background: '#fff',
  borderColor: '#000',
  borderStyle: 'solid',
  borderRadius: 0,
  animationName: 'none',
  animationDuration: 1,
  animationDelay: 0,
  animationIterationCount: 1
}

export const videoModule = {
  name: '视频',
  videoUrl:
    'http://h5-images.oss-cn-shanghai.aliyuncs.com/xingshidu_h5/marketing/pages/ad/vedio.mp4',
  height: 200,
  width: 300,
  x: 0,
  y: 0,
  type: ModuleTypes.VIDEO_MODULE,
  borderWidth: 0,
  background: 'none',
  borderColor: '#000',
  borderStyle: 'solid',
  borderRadius: 0,
  animationName: 'none',
  animationDuration: 1,
  animationDelay: 0,
  animationIterationCount: 1
}

export const textModule = {
  name: '文字',
  content: '',
  textAlign: 'left',
  height: 50,
  width: 300,
  x: 0,
  y: 0,
  type: ModuleTypes.TEXT_MODULE,
  borderWidth: 1,
  background: 'none',
  borderColor: '#08a1ef',
  borderStyle: 'solid',
  borderRadius: 0,
  wordWrap: 'break-word',
  fontSize: '14',
  lineHeight: 1,
  letterSpacing: 0,
  animationName: 'none',
  animationDuration: 1,
  animationDelay: 0,
  animationIterationCount: 1
}

export const photoModule = {
  name: '照片',
  content: '我是照片',
  height: 400,
  width: 250,
  x: 0,
  y: 0,
  type: ModuleTypes.PHOTO_MODULE,
  borderWidth: 1,
  background: 'none',
  borderColor: '#08a1ef',
  borderStyle: 'solid',
  borderRadius: 0,
  animationName: 'none',
  animationDuration: 1,
  animationDelay: 0,
  animationIterationCount: 1
}
