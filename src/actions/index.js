import * as types from '../constants/ActionTypes'
let nextComId = 0
let nextPageId = 1

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

export const fetchTemplateListBegin = () => ({
  type: types.FETCH_TEMPLATELIST_BEGIN
})

export const fetchTemplateListSuccess = items => ({
  type: types.FETCH_TEMPLATELIST_SUCCESS,
  payload: { items }
})

export const fetchTemplateListError = error => ({
  type: types.FETCH_TEMPLATELIST_FAILURE,
  payload: { error }
})

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

export const updateComZindex = (layers, oldIndex, newIndex) => ({
  type: types.UPDATE_COM_ZINDEX,
  layers,
  oldIndex,
  newIndex
})
