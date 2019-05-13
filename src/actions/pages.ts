import * as types from '../constants/ActionTypes'
import { Page, PageAction, PageSettings, PageStyles } from '../types/pages'
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { setLoading, setErrorMessage } from './status';

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

export const deletePage = (id: number, nextPageId: number): PageAction => ({
  type: types.DELETE_PAGE,
  id,
  nextPageId
})

export const exchangeComOrder = (targetPageId: number, oldComId: number, newComId: number) => ({
  type: types.EXCHANGE_COM_ORDER,
  targetPageId,
  oldComId,
  newComId
})

export const setPageSettings = (pageSettingArgs: PageSettings, pageId: number) => ({
  type: types.SET_PAGE_SETTINGS,
  pageSettingArgs,
  pageId
})

export const setPageStyles = (pageStyles: PageStyles, pageId: number) => ({
  type: types.SET_PAGE_STYLES,
  pageStyles,
  pageId
})

export const asyncSetPageSettingsAndStyles = (pageSettings: PageSettings, pageStyles: PageStyles, pageId: number): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
    try {
      dispatch(setLoading(true))
      dispatch(setPageSettings(pageSettings, pageId))
      dispatch(setPageStyles(pageStyles, pageId))
      dispatch(setLoading(false))
    } catch (err) {
      const { message } = err.response.data
      dispatch(setErrorMessage(message))
      dispatch(setLoading(false))
    }
  }
}