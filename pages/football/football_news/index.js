// pages/football/football_news/index.js
Page({

  /**
   * Page initial data
   */
  data: {
    news: [
      {
        title: 'Pair of Wins for the Stallions Football in the Semi-Finals',
        date: '2023-05-10',
        url: 'https://mp.weixin.qq.com/s/MXCEWJTGr0eYJKtHudSlbQ',
        description: 'The Stallions football team secured a pair of wins in the semi-finals, advancing to the finals with a stellar performance.'
      }
      // Add more news as needed
    ]
  },

  // Method to navigate to article link
  gotolink(event) {
    const url = event.currentTarget.dataset.url;
    wx.navigateTo({
      url: `/pages/webview/webview?url=${encodeURIComponent(url)}`
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
   * Lifecycle function--Called when page show() {

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
/** 
Page({

  data: {
    article1: "https://mp.weixin.qq.com/s/MXCEWJTGr0eYJKtHudSlbQ"
  },
  gotolink(){
    wx.navigateTo({
      url:"/pages/webview/webview?url=https://mp.weixin.qq.com/s/MXCEWJTGr0eYJKtHudSlbQ"
      });
  }
});
*/