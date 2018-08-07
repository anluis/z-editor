import * as types from '../constants/ActionTypes'
let nextComId = 0

export const addCom = attribute => ({
  type: types.ADD_COM,
  id: nextComId++,
  attribute: {
    ...attribute,
    name: attribute.name + (nextComId - 1),
    zIndex: nextComId - 1
  }
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
  type: types.ADD_PAGE
})

export const updateComZindex = (id, oldIndex, newIndex, attribute) => ({
  type: types.UPDATE_COM_ZINDEX,
  id,
  attribute,
  oldIndex,
  newIndex
})
