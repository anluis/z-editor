import { PageAction, Pages } from '../../types/pages'
import {
  ADD_COM,
  ADD_PAGE,
  DELETE_COM,
  EXCHANGE_COM_ORDER,
  DELETE_PAGE,
  SET_PAGE_SETTINGS,
  APPLY_WORK
} from '../../constants/ActionTypes';
import { ComAction } from '../../types/coms';
export type State = Pages
export type Action = PageAction | ComAction
import {
  addComOrderInCurrentPage,
  removeComOrderInCurrentPage,
  exchangeOrderInPage,
  setPageSettingsByPageId
} from '../../utils/setters/works'
import { initPage } from '../../constants/pages'

const initState = [
  initPage
]

const pagesReducers = (state: State = initState, action: Action): State => {
  switch (action.type) {
    case APPLY_WORK:
      return action.work.pages
    case ADD_COM:
      return addComOrderInCurrentPage(state, action.targetPageId, action.com)
    case DELETE_COM:
      return removeComOrderInCurrentPage(state, action.targetPageId, action.id)
    case ADD_PAGE:
      return state.concat([action.page])
    case DELETE_PAGE:
      return state.filter(item => item.id !== action.id)
    case EXCHANGE_COM_ORDER:
      return exchangeOrderInPage(state, action.targetPageId, action.oldComId, action.newComId)
    case SET_PAGE_SETTINGS:
      return setPageSettingsByPageId(state, action.pageSettings, action.id)
    default:
      return state
  }
}

export default pagesReducers