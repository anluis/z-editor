import * as types from '../constants/ActionTypes'
export const updateSettings = (title: string, desc: string) => ({
  type: types.UPDATE_SETTINGS,
  title,
  desc
})