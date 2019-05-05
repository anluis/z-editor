
import { UPDATE_SETTINGS, APPLY_WORK } from '../../constants/ActionTypes'
import { Settings, SettingsAction } from '../../types/settings'

type State = Settings
type Action = SettingsAction

const initState = {
  title: '',
  desc: ''
}

const settingsReducer = (state: State = initState, action: Action): State => {
  switch (action.type) {
    case UPDATE_SETTINGS:
      return {
        ...state,
        desc: action.desc,
        title: action.title
      }
    case APPLY_WORK:
      return {
        ...state,
        desc: action.work.settings.desc,
        title: action.work.settings.title
      }
    default:
      return state
  }
}

export default settingsReducer