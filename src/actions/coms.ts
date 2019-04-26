import * as types from '../constants/ActionTypes'
import { Com, ComAction } from '../types/coms';

export const addCom = (addInWhatPagesId: number, com: Com): ComAction => ({
  type: types.ADD_COM,
  targetPageId: addInWhatPagesId,
  com
})

export const updateCom = (whichComNeedToUpdatesId: number, com: Com): ComAction => ({
  type: types.UPDATE_COM,
  id: whichComNeedToUpdatesId,
  com
})

export const focusCom = (id: number): ComAction => ({
  type: types.FOCUS_COM,
  id
})

export const deleteCom = (id: number): ComAction => ({
  type: types.DELETE_COM,
  id
})
