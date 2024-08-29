import { UniformBlock } from "XrFrame/kanata/lib/index";

export default{
  //开启命名空间
  namespaced:true,
  //数据
  state: () => ({
    token: '',
    //用户的信息对象
    userinfo: JSON.parse(wx.getStorageSync('userinfo') || '{}')
  }),

  mutations:{
    updateUserInfo(state, userinfo){
      state.userinfo = userinfo
      this.commit('m_user/saveUserInfoToStorage')
    },
    saveUserInfoToStorage(state){
      wx.setStorageSync('userinfo', JSON.stringify(state.userinfo))
    }
  },

}