let nextComId = 0
export const addCom = style => ({
  type: 'ADD_COM',
  id: nextComId++,
  text: 'Com-Id:' + nextComId,
  style
})

export const resizeCom = (style, id) => ({
  type: 'RESIZE_COM',
  style,
  id
})

export const dragCom = (style, id) => ({
  type: 'DRAG_COM',
  style,
  id
})

export const setCurrentCom = (style, id, text) => ({
  type: 'SET_CURRENT_ID',
  style,
  id,
  text
})

export const changeCurrentName = (id, text) => ({
  type: 'CHANGE_CURRENT_NAME',
  text,
  id
})
