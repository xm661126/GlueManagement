// miniprogram/pages/cloud/cloud.js
const db = wx.cloud.database();
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    glueType: '',
    materialName: '',
    number: 0,

  },
  glueTypeInput: function(e1) {
    console.log(e1)
    glueType: e1.detail.value
  },
  materialInput: function(e2) {
    console.log(e2)
    materialName: e2.detail.value
  },
  numberInput: function(e3) {
    console.log(e3)
    number: e3.detail.value
  },
  cancel() {

  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    this.popup = this.selectComponent("#popup");
  },
  showPopup() {
    this.popup.showPopup();
  },
  _error() {
    console.log('你点击了取消');
    this.popup.hidePopup();
  },
  _success() {
    console.log('你点击了确定');
    this.popup.hidePopup();
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})