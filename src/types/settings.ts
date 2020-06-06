import {
  UPDATE_SETTINGS,
  APPLY_WORK,
  CREATE_WORK,
} from '../constants/ActionTypes';
import { Work } from './IStoreState';

export interface Settings {
  title: string;
  desc: string;
}

export interface UpdateSettings {
  type: typeof UPDATE_SETTINGS;
  title: string;
  desc: string;
}

export interface ApplyWork {
  type: typeof APPLY_WORK;
  work: Work;
}

export interface CreateWork {
  type: typeof CREATE_WORK;
}

export type SettingsAction = UpdateSettings | ApplyWork | CreateWork;
