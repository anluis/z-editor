// 参考Store结构
const aWork = {
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
    page: {
      order: [0, 1, 2],
      current: 0
    },
    com: {
      order: [],
      current: 0
    }
  }
}
