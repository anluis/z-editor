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
  pageList: [
    { id: 0, name: '页面1', comsOrder: [0, 1, 2] },
    { id: 1, name: '页面2', comsOrder: [0, 1, 2] },
    { id: 2, name: '页面2', comsOrder: [0, 1, 2] }
  ],
  pageOrder: [0, 1, 2],
  status: {
    page: {
      order: [0, 1, 2],
      currentId: 0
    },
    com: {
      order: [],
      currentId: 0
    }
  }
}
