import { SET_CURRENT_PAGE_ID, SET_CURRENT_COM_ID, SET_LOADING_STATUS } from '../constants/ActionTypes'

export interface StatusState {
  currentPageId: number
  currentComId: number
  isLoading: boolean
}

export interface SetLoadingStatus {
  type: typeof SET_LOADING_STATUS
  isLoading: boolean
}

export interface SetCurrentPageId {
  type: typeof SET_CURRENT_PAGE_ID
  id: number
}

export interface SetCurrentComId {
  type: typeof SET_CURRENT_COM_ID
  id: number
}

export type StatusAction = SetCurrentPageId | SetCurrentComId | SetLoadingStatus