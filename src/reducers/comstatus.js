// 当前选中组件状态
import { FOCUS_COM } from '../constants/ActionTypes'
const comstatus = (state = null, action) => {
  switch (action.type) {
    case FOCUS_COM:
      state = action.id
      return state
    default:
      return state
  }
}

export default comstatus
