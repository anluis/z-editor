import axios from 'axios';
import { apiUrl } from '../../constants/base';
import { accessToken } from '../../utils/getters/auth';
import { Work } from '../../types/IStoreState';

export type WorkPublishArgs = Work;

export const workUpdate = (latestWorkId: string, args: WorkPublishArgs) => {
  const url = apiUrl + `/works/${latestWorkId}`;
  const config = {
    headers: {
      Authorization: accessToken(),
    },
  };
  return new Promise((resolve, reject) => {
    axios
      .put(url, args, config)
      .then((r) => {
        resolve(r);
      })
      .catch((e) => {
        reject(e);
      });
  });
};

export default workUpdate;
