import * as types from '../constants/ActionTypes';
import { Com } from '../types/coms';
import {
  SetLatestWorkId,
  SetBasicDialogStatus,
  Redo,
  Undo,
  SetCurrentComId,
  SetLoadingStatus,
  SetErrorMessage,
  SetMaterialDialogStatus,
  SetPageSettingsDialogStatus,
  SetMaterialCurrentValue,
  SetMaterialChoosenCom,
} from '../types/status';

export const redo = (): Redo => ({
  type: types.REDO,
});

export const undo = (): Undo => ({
  type: types.UNDO,
});

export const setCurrentComId = (id: number): SetCurrentComId => ({
  type: types.SET_CURRENT_COM_ID,
  id,
});

export const setLoading = (isLoading: boolean): SetLoadingStatus => ({
  type: types.SET_LOADING_STATUS,
  isLoading,
});

export const setErrorMessage = (message: string): SetErrorMessage => ({
  type: types.SET_ERROR_MESSAGE,
  message,
});

export const setMaterialDialogStatus = (
  status: boolean
): SetMaterialDialogStatus => ({
  type: types.SET_MATERIAL_DIALOG_STATUS,
  status,
});

export const setPageSettingsDialogStatus = (
  status: boolean,
  choosenPageId: number | null
): SetPageSettingsDialogStatus => ({
  type: types.SET_PAGE_SETTINGS_DIALOG_STATUS,
  status,
  choosenPageId,
});

export const setMaterialCurrentValue = (
  value: number
): SetMaterialCurrentValue => ({
  type: types.SET_MATERIAL_CURRENT_VALUE,
  value,
});

export const setMaterialChoosenCom = (
  com: Com | null
): SetMaterialChoosenCom => ({
  type: types.SET_MATERIAL_CHOOSEN_COM,
  com,
});

export const setBasicDialogStatus = (
  status: boolean,
  basicDialogMessage: string
): SetBasicDialogStatus => ({
  type: types.SET_BASIC_DIALOG_STATUS,
  status,
  basicDialogMessage,
});

export const setLatestWorkId = (id: string | null): SetLatestWorkId => ({
  type: types.SET_LATEST_WORK_ID,
  id,
});
