// app.js 
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    wx.cloud.init()
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo: null
  },
  onShow: function () {
        // 检查登录状态
        this.checkLogin();
      },
      checkLogin: function () {
        // 获取本地存储的登录状态
        const loginStatus = wx.getStorageSync('loginStatus');
        if (!loginStatus) {
          // 如果未登录，则调用登录接口
          this.login();
        }
      },
      login: function () {
        // 调用 wx.login 接口获取登录凭证 code
        wx.login({
          success: res => {
            if (res.code) {
              // 调用 wx.getUserInfo 接口获取用户信息
              wx.getUserInfo({
                success: userInfoRes => {
                  // 登录成功，将登录状态存储到本地
                  wx.setStorageSync('loginStatus', true);
                  // 存储用户信息到本地
                  wx.setStorageSync('userInfo', userInfoRes.userInfo);
                },

                fail: () => {
                  // 登录失败，提示用户
                  
                  wx.showToast({
                    title: '登录失败，请重试',
                    icon: 'none'
                  });
                }
              });
            } else {
              // 登录失败，提示用户
              wx.showToast({
                title: '登录失败，请重试',
                icon: 'none'
              });
            }
          }
        });
      }

})
