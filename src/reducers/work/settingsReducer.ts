
import { UPDATE_SETTINGS } from '../../constants/ActionTypes'
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
    default:
      return state
  }
}

export default settingsReducer