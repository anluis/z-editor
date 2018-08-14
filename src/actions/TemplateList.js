import * as types from '../constants/ActionTypes'

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
