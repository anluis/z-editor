import * as types from '../constants/ActionTypes'
let nextPageId = 1

export const addPage = () => ({
  type: types.ADD_PAGE,
  id: nextPageId++
})

export const focusPage = id => ({
  type: types.FOCUS_PAGE,
  id
})

export const updatePageOrder = (pages, oldIndex, newIndex) => ({
  type: types.UPDATE_PAGE_ORDER,
  pages,
  oldIndex,
  newIndex
})
