import { UPDATE_SETTINGS, APPLY_WORK } from "../constants/ActionTypes";
import { Work } from "./IStoreState";

export interface Settings {
  title: string,
  desc: string
}

export interface UpdateSettings {
  type: typeof UPDATE_SETTINGS,
  title: string
  desc: string
}

export interface ApplyWork {
  type: typeof APPLY_WORK
  work: Work
}

export type SettingsAction = UpdateSettings | ApplyWork