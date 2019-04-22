import * as types from '../constants/ActionTypes'

export const addComCount = () => ({
  type: types.ADD_COM
})

export const redo = () => ({
  type: types.REDO
})

export const undo = () => ({
  type: types.UNDO
})