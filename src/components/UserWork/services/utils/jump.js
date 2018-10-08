const Jump = link => {
  let reUrl = /^((ht|f)tps?):\/\/([\w-]+(\.[\w-]+)*\/?)+(\?([\w\-.,@?^=%&:/~+#]*)+)?$/
  if (reUrl.test(link)) {
    window.location.href = link
  } else if (link !== '') {
    window.location.href = 'pageId?page=' + link
  }
}
export default Jump
