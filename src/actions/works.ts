import * as types from '../constants/ActionTypes'
import { Work } from '../types/IStoreState';

export const applyWork = (work: Work) => ({
  type: types.APPLY_WORK,
  work
})

export const createWork = () => ({
  type: types.CREATE_WORK
})