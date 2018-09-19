import * as types from '../constants/ActionTypes'

export const saveWorkBegin = () => ({
  type: types.SAVE_WORK_BEGIN
})

export const saveWorkSuccess = items => ({
  type: types.SAVE_WORK_SUCCESS,
  payload: { items }
})

export const saveWorkFailure = error => ({
  type: types.SAVE_WORK_FAILURE,
  payload: { error }
})
