import * as ModuleTypes from '../../constants/ModuleTypes'

export const backgroundModule = {
  name: '背景',
  height: 665,
  width: 375,
  x: 0,
  y: 0,
  imgUrl: 'http://cdn.exe666.com/fe/marketing/img/pacific/bg.png',
  zIndex: 0,
  opacity: 1,
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
  borderColor: '#000',
  borderStyle: 'solid',
  borderRadius: 0
}
