import * as types from '../constants/ActionTypes'
import { Com, AddCom, UpdateCom, FocusCom, DeleteCom } from '../types/coms';

export const addCom = (addInWhatPagesId: number, com: Com): AddCom => ({
  type: types.ADD_COM,
  targetPageId: addInWhatPagesId,
  com
})

export const updateCom = (whichComNeedToUpdatesId: number, com: Com): UpdateCom => ({
  type: types.UPDATE_COM,
  id: whichComNeedToUpdatesId,
  com
})

export const focusCom = (id: number): FocusCom => ({
  type: types.FOCUS_COM,
  id
})

export const deleteCom = (comId: number, targetPageId: number): DeleteCom => ({
  type: types.DELETE_COM,
  id: comId,
  targetPageId
})
