export const cdnUrl = 'http://cdn.xingstation.cn'
export const apiUrlStaging = 'http://cms.xingstation.net/api'
export const apiUrlProduction = 'http://cms.xingstation.com/api'
export const apiUrl = process.env.IS_STAGING ? apiUrlStaging : (process.env.NODE_ENV === 'production' ? apiUrlProduction : apiUrlStaging)