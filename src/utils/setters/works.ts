import { State } from '../../reducers/work/pagesReducer'
import { Com } from '../../types/coms'
export const addComOrderInCurrentPage = (state: State, currentPageId: number, com: Com) => {
  const findResult = state.findIndex(item => item.id === currentPageId)
  if (findResult === -1) {
    return state
  } else {
    state[findResult].order.push(com.id)
    return state
  }
}