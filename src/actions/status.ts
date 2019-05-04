import * as types from '../constants/ActionTypes'
import { Com } from '../types/coms';

export const addComCount = () => ({
  type: types.ADD_COM
})

export const redo = () => ({
  type: types.REDO
})

export const undo = () => ({
  type: types.UNDO
})

export const setCurrentPageId = (id: number) => ({
  type: types.SET_CURRENT_PAGE_ID,
  id
})

export const setCurrentComId = (id: number) => ({
  type: types.SET_CURRENT_COM_ID,
  id
})

export const setLoading = (isLoading: boolean) => ({
  type: types.SET_LOADING_STATUS,
  isLoading
})

export const setErrorMessage = (message: string) => ({
  type: types.SET_ERROR_MESSAGE,
  message
})

export const setMaterialDialogStatus = (status: boolean) => ({
  type: types.SET_MATERIAL_DIALOG_STATUS,
  status
})

export const setPageSettingsDialogStatus = (status: boolean, choosenPageId: number | null) => ({
  type: types.SET_PAGE_SETTINGS_DIALOG_STATUS,
  status,
  choosenPageId
})

export const setMaterialCurrentValue = (value: number) => ({
  type: types.SET_MATERIAL_CURRENT_VALUE,
  value
})

export const setMaterialChoosenCom = (com: Com | null) => ({
  type: types.SET_MATERIAL_CHOOSEN_COM,
  com
})

export const setBasicDialogStatus = (status: boolean, basicDialogMessage: string) => ({
  type: types.SET_BASIC_DIALOG_STATUS,
  status,
  basicDialogMessage
})