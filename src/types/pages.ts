import {
  ADD_PAGE,
  DELETE_PAGE,
  UPDATE_PAGE,
  FOCUS_PAGE,
  EXCHANGE_COM_ORDER,
  SET_PAGE_SETTINGS,
  APPLY_WORK,
  SET_PAGE_STYLES,
} from '../constants/ActionTypes';
import { Work } from './IStoreState';

export interface PageStyles {
  width: number;
  height: number;
}

export interface PageSettings {
  pageTitle: string;
  wechatShareTitle: string;
  wechatShareDescription: string;
  wechatShareIcon: string;
}

export interface Page {
  id: number;
  order: Array<number>;
  name: string;
  styles: PageStyles;
  settings: PageSettings;
}

export type Pages = Array<Page>;

export interface AddPage {
  type: typeof ADD_PAGE;
  page: Page;
}

export interface DeletePage {
  type: typeof DELETE_PAGE;
  id: number;
  nextPageId: number;
}

export interface UpdatePage {
  type: typeof UPDATE_PAGE;
  page: Page;
}

export interface FocusPage {
  type: typeof FOCUS_PAGE;
  id: number;
}

export interface ExchangeComOrder {
  type: typeof EXCHANGE_COM_ORDER;
  targetPageId: number;
  oldComId: number;
  newComId: number;
}

export interface SetPageSettings {
  type: typeof SET_PAGE_SETTINGS;
  pageSettings: PageSettings;
  pageId: number;
}

export interface ApplyWork {
  type: typeof APPLY_WORK;
  work: Work;
}

export interface SetPageStyles {
  type: typeof SET_PAGE_STYLES;
  pageStyles: PageStyles;
  pageId: number;
}

export type PageAction =
  | AddPage
  | DeletePage
  | UpdatePage
  | FocusPage
  | ExchangeComOrder
  | SetPageSettings
  | ApplyWork
  | SetPageStyles
  | SetPageSettings;
