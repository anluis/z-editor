import * as types from '../constants/ActionTypes'
import { UpdateSettings } from '../types/settings';
export const updateSettings = (title: string, desc: string): UpdateSettings => ({
  type: types.UPDATE_SETTINGS,
  title,
  desc
})