import { Coms } from "./coms";
import { Pages } from "./pages";
import { StatusState } from "./status";
import { Settings } from "./settings";


export interface Work {
  coms: Coms
  pages: Pages
  settings: Settings
  _id?: string
}

interface IStoreState {
  auth: {
    readonly accessToken: string
    readonly isAuthenticated: boolean
    wechatShareUrl: string
  },
  work: {
    past: Array<Work>
    present: Work
    future: Array<Work>
  }
  status: {
    past: Array<StatusState>
    present: StatusState
    future: Array<StatusState>
  }
}

export default IStoreState