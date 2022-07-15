// 引入服务器配置
import config from './config'

export default (url,data = {},method= 'get') => {
  return new Promise((resolve,reject)=>{
    wx.request({
      url: config.mobileHost + url,
      method,
      data,
      success: (res)=>{
        resolve(res.data)
      },
      fail: (err)=>{
        reject(err)
      }
    })
  })
}