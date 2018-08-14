import * as types from '../constants/ActionTypes'

export const fetchWorksBegin = () => ({
  type: types.FETCH_WORKS_BEGIN
})

export const fetchWorksSuccess = items => ({
  type: types.FETCH_WORKS_SUCCESS,
  payload: { items }
})

export const fetchWorksError = error => ({
  type: types.FETCH_WORKS_FAILURE,
  payload: { error }
})
