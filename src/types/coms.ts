import { ADD_COM, UPDATE_COM, DELETE_COM, FOCUS_COM } from "../constants/ActionTypes";

export type Com = {
  id: number
  name: string
  styles: {
    left: number
    top: number
    width: number
    height: number
  }
}

export type Coms = {
  [propNames: string]: Com
}

export interface AddCom {
  type: typeof ADD_COM,
  id: number
  com: Com
}

export interface UpdateCom {
  type: typeof UPDATE_COM,
  id: number
  com: Com
}

export interface DeleteCom {
  type: typeof DELETE_COM,
  id: number
}

export interface FocusCom {
  type: typeof FOCUS_COM,
  id: number
}

export type ComAction = AddCom | UpdateCom | DeleteCom | FocusCom