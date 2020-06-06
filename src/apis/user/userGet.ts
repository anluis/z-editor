import axios from 'axios';
import { apiUrl } from '../../constants/base';
import { accessToken } from '../../utils/getters/auth';

export const user = () => {
  const url = apiUrl + '/user';
  const params = {
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
