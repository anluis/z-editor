import axios from 'axios'
import { apiUrl } from '../../constants/base';

interface Args {
  workId: string
  workPage: number
}

const work = (args: Args) => {
  const url = apiUrl + '/works/' + args.workId
  const params = {
    params: {
      workPage: args.workPage,
    }
  }
  return new Promise((resolve, reject) => {
    axios
      .get(url, params)
      .then(
        r => {
          resolve(r)
        }
      )
      .catch(e => {
        reject(e)
      })
  })
}

export default work