import { UPDATE_PAGE_ORDER, ADD_PAGE } from '../../constants/ActionTypes'
import { arrayMove } from 'react-sortable-hoc'
const initState = [{ id: 0, name: '页面0', comsOrder: [] }]

const pageList = (state = initState, action) => {
  switch (action.type) {
    case UPDATE_PAGE_ORDER:
      return arrayMove(action.pages, action.oldIndex, action.newIndex)
    case ADD_PAGE:
      return [
        ...state,
        {
          id: action.id,
          name: '新页面' + action.id,
          comsOrder: []
        }
      ]
    default:
      return state
  }
}

export default pageList
