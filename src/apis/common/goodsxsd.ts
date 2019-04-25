import axios from 'axios'

interface responseArgs {
  image: string
}

const goodsxsd = (id: string): Promise<responseArgs> => {
  const requestUrl = 'http://xingstation.cn/client/goodsxsd/?api=json&id='
  return new Promise((resolve, reject) => {
    axios
      .get(requestUrl + id)
      .then(response => {
        resolve(response.data.results)
      })
      .catch(err => {
        reject(err)
      })
  })
}

export default goodsxsd
