import * as types from '../constants/ActionTypes'
let nextComId = 0

export const addCom = style => ({
  type: types.ADD_COM,
  id: nextComId++,
  text: 'Com-Id:' + nextComId,
  style,
  beSelected: true
})

export const resizeCom = (style, id) => ({
  type: types.RESIZE_COM,
  style,
  id
})

export const dragCom = (style, id) => ({
  type: types.DRAG_COM,
  style,
  id
})

export const setCurrentCom = (style, id, text) => ({
  type: types.SET_CURRENT_ID,
  style,
  id,
  text
})

export const changeCurrentName = (id, text) => ({
  type: types.CHANGE_CURRENT_NAME,
  text,
  id
})

export const updateStyles = (style, id) => ({
  type: types.UPDATE_STYLES,
  style,
  id
})
