import { SET_CURRENT_PAGE_ID, SET_CURRENT_COM_ID } from '../constants/ActionTypes'

export interface Status {
  currentPageId: number
  currentComId: number
}

export interface SetCurrentPageId {
  type: typeof SET_CURRENT_PAGE_ID
  id: number
}

export interface SetCurrentComId {
  type: typeof SET_CURRENT_COM_ID
  id: number
}

export type StatusActions = SetCurrentPageId | SetCurrentComId