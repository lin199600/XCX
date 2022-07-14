import request from '../../utils/request'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    bannerList: [],  //轮播图数据
    recommendList: [], //推荐歌曲数据
    topList: []  //排行榜数据
  },

  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad(options) {
    // 获取轮播图数据
    let banner = await request('/banner',{type: 1})
    if(banner.code === 200){
      this.setData({
        bannerList : banner.banners
      })
    }

    // 推荐歌曲数据
    let recommend = await request('/personalized', {limit: 10})
    if(recommend.code === 200){
      this.setData({
        recommendList: recommend.result
      })
    }

    // 排行榜数据
    let index = 0
    let resultArr = []
    while(index<5){
      let top = await request('/top/list', {idx: index++})
      let topItem = {name: top.playlist.name, tracks: top.playlist.tracks.slice(0,3)}
      resultArr.push(topItem)
      this.setData({
        topList: resultArr
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})