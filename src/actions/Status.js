import * as types from '../constants/ActionTypes'

export const changeWorkSettings = (visible, payload) => ({
  type: types.CHANGE_WORK_SETTINGS,
  visible,
  payload
})
