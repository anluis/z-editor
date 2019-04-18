import { SET_CURRENT_ID } from '../constants/ActionTypes'

export interface Status {
  currentPageId: number
  currentComId: number
}

export interface SetCurrentPageId {
  type: typeof SET_CURRENT_ID
  id: number
}

export type StatusActions = SetCurrentPageId