import { State } from '../../reducers/work/pagesReducer'
import { Com } from '../../types/coms'
import { Page } from '../../types/pages'
export const addComOrderInCurrentPage = (state: State, currentPageId: number, com: Com) => {
  let stateCopy = [...state]
  stateCopy.map((item: Page, index: number) => {
    if (item.id === currentPageId) {
      item.order = item.order.concat([com.id])
    }
  })
  return stateCopy
}