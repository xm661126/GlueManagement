// miniprogram/pages/cloud/cloud.js
const db = wx.cloud.database();
var app = getApp()
data: {
  glueType: ''
  materialName: ''
  number: 0
}
Page({
  data: {
    glueType: '',
    materialName: '',
    number: 0,
  },
  /**
   * 页面的初始数据
   */
  glueTypeInput: function(e1) {
    console.log(e1)
    this.setData({
      glueType: e1.detail.value
    })

    console.log(this.data.glueType)
  },
  materialInput: function(e2) {
    console.log(e2)
    this.setData({
      materialName: e2.detail.value
    })
    console.log(this.data.materialName)
  },
  numberInput: function(e3) {
    console.log(e3)
    this.setData({
      number: e3.detail.value
    })
    console.log(this.data.number)
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
    console.log("开始传输数据");
    db.collection('Glue').add({

        data: {
          type: this.data.glueType,
          name: this.data.materialName,
          number: this.data.number,
        },
        success: res => {
          console.log(this.data.glueType);
          console.log(res);
          console.log("数据传输成功");
        },
        fail: err => {
          console.log(err);
          console.log("数据传输失败");
        }
      }),

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
   * 用户点击右上角分享  可关闭共享
   */
  onShareAppMessage: function() {

  }
})