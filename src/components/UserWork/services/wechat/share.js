import wx from 'weixin-js-sdk'
import axios from 'axios'

const share = shareObject => {
  // utm_term 为分享统计标记
  let link = ''

  if (shareObject.link) {
    link =
      shareObject.link.indexOf('?') > -1
        ? shareObject.link + `&share_at=${Date.now()}&utm_term=wechat_share`
        : shareObject.link + `?share_at=${Date.now()}&utm_term=wechat_share`
  } else {
    link =
      window.location.href.indexOf('?') > -1
        ? window.location.href + `&share_at=${Date.now()}&utm_term=wechat_share`
        : window.location.href + `?share_at=${Date.now()}&utm_term=wechat_share`
  }
  shareObject.link = link
  // 显示所有功能接口
  // wx.showAllNonBaseMenuItem()

  wx.onMenuShareAppMessage(shareObject)
  wx.onMenuShareTimeline(shareObject)
  wx.onMenuShareQQ(shareObject)
  wx.onMenuShareWeibo(shareObject)
  wx.onMenuShareQZone(shareObject)
}

const forbidden = () => {
  // 禁止分享
  wx.hideOptionMenu()
  wx.hideMenuItems({
    menuList: [
      'onMenuShareAppMessage',
      'onMenuShareTimeline',
      'onMenuShareQQ',
      'onMenuShareWeibo',
      'onMenuShareQZone'
    ]
  })
}

const $wechat = () => {
  return new Promise((resolve, reject) => {
    let requestUrl = process.env.WX_API + '/wx/officialAccount/sign'
    axios
      .get(requestUrl)
      .then(response => {
        // sign返回格式
        let r = response.data.data
        wx.config({
          debug: false,
          appId: r.appId,
          timestamp: r.timestamp,
          nonceStr: r.nonceStr,
          signature: r.signature,
          jsApiList: [
            'onMenuShareAppMessage',
            'onMenuShareTimeline',
            'onMenuShareQQ',
            'onMenuShareWeibo',
            'onMenuShareQZone',
            'hideMenuItems',
            'hideOptionMenu'
          ]
        })
        wx.ready(() => {
          // 配置 wx.config 成功
          resolve({
            wx,
            share,
            forbidden
          })
        })
      })
      .catch(e => {
        reject(e)
      })
  })
}

export { $wechat }
