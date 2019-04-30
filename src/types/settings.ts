import { UPDATE_SETTINGS } from "../constants/ActionTypes";

export interface Settings {
  title: string,
  desc: string
}

export interface UpdateSettings {
  type: typeof UPDATE_SETTINGS,
  title: string
  desc: string
}

export type SettingsAction = UpdateSettings