import { SET_CURRENT_PAGE_ID, SET_CURRENT_COM_ID, SET_LOADING_STATUS, SET_ERROR_MESSAGE } from '../constants/ActionTypes'

export interface StatusState {
  currentPageId: number
  currentComId: number
  isLoading: boolean
  errorMessage: string
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

export interface SetErrorMessage {
  type: typeof SET_ERROR_MESSAGE
  message: string
}


export type StatusAction = SetCurrentPageId | SetCurrentComId | SetLoadingStatus | SetErrorMessage