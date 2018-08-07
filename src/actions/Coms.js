import * as types from '../constants/ActionTypes'
let nextComId = 0

export const addCom = attribute => ({
  type: types.ADD_COM,
  id: nextComId++,
  attribute
})

export const updateCom = (id, attribute) => ({
  type: types.UPDATE_COM,
  id,
  attribute
})

export const focusCom = id => ({
  type: types.FOCUS_COM,
  id
})

export const deleteCom = id => ({
  type: types.DELETE_COM,
  id
})

export const updateComZindex = (layers, oldIndex, newIndex) => ({
  type: types.UPDATE_COM_ZINDEX,
  layers,
  oldIndex,
  newIndex
})
