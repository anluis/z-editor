import * as types from '../constants/ActionTypes'
let nextComId = 0

export const addCom = (style, context) => ({
  type: types.ADD_COM,
  id: nextComId++,
  style,
  context
})

export const updateCom = (id, style, context) => ({
  type: types.UPDATE_COM,
  id,
  style,
  context
})

export const focusCom = id => ({
  type: types.FOCUS_COM,
  id
})
