import {
  SET_CURRENT_PAGE_ID,
  SET_CURRENT_COM_ID,
  SET_LOADING_STATUS,
  SET_ERROR_MESSAGE,
  SET_MATERIAL_DIALOG_STATUS,
  SET_PAGE_SETTINGS_DIALOG_STATUS,
  SET_MATERIAL_CURRENT_VALUE,
  SET_MATERIAL_CHOOSEN_COM,
  SET_BASIC_DIALOG_STATUS,
  SET_LATEST_WORK_ID,
  CREATE_WORK
} from '../constants/ActionTypes'
import { Com } from './coms';

export interface StatusState {
  currentPageId: number | null
  currentComId: number | null
  isLoading: boolean
  isError: boolean,
  errorMessage: string
  materialDialogShow: boolean
  pageSettingDialogShow: boolean
  choosenPageId: number | null
  materialCurrentValue: number
  materialChoosenCom: Com | null
  basicDialogShow: boolean
  basicDialogMessage: string
  latestWorkId: string | null
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
  status: boolean,
  choosenPageId: number
}

export interface SetMaterialCurrentValue {
  type: typeof SET_MATERIAL_CURRENT_VALUE
  value: number
}

export interface SetMaterialChoosenCom {
  type: typeof SET_MATERIAL_CHOOSEN_COM
  com: Com | null
}

export interface SetBasicDialogStatus {
  type: typeof SET_BASIC_DIALOG_STATUS
  status: boolean
  basicDialogMessage: string
}

export interface SetLatestWorkId {
  type: typeof SET_LATEST_WORK_ID
  id: string
}

export interface CreateWork {
  type: typeof CREATE_WORK
}

export type StatusAction =
  SetCurrentPageId |
  SetCurrentComId |
  SetLoadingStatus |
  SetErrorMessage |
  SetMaterialDialogStatus |
  SetPageSettingsDialogStatus |
  SetMaterialCurrentValue |
  SetMaterialChoosenCom |
  SetBasicDialogStatus |
  SetLatestWorkId |
  CreateWork