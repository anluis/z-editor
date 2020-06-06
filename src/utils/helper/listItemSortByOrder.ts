import { Coms } from '../../types/coms';

const listItemSortByOrder = (items: Coms, order: Array<number>) => {
  let result: Coms = [];
  order.forEach((e) => {
    let r = items.find((item) => item.id === e);
    if (r) {
      result.push(r);
    }
  });
  return result;
};

export default listItemSortByOrder;
