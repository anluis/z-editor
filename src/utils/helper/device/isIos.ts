const u = navigator.userAgent
const isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
export default isiOS
