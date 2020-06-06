import { ComAction, Coms, Com } from '../../types/coms';
import {
  ADD_COM,
  UPDATE_COM,
  DELETE_COM,
  APPLY_WORK,
  CREATE_WORK,
} from '../../constants/ActionTypes';

type Action = ComAction;
type State = Coms;

const initState: Coms = [];

const updateObjectInArray = (array: State, com: Com): Coms => {
  return array.map((item) => {
    if (item.id !== com.id) {
      return item;
    }
    return {
      ...item,
      ...com,
    };
  });
};

const comsReducer = (state: State = initState, action: Action): State => {
  switch (action.type) {
    case ADD_COM:
      return state.concat([action.com]);
    case UPDATE_COM:
      return updateObjectInArray(state, action.com);
    case DELETE_COM:
      return state.filter((item) => item.id !== action.id);
    case APPLY_WORK:
      return action.work.coms;
    case CREATE_WORK:
      return initState;
    default:
      return state;
  }
};

export default comsReducer;
