import { PageAction } from '../../types/pages'
import { ADD_COM, ADD_PAGE } from '../../constants/ActionTypes';
import { ComAction } from '../../types/coms';
export type State = Array<any>
export type Action = PageAction | ComAction
import { addComOrderInCurrentPage } from '../../utils/setters/works'
import { initPage } from '../../constants/pages'

const initState = [
  initPage
]

const pagesReducers = (state: State = initState, action: Action): State => {
  switch (action.type) {
    case ADD_COM:
      return addComOrderInCurrentPage(state, action.id, action.com)
    case ADD_PAGE:
      return [...state, action.page]
    default:
      return state
  }
}

export default pagesReducers