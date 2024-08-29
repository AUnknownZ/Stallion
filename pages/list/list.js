// pages/list/list.js
Page({

  /**
   * Page initial data
   */
  data: {
    imgSrc : "/images/pic.png"
  },
  gotowxfootballpage(){
    wx.navigateTo({
      url: '/pages/football/index',
    })
  },
  gotowxbasketballpage(){
    wx.navigateTo({
      url: '/pages/basketball/index',
    })
  },
  gotowxvolleyballpage(){
    wx.navigateTo({
      url: '/pages/volleyball/index',
    })
  },
  navigateToAdmin() {
    wx.navigateTo({
      url: '/pages/admin/index'
    });
  },
  /**
   * Lifecycle function--Called when page load
   */
  onLoad(options) {

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady() {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow() {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide() {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload() {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh() {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom() {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage() {

  }
});
  