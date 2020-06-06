import {
  UPDATE_SETTINGS,
  APPLY_WORK,
  CREATE_WORK,
} from '../../constants/ActionTypes';
import { Settings, SettingsAction } from '../../types/settings';

type State = Settings;
type Action = SettingsAction;

const initState = {
  title: '',
  desc: '',
};

const settingsReducer = (state: State = initState, action: Action): State => {
  switch (action.type) {
    case UPDATE_SETTINGS:
      return {
        ...state,
        desc: action.desc,
        title: action.title,
      };
    case APPLY_WORK:
      return {
        ...state,
        desc: action.work.settings.desc,
        title: action.work.settings.title,
      };
    case CREATE_WORK:
      return {
        ...initState,
      };
    default:
      return state;
  }
};

export default settingsReducer;
