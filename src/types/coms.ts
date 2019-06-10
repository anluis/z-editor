import { ADD_COM, UPDATE_COM, DELETE_COM, FOCUS_COM, APPLY_WORK, CREATE_WORK } from "../constants/ActionTypes";
import { Work } from "./IStoreState";

export interface BaseCom {
  id: number
  name: string
  x: number
  y: number
  width: number
  height: number
}

export interface ImageCom extends BaseCom {
  imgUrl: string
  type: 'IMAGE'
  href: string
}

export interface TextCom extends BaseCom {
  fontSize: number
  color: string
  letterSpacing: string
  context: string
  type: 'TEXT'
  backgroundColor: string
  opacity: number
  href: string
}

export interface VideoCom extends BaseCom {
  videoUrl: string
  type: 'VIDEO'
}

export interface PhotoGetCom extends BaseCom {
  type: 'PHOTO_GET',
  filter?: string
}

export interface LottieCom extends BaseCom {
  path: string
  assetsPath: string
  type: 'LOTTIE',
  href: string
}

export type Com = ImageCom | TextCom | VideoCom | PhotoGetCom | LottieCom

export type Coms = Array<Com>

export interface AddCom {
  type: typeof ADD_COM
  targetPageId: number
  com: Com
}

export interface UpdateCom {
  type: typeof UPDATE_COM
  id: number
  com: Com
}

export interface DeleteCom {
  type: typeof DELETE_COM
  id: number
  targetPageId: number
}

export interface FocusCom {
  type: typeof FOCUS_COM
  id: number
}

export interface ApplyWork {
  type: typeof APPLY_WORK,
  work: Work
}

export interface CreateWork {
  type: typeof CREATE_WORK
}

export type ComAction = AddCom | UpdateCom | DeleteCom | FocusCom | ApplyWork | CreateWork