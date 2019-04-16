import { ComAction } from "../../types/coms";

type Action = ComAction
type State = Array<any>

const initState: State = []

const updateObjectInArray = (
  array: Array<any>,
  action: Action
): Array<any> => {
  return array.map(item => {
    if (item.id !== action.id) {
      return item
    }
    return {
      ...item,
      ...action.payload
    }
  })
}

const comsReducer = (state: State = initState, action: Action): State => {
  switch (action.type) {
    default:
      return state
  }
}

export default comsReducer