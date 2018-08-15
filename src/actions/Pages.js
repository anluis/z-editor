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

export const updatePageOrder = (oldIndex, newIndex) => ({
  type: types.UPDATE_PAGE_ORDER,
  oldIndex,
  newIndex
})

export const deletePage = id => ({
  type: types.DELETE_PAGE,
  id
})

export const updatePageSettings = (id, settings) => ({
  type: types.UPDATE_PAGE_SETTINGS,
  id,
  settings
})

export const switchSettings = shouldSettingsShow => ({
  type: types.SWITCH_PAGE_SETTINGS,
  shouldSettingsShow
})
