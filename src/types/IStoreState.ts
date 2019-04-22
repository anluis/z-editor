import { Coms } from "./coms";
import { Pages } from "./pages";
import { Status } from "./status";

interface IStoreState {
  auth: {
    readonly accessToken: string
    readonly isAuthenticated: boolean
  },
  work: {
    coms: Coms,
    pages: Pages,
    status: Status
  }
}

export default IStoreState