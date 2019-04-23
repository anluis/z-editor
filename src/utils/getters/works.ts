import IStoreState from "../../types/IStoreState";
import { Coms } from "../../types/coms";

export const getComsByCurrentPageId = (state: IStoreState): Coms => {
  const { currentPageId } = state.status
  const { pages, coms } = state.work
  const currentPage = pages.find(pageItem => pageItem.id === currentPageId)
  if (!currentPage) {
    return []
  }
  const filterResult = coms.filter(com => { currentPage.order.includes(com.id) })
  return filterResult
}