import { store } from '../../store/configureStore';

export const accessToken = () => {
  const state = store.getState();
  return 'Bearer ' + state.auth.accessToken;
};
