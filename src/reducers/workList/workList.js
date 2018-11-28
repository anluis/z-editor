// @flow
import {
  FETCH_WORKS_BEGIN,
  FETCH_WORKS_SUCCESS,
  FETCH_WORKS_FAILURE
} from '@/constants/ActionTypes'
type Action = FETCH_WORKS_BEGIN | FETCH_WORKS_SUCCESS | FETCH_WORKS_FAILURE
type State = Array<Object>

const initState = []

const workList = (state: State = initState, action: Action): State => {
  switch (action.type) {
    default:
      return state
  }
}

export default workList
