import { ADD_PAGE, DELETE_PAGE, UPDATE_PAGE, FOCUS_PAGE, EXCHANGE_COM_ORDER } from '../constants/ActionTypes'

export interface PageStyles {
  width: number
  height: number
}

export interface PageSettings {
  wechatShareTitle?: string
  wechatShareDescription?: string
  wechatShareIcon?: string
}

export interface Page {
  id: number
  order: Array<number>
  name: string
  styles: PageStyles
  settings: PageSettings
}

export type Pages = Array<Page>

interface AddPageAction {
  type: typeof ADD_PAGE,
  page: Page
}

interface DeletePage {
  type: typeof DELETE_PAGE
  id: number
  nextPageId: number
}

interface UpdatePage {
  type: typeof UPDATE_PAGE
  page: Page
}

interface FocusPage {
  type: typeof FOCUS_PAGE
  id: number
}

interface ExchangeComOrder {
  type: typeof EXCHANGE_COM_ORDER,
  targetPageId: number,
  oldComId: number,
  newComId: number
}

export type PageAction = AddPageAction | DeletePage | UpdatePage | FocusPage | ExchangeComOrder