import { ADD_COM, UPDATE_COM, DELETE_COM, FOCUS_COM } from "../constants/ActionTypes";
import { RouteComponentProps } from "react-router";

export interface BaseCom {
  id: number
  name: string
  type: string
  x: number
  y: number
  width: number
  height: number
}

export interface ImageCom extends BaseCom {
  imgUrl: string
}

export interface TextCom extends BaseCom {
  fontSize: string
  color: string
  letterSpacing: string
  context: string
}

export interface VideoCom extends BaseCom {
  videoUrl: string
}

export interface PhotoGetCom extends BaseCom, RouteComponentProps {

}

export interface LottieCom extends BaseCom {
  path: string
  assetsPath: string
}

export type Com = ImageCom | TextCom | VideoCom | PhotoGetCom | LottieCom

export type Coms = Array<Com>

export interface AddCom {
  type: typeof ADD_COM
  id: number
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
}

export interface FocusCom {
  type: typeof FOCUS_COM
  id: number
}

export type ComAction = AddCom | UpdateCom | DeleteCom | FocusCom