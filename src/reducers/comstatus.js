// 当前选中组件状态
import { SET_CURRENT_ID, UPDATE_STYLES } from '../constants/ActionTypes'
const comstatus = (state = null, action) => {
  switch (action.type) {
    case SET_CURRENT_ID:
      return {
        style: {
          ...action.style
        },
        id: action.id,
        text: action.text
      }
    case UPDATE_STYLES:
      return {
        style: {
          ...action.style
        },
        id: action.id,
        text: action.text
      }
    default:
      return state
  }
}

export default comstatus
