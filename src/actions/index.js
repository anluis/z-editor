let nextComId = 0
export const ADD_COM = 'ADD_COM'
export const RESIZE_COM = 'RESIZE_COM'
export const DRAG_COM = 'DRAG_COM'
export const SET_CURRENT_ID = 'SET_CURRENT_ID'
export const CHANGE_CURRENT_NAME = 'CHANGE_CURRENT_NAME'
export const DELETE_COM = 'DELETE_COM'

export const addCom = style => ({
  type: ADD_COM,
  id: nextComId++,
  text: 'Com-Id:' + nextComId,
  style,
  beSelected: true
})

export const resizeCom = (style, id) => ({
  type: RESIZE_COM,
  style,
  id
})

export const dragCom = (style, id) => ({
  type: DRAG_COM,
  style,
  id
})

export const setCurrentCom = (style, id, text) => ({
  type: SET_CURRENT_ID,
  style,
  id,
  text
})

export const changeCurrentName = (id, text) => ({
  type: CHANGE_CURRENT_NAME,
  text,
  id
})
