import { Coms } from "./coms";
import { Pages } from "./pages";
import { StatusState } from "./status";
import { Settings } from "./settings";

interface IStoreState {
  auth: {
    readonly accessToken: string
    readonly isAuthenticated: boolean
  },
  work: {
    coms: Coms,
    pages: Pages,
    settings: Settings
  },
  status: StatusState
}

export default IStoreState