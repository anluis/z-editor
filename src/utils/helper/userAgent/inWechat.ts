const isInWechat = (): boolean => {
  return /micromessenger/i.test(navigator.userAgent);
};

export default isInWechat;
