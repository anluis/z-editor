import * as types from '../constants/ActionTypes'
import { Com, ComAction } from '../types/coms';

export const addCom = (id: number, com: Com): ComAction => ({
  type: types.ADD_COM,
  id,
  com
})

export const updateCom = (id: number, com: Com): ComAction => ({
  type: types.UPDATE_COM,
  id,
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
