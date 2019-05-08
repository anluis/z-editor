import { State } from '../../reducers/work/pagesReducer'
import { Com } from '../../types/coms'
import { Page, PageSettings } from '../../types/pages'
import { cloneDeep } from 'lodash'
import arrayMove from 'array-move';

export const addComOrderInCurrentPage = (state: State, currentPageId: number, com: Com) => {
  let stateCopy = cloneDeep(state)
  stateCopy.map((item: Page, index: number) => {
    if (item.id === currentPageId) {
      item.order = item.order.concat([com.id])
    }
  })
  return stateCopy
}

export const removeComOrderInCurrentPage = (state: State, targetPageId: number, comId: number, ) => {
  let stateCopy = cloneDeep(state)
  stateCopy.map((item: Page, pageIndex) => {
    if (item.id === targetPageId) {
      // item.order.filter(n => n !== comId)
      stateCopy[pageIndex].order = item.order.filter(n => n !== comId)
    }
  })
  return stateCopy
}

export const exchangeOrderInPage = (state: State, targetPageId: number, oldComId: number, newComId: number) => {
  let stateCopy = cloneDeep(state)
  let afterMove = stateCopy
  stateCopy.map((item: Page, pageIndex) => {
    if (item.id === targetPageId) {
      const oldIndex = stateCopy[pageIndex].order.findIndex(e => e === oldComId)
      const newIndex = stateCopy[pageIndex].order.findIndex(e => e === newComId)
      afterMove[pageIndex].order = arrayMove(stateCopy[pageIndex].order, oldIndex, newIndex)
    }
  })
  return afterMove
}

export const setPageSettingsByPageId = (state: State, pageSettings: PageSettings, pageId: number) => {
  let stateCopy = cloneDeep(state)
  stateCopy.map(item => {
    if (item.id === pageId) {
      item.settings = pageSettings
    }
  })
  return stateCopy
}