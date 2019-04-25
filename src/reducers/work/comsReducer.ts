import { ComAction, Coms, Com } from "../../types/coms";
import { ADD_COM, UPDATE_COM } from "../../constants/ActionTypes";

type Action = ComAction
type State = Coms

const initState: Coms = []

const updateObjectInArray = (
  array: State,
  com: Com
): Coms => {
  return array.map(item => {
    if (item.id !== com.id) {
      return item
    }
    return {
      ...item,
      ...com
    }
  })
}

const comsReducer = (state: State = initState, action: Action): State => {
  switch (action.type) {
    case ADD_COM:
      return [...state, action.com]
    case UPDATE_COM:
      return updateObjectInArray(state, action.com)
    default:
      return state
  }
}

export default comsReducer