import { ADD_PAGE, DELETE_PAGE, UPDATE_PAGE, FOCUS_PAGE } from '../constants/ActionTypes'

export type Pages = Array<Page>

export interface PageStyles {
  width: number
  height: number
}

export interface PageSettings {
  wechatShareTitle: string
  wechatShareDescription: string
  wechatShareIcon: string
}

export interface Page {
  id: number
  order: Array<number>
  name: string
  styles: PageStyles
  settings: PageSettings
}

interface AddPageAction {
  type: typeof ADD_PAGE,
  id: number
}

interface DeletePage {
  type: typeof DELETE_PAGE,
  id: number
}

interface UpdatePage {
  type: typeof UPDATE_PAGE,
  page: Page
}

interface FocusPage {
  type: typeof FOCUS_PAGE,
  id: number
}

export type PageAction = AddPageAction | DeletePage | UpdatePage | FocusPage