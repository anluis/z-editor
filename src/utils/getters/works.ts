import IStoreState from "../../types/IStoreState";
import { Coms, Com } from "../../types/coms";
import { Page } from '../../types/pages'

export const getComsByCurrentPageId = (state: IStoreState): Coms => {
  const { coms } = state.work.present
  const currentPage = getCurrentPage(state)
  if (!currentPage) {
    return []
  }
  const filterResult = coms.filter(com => { return currentPage.order.includes(com.id) })
  return filterResult
}

export const getCurrentComById = (state: IStoreState): Com | undefined => {
  const { currentComId } = state.status
  const Coms = getComsByCurrentPageId(state)
  return Coms.find(item => item.id === currentComId)
}

export const getCurrentPage = (state: IStoreState): Page | undefined => {
  const { currentPageId } = state.status
  const { pages } = state.work.present
  const currentPage = pages.find(pageItem => pageItem.id === currentPageId) ? pages.find(pageItem => pageItem.id === currentPageId) : pages[0]
  return currentPage
}