// @flow
import {
  FOCUS_COM,
  ADD_COM,
  UPDATE_PAGE_ORDER,
  ADD_PAGE,
  FOCUS_PAGE,
  UPDATE_COM_ZINDEX,
  SWITCH_PAGE_SETTINGS,
  UPDATE_PROJECT_SETTING,
  CHANGE_WORKSETTING_VISIBLE
} from '../../../constants/ActionTypes'
import { arrayMove } from 'react-sortable-hoc'

type State = {
  +com: { current: number | null },
  +page: { current: number, order: Array<number> },
  +shouldSettingsShow: boolean
}
type Action =
  | FOCUS_COM
  | ADD_COM
  | UPDATE_PAGE_ORDER
  | ADD_PAGE
  | FOCUS_PAGE
  | UPDATE_COM_ZINDEX
  | SWITCH_PAGE_SETTINGS
  | UPDATE_PROJECT_SETTING

const initState = {
  page: {
    order: [0],
    current: 0
  },
  com: {
    current: null
  },
  project: {
    desc: '',
    title: '',
    name: ''
  },
  shouldSettingsShow: false,
  workSettings: {
    status: false,
    payload: {
      author: '',
      name: '',
      desc: ''
    }
  }
}

const status = (state: State = initState, action: Action): State => {
  switch (action.type) {
    case ADD_COM:
      return {
        ...state,
        ...{
          com: {
            current: action.id
          },
          page: {
            ...state.page
          }
        }
      }
    case FOCUS_COM:
      state.com.current = action.id
      return state
    case UPDATE_COM_ZINDEX:
      state.com.current = action.chooseComId
      return state
    case UPDATE_PAGE_ORDER:
      return {
        ...state,
        ...{
          page: {
            order: arrayMove(
              state.page.order,
              action.oldIndex,
              action.newIndex
            ),
            current: state.page.current
          }
        }
      }
    case ADD_PAGE:
      return {
        ...state,
        ...{
          page: {
            order: state.page.order.concat([action.id]),
            current: action.id
          },
          com: {
            current: null
          }
        }
      }
    case FOCUS_PAGE:
      return {
        ...state,
        ...{
          com: {
            current: null
          },
          page: {
            order: state.page.order,
            current: action.id
          }
        }
      }
    case SWITCH_PAGE_SETTINGS:
      return {
        ...state,
        ...{
          ...state.com,
          ...state.page,
          shouldSettingsShow: action.shouldSettingsShow
        }
      }
    case UPDATE_PROJECT_SETTING:
      return {
        ...state,
        ...{
          project: {
            desc: action.settings.desc,
            title: action.settings.title,
            name: action.settings.name
          }
        }
      }
    case CHANGE_WORKSETTING_VISIBLE:
      return {
        ...state,
        ...{
          workSettings: {
            visible: action.visible,
            payload: action.payload
          }
        }
      }
    default:
      return state
  }
}

export default status
