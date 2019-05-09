import { apiUrl } from "../../constants/base";
import { accessToken } from "../../utils/getters/auth";
import axios from 'axios'
import { Work } from "../../types/IStoreState";

export type WorkPublishArgs = Work

export const workPublish = (args: WorkPublishArgs) => {
  const url = apiUrl + '/works'
  const config = {
    headers: {
      Authorization: accessToken(),
      "Content-Type": 'application/json'
    }
  }
  return new Promise((resolve, reject) => {
    axios
      .post(url, args, config)
      .then(r => {
        resolve(r)
      })
      .catch(e => {
        reject(e)
      })
  })
}

export default workPublish
