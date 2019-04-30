import * as types from '../constants/ActionTypes'
import { Page, PageAction } from '../types/pages'

export const addPage = (page: Page): PageAction => ({
  type: types.ADD_PAGE,
  page
})

export const focusPage = (id: number): PageAction => ({
  type: types.FOCUS_PAGE,
  id
})

export const updatePage = (id: number, page: Page): PageAction => ({
  type: types.UPDATE_PAGE,
  page
})

export const deletePage = (id: number): PageAction => ({
  type: types.DELETE_PAGE,
  id
})

export const exchangeComOrder = (targetPageId: number, oldComId: number, newComId: number) => ({
  type: types.EXCHANGE_COM_ORDER,
  targetPageId,
  oldComId,
  newComId
})