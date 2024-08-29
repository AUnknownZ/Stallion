// pages/user-center/index.js
Page({

  /**
   * Page initial data
   */
  data: {
    hasUserInfo:false,
    userInfo: {}
  },
  gotowxlogin(){
    wx.navigateTo({
      url: '/pages/login/index',
    })
  },
  gotoReward(){
    wx.navigateTo({
      url: '/pages/reward/index',
    })
  },
  gotoTeam(){
    wx.navigateTo({
      url: '/pages/personal_team/index',
    })
  },
  getOpenId() {
    wx.showLoading({
      title: '',
    });
    wx.cloud
      .callFunction({
        name: 'quickstartFunctions',
        data: {
          type: 'getOpenId',
        },
      })
      .then((resp) => {
        this.setData({
          haveGetOpenId: true,
          openId: resp.result.openid,
        });
        wx.hideLoading();
      })
      .catch((e) => {
        this.setData({
          showUploadTip: true,
        });
        wx.hideLoading();
      });
  },

  gotoWxCodePage() {
    wx.navigateTo({
      url: '/pages/exampleDetail/index?envId=${envList?.[0]?.envId}&type=getMiniProgramCode',
    });
  },
  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function() {
    //检查用户是否授权
    
    wx.getSetting({
      success:(res) => {
        if (res && res.authSetting['scope.userInfo']){
          //已授权，获取用户信息
          const self = this; //保存对 this 的引用
          wx.getUserInfo({
            success: function(res){
              console.log(res.userInfo)
              self.setData({
                hasUserInfo: true,
                userInfo:res.userInfo
              });
            }
          });
        } else if (!res){
          console.log('res undefined')
        }
        else{
          console.log('The user has denied authentication')
        }
      }
    });
  },
  

  /**
   * Lifecycle function--Called when page is initially rendered
   */

  /**
   * Lifecycle function--Called when page show
   */
  onShow() {
    //获取本地储存的登录状态
    this.setData({
      loginStatus: wx.getStorageSync('loginStatus')
    });
  },

  onGetUserInfo:function(e){
    //用户点击一键登录按钮后获取用户信息
    //检查用户是否授权
    wx.getSetting({
      success:(res) => {
        if (res && res.authSetting['scope.userInfo']){
          //已授权，获取用户信息
          const self = this;
          wx.getUserInfo({
            success: function(res){
              console.log(res.userInfo)
              self.setData({
                hasUserInfo: true,
                userInfo:res.userInfo
              });
            }
          });
        } else if (!res){
          console.log('res undefined')
        }
        else if (!res.authSetting['scope.userInfo']){
          wx.authorize({
            scope:'scope.userInfo',
            success(){
              wx.getUserInfo(),
              this.setData({
                hasUserInfo: true,
                userInfo:res.userInfo
              })
              
            }
            })
        }
        else{
          console.log('The user has denied authentication')
        }
      }
    });
    if (e.detail.userInfo){
      console.log(e.detail.userInfo)
      this.setData({
        hasUserInfo:true,
        userInfo:e.detail.userInfo
      });
    }
    else{
      console.log('The user denies the authorization');
    }
  },
  logout(){
    this.setData({
      hasUserInfo: false
    });

    wx.showToast({
      title:'Logged out',
      icon:'success',
      duration: 2000
    });


  }
})