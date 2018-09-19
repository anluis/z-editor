const isInWechat = () => {
  return /micromessenger/i.test(navigator.userAgent)
}

export { isInWechat }
