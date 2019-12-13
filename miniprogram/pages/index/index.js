//index.js
const app = getApp()

Page({
  data: {

  },
  changeToWarehousing: function() {
    wx.navigateTo({
      url: '/pages/cloud/cloud',
    })
  },
  changeToRerecovery: function () {
    wx.navigateTo({
      url: '/pages/cloud2/cloud2',
    })
  },

  onLoad: function() {
    wx.setNavigationBarTitle({
      title: '胶水管理系统',
    })
    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#1BC3B8',
    })
  }
})