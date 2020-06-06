import { apiUrl } from '../../constants/base';
import axios from 'axios';
import { accessToken } from '../../utils/getters/auth';

export interface WorkListArgs {
  page: number;
  perPage: number;
  include?: string;
}

const workList = (args: WorkListArgs) => {
  const url = apiUrl + '/works';
  const params = {
    params: {
      ...args,
    },
    headers: {
      Authorization: accessToken(),
    },
  };
  return new Promise((resolve, reject) => {
    axios
      .get(url, params)
      .then((r) => resolve(r))
      .catch((e) => reject(e));
  });
};

export default workList;
