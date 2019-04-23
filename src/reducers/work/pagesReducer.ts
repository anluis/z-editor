import { PageAction } from '../../types/pages'
type State = Array<any>
type Action = PageAction

const initPageItem = {
  id: 0,
  order: [],
  name: '',
  styles: {
    width: 375,
    height: 667
  }
}

const initState = [
  initPageItem
]

const pagesReducers = (state: State = initState, action: Action): State => {
  switch (action.type) {
    default:
      return state
  }
}

export default pagesReducers