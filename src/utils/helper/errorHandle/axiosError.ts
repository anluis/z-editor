import { store } from "../../../store/configureStore";
import { deleteAuth } from "../../../actions/auth";

export const handleAxiosAsyncError = (err: any) => {
  if (err.response.status === 401) {
    store.dispatch(deleteAuth())
  }
}