import axios from 'axios'
import { apiUrl } from '../../constants/base';
import { accessToken } from '../../utils/getters/auth'
import { Material } from '../../types/materials';

export interface MaterialArgs {
  page: number
  perPage: number
  type?: string
}

const materials = (args: MaterialArgs) => {
  const url = apiUrl + '/materials/'
  const params = {
    headers: {
      Authorization: accessToken()
    },
    params: {
      page: args.page,
      perPage: args.perPage,
      type: args.type
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

// export type MaterialPostArgs = Material

export const materialsPost = (args: any) => {
  const url = apiUrl + '/materials'
  const config = {
    headers: {
      Authorization: accessToken()
    }
  }
  return new Promise((resolve, reject) => {
    axios.post(url, args, config).then(r => resolve(r)).catch(e => reject(e))
  })
}
export default materials