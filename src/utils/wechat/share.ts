// @ts-ignore
import wx from 'weixin-js-sdk';
import axios from 'axios';
import isiOS from '../helper/device/isIos';
import { wxApiUrl as apiUrl } from '../../constants/base';

const share = (shareObject: any) => {
  // utm_term 为分享统计标记
  let link = '';

  if (shareObject.link) {
    link =
      shareObject.link.indexOf('?') > -1
        ? shareObject.link + `&share_at=${Date.now()}&utm_term=wechat_share`
        : shareObject.link + `?share_at=${Date.now()}&utm_term=wechat_share`;
  } else {
    link =
      window.location.href.indexOf('?') > -1
        ? window.location.href + `&share_at=${Date.now()}&utm_term=wechat_share`
        : window.location.href +
          `?share_at=${Date.now()}&utm_term=wechat_share`;
  }
  shareObject.link = link;
  // 显示所有功能接口
  // wx.showAllNonBaseMenuItem()

  wx.onMenuShareAppMessage(shareObject);
  wx.onMenuShareTimeline(shareObject);
  wx.onMenuShareQQ(shareObject);
  wx.onMenuShareWeibo(shareObject);
  wx.onMenuShareQZone(shareObject);
};

const forbidden = () => {
  // 禁止分享
  wx.hideOptionMenu();
  wx.hideMenuItems({
    menuList: [
      'onMenuShareAppMessage',
      'onMenuShareTimeline',
      'onMenuShareQQ',
      'onMenuShareWeibo',
      'onMenuShareQZone',
    ],
  });
};

// 微信扫一扫
const qRCode = (scanQrCodeObject: any) => {
  wx.scanQRCode(scanQrCodeObject);
};

const $wechat = (weixin_url: string) => {
  return new Promise((resolve, reject) => {
    let requestUrl = apiUrl + '/wx/officialAccount/sign';
    // 仅iOS设备需要传入
    let params = {};
    if (weixin_url && isiOS) {
      params = {
        params: {
          weixin_url: encodeURIComponent(weixin_url.split('#')[0]),
        },
      };
    }
    axios
      .get(requestUrl, params)
      .then((response) => {
        // sign返回格式
        let r = response.data.data;
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
            'hideOptionMenu',
            'scanQRCode',
          ],
        });
        wx.ready(() => {
          // 配置 wx.config 成功
          resolve({
            wx,
            share,
            forbidden,
            qRCode,
          });
        });
      })
      .catch((e) => {
        reject(e);
      });
  });
};

export { $wechat };
