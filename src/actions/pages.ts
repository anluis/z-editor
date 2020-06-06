import * as types from '../constants/ActionTypes';
import {
  Page,
  PageAction,
  PageSettings,
  PageStyles,
  AddPage,
  FocusPage,
  UpdatePage,
  DeletePage,
  ExchangeComOrder,
  SetPageSettings,
  SetPageStyles,
} from '../types/pages';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { setLoading, setErrorMessage } from './status';

export const addPage = (page: Page): AddPage => ({
  type: types.ADD_PAGE,
  page,
});

export const focusPage = (id: number): FocusPage => ({
  type: types.FOCUS_PAGE,
  id,
});

export const updatePage = (id: number, page: Page): UpdatePage => ({
  type: types.UPDATE_PAGE,
  page,
});

export const deletePage = (id: number, nextPageId: number): DeletePage => ({
  type: types.DELETE_PAGE,
  id,
  nextPageId,
});

export const exchangeComOrder = (
  targetPageId: number,
  oldComId: number,
  newComId: number
): ExchangeComOrder => ({
  type: types.EXCHANGE_COM_ORDER,
  targetPageId,
  oldComId,
  newComId,
});

export const setPageSettings = (
  pageSettings: PageSettings,
  pageId: number
): SetPageSettings => ({
  type: types.SET_PAGE_SETTINGS,
  pageSettings,
  pageId,
});

export const setPageStyles = (
  pageStyles: PageStyles,
  pageId: number
): SetPageStyles => ({
  type: types.SET_PAGE_STYLES,
  pageStyles,
  pageId,
});

export const asyncSetPageSettingsAndStyles = (
  pageSettings: PageSettings,
  pageStyles: PageStyles,
  pageId: number
): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
    try {
      dispatch(setLoading(true));
      dispatch(setPageSettings(pageSettings, pageId));
      dispatch(setPageStyles(pageStyles, pageId));
      dispatch(setLoading(false));
    } catch (err) {
      const { message } = err.response.data;
      dispatch(setErrorMessage(message));
      dispatch(setLoading(false));
    }
  };
};
