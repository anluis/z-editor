import * as types from '../constants/ActionTypes'

export const addComCount = () => ({
  type: types.ADD_COM
})

export const redo = () => ({
  type: types.REDO
})

export const undo = () => ({
  type: types.UNDO
})

export const setCurrentPageId = (id: number) => ({
  type: types.SET_CURRENT_PAGE_ID,
  id
})

export const setCurrentComId = (id: number) => ({
  type: types.SET_CURRENT_COM_ID,
  id
})

export const setLoading = (isLoading: boolean) => ({
  type: types.SET_LOADING_STATUS,
  isLoading
})