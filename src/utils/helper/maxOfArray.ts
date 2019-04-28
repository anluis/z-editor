const maxOfArray = (arr: Array<number>) => {
  if (arr.length === 0) {
    return 0
  }
  return Math.max.apply(Math, arr)
}

export default maxOfArray