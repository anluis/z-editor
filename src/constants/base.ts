export const cdnUrl = 'http://cdn.xingstation.cn'
export const apiUrlStaging = 'http://cms.xingstation.net/api'
export const apiUrlProduction = 'http://webcms.xingstation.com/api'
export const wxApiUrlStaging = 'http://sapi.xingstation.net/api'
export const wxApiUrlProduction = 'http://sapi.xingstation.com/api'
export const apiUrl = process.env.REACT_APP_STAGING ? apiUrlStaging : (process.env.NODE_ENV === 'production' ? apiUrlProduction : apiUrlStaging)
export const wxApiUrl = process.env.REACT_APP_STAGING ? wxApiUrlStaging : (process.env.NODE_ENV === 'production' ? wxApiUrlProduction : wxApiUrlStaging)