// @flow
const listItemSortByOrder = (items: Array<any>, order: Array<number>) => {
  let result = []
  order.forEach(e => {
    let r = items.find(item => item.id === e)
    if (r !== undefined) {
      result.push(r)
    }
  })
  return result
}
export { listItemSortByOrder }
