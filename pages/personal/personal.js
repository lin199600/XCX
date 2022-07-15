let startY = 0   //手指起始的Y坐标
let moveY = 0    //手指移动的Y坐标
let moveDistance = 0   //手指移动的距离


Page({

  /**
   * 页面的初始数据
   */
  data: {
    coverTransform: 'translateY(0)',   //移动距离
    coveTransition: '',   //过度动画
    userInfo: {}
  },
  // 下拉会员卡片的回调
  // 下拉开始
  handleTouchStart(event) {
    startY = event.touches[0].clientY
    this.setData({
      coveTransition: ''  //滑动开始清除过度
    })
  },
  // 下拉中
  handleTouchMove(event) {
    moveY = event.touches[0].clientY
    moveDistance = moveY - startY
    if (moveDistance <= 0) {
      return
    }
    if (moveDistance >= 80) {
      moveDistance = 80
    }
    this.setData({
      coverTransform: `translateY(${moveDistance}rpx)`
    })
  },
  // 下拉结束
  handleTouchEnd() {
    this.setData({
      coverTransform: `translateY(0)`,
      coveTransition: 'transform .5s linear'
    })
  },
  // 点击头像跳转到登录界面
  toLogin() {
    wx.navigateTo({
      url: '/pages/login/login',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // 读取本地存储的用户数据
    let userInfo = JSON.parse(wx.getStorageSync('userInfo'))
    if(userInfo){
      this.setData({
        userInfo
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