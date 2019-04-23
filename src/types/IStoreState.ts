import { Coms } from "./coms";
import { Pages } from "./pages";
import { StatusState } from "./status";

interface IStoreState {
  auth: {
    readonly accessToken: string
    readonly isAuthenticated: boolean
  },
  work: {
    coms: Coms,
    pages: Pages,
  },
  status: StatusState
}

export default IStoreState