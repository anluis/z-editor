import * as types from '../constants/ActionTypes';
import { Work } from '../types/IStoreState';
import { ApplyWork } from '../types/pages';
import { CreateWork } from '../types/status';

export const applyWork = (work: Work): ApplyWork => ({
  type: types.APPLY_WORK,
  work,
});

export const createWork = (): CreateWork => ({
  type: types.CREATE_WORK,
});
