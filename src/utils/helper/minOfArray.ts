const minOfArray = (arr: Array<number>) => {
  if (arr.length === 0) {
    return 0
  }
  return Math.min.apply(Math, arr)
}

export default minOfArray