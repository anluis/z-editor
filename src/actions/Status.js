import * as types from '../constants/ActionTypes'

export const changeWorkSettingVisible = (visible, payload) => ({
  type: types.CHANGE_WORKSETTING_VISIBLE,
  visible,
  payload
})
