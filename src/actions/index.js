let nextComId = 0
export const addCom = style => ({
  type: 'ADD_COM',
  id: nextComId++,
  style
})

export const resizeCom = style => ({
  type: 'RESIZE_COM',
  style
})

export const dragCom = style => ({
  type: 'DRAG_COM',
  style
})
