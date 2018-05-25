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

export const setCurrentCom = id => ({
  type: 'SET_CURRENT_COM',
  id
})
