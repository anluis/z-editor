import {
  FETCH_TEMPLATELIST_BEGIN,
  FETCH_TEMPLATELIST_SUCCESS,
  FETCH_TEMPLATELIST_FAILURE
} from '../constants'

const initialState = {
  items: [],
  loading: false,
  error: null
}

const templateList = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TEMPLATELIST_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      }
    case FETCH_TEMPLATELIST_SUCCESS:
      return {
        ...state,
        loading: false,
        item: action.payload.items
      }
    case FETCH_TEMPLATELIST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: []
      }
    default:
      return state
  }
}

export default templateList
