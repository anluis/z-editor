import axios from 'axios'
import { apiUrl } from "../../constants/base";
import { accessToken } from "../../utils/getters/auth";
import { Work } from "../../types/IStoreState";

export interface WorkPublishArgs {
  work: Work
  id: string
}

export const workUpdate = (args: WorkPublishArgs) => {
  const url = apiUrl + '/works/'
  const config = {
    _id: args.id,
    headers: {
      Authorization: accessToken()
    }
  }
  return new Promise((resolve, reject) => {
    axios
      .put(url, args, config)
      .then(r => {
        resolve(r)
      })
      .catch(e => {
        reject(e)
      })
  })
}

export default workUpdate
