import { ADD_PAGE, DELETE_PAGE, UPDATE_PAGE, FOCUS_PAGE } from '../constants/ActionTypes'

export interface Pages {
  [propNames: string]: Page
}

export type Page = {
  id: number
  order: Array<number>
  name: string
  width: number
  height: number
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