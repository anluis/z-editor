import * as types from '../constants/ActionTypes'

export const updateProjectSettings = settings => ({
  type: types.UPDATE_PROJECT_SETTING,
  settings
})
