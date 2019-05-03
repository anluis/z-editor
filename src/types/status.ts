import {
  SET_CURRENT_PAGE_ID,
  SET_CURRENT_COM_ID,
  SET_LOADING_STATUS,
  SET_ERROR_MESSAGE,
  SET_MATERIAL_DIALOG_STATUS,
  SET_PAGE_SETTINGS_DIALOG_STATUS
} from '../constants/ActionTypes'

export interface StatusState {
  currentPageId: number | null
  currentComId: number | null
  isLoading: boolean
  errorMessage: string
  materialDialogShow: boolean
}

export interface SetLoadingStatus {
  type: typeof SET_LOADING_STATUS
  isLoading: boolean
}

export interface SetCurrentPageId {
  type: typeof SET_CURRENT_PAGE_ID
  id: number,
  nextPageId: number
}

export interface SetCurrentComId {
  type: typeof SET_CURRENT_COM_ID
  id: number
}

export interface SetErrorMessage {
  type: typeof SET_ERROR_MESSAGE
  message: string
}

export interface SetMaterialDialogStatus {
  type: typeof SET_MATERIAL_DIALOG_STATUS
  status: boolean
}

export interface SetPageSettingsDialogStatus {
  type: typeof SET_PAGE_SETTINGS_DIALOG_STATUS
  status: boolean
}

export type StatusAction =
  SetCurrentPageId |
  SetCurrentComId |
  SetLoadingStatus |
  SetErrorMessage |
  SetMaterialDialogStatus