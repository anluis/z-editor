// 参考Store结构
const myWork = {
  comList: [
    {
      id: 0,
      attribute: {
        width: 100,
        height: 100,
        x: 100,
        y: 100
      }
    }
  ],
  layers: [
    {
      pageId: 0
    }
  ],
  pageList: [
    { id: 0, name: '页面1', order: [0, 1, 2] },
    { id: 1, name: '页面2', order: [0, 1, 2] },
    { id: 2, name: '页面2', order: [0, 1, 2] }
  ],
  status: {
    // no need pages order anymore
    page: {
      current: 0
    },
    // no need coms order anymore, find in pageList
    com: {
      current: 0
    }
  }
}
export default myWork
