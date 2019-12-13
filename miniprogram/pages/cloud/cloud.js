// miniprogram/pages/cloud/cloud.js
const db = wx.cloud.database();
var app = getApp()
data: {
  orderNumber: ''
  receivingPerson: ''
  number: 0
  date: ''
}
Page({
  data: {
    glueType: '',
    materialName: '',
    number: 0,
    materialList: [],
    countNumber: 0,
    glueList: [],
  },
  //输入 订货单号
  orderNumberInput: function(e1) {
    console.log(e1)
    this.setData({
      orderNumber: e1.detail.value
    })

    console.log(this.data.orderNumber)
  },
  //输入接货人
  receivingPersonInput: function(e2) {
    console.log(e2)
    this.setData({
      receivingPerson: e2.detail.value
    })
    console.log(this.data.receivingPerson)
  },
  //改变入库时间
  changeDate: function(e) {
    this.setData({
      date: e.detail.value
    });
  },
  // //

  // cancel() {

  // },
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
    console.log('数据传输取消');
    this.popup.hidePopup();
  },
  _success() {
    console.log('你点击了确定');

    this.data.glueList.push({
      glueType: this.popup.data.glueType,
      materialName: this.popup.data.materialName,
      number: this.popup.data.number
    });
    console.log("数据已传输至清单");
    this.setData({
      glueList: this.data.glueList
    });
    console.log('清单类型为', this.data.glueList, '显示结束')
    this.popup.hidePopup();
  },
  listUpload() {
    let length = this.data.glueList.length;
    console.log(length)
    for (let i = 0; i < length; i = i + 1) {
    db.collection('Glue').add({
      data: {
        glueType: this.data.glueList[i].glueType,
        materialName: this.data.glueList[i].materialName,
        number: this.data.glueList[i].number,

      },
      success: res => {
        console.log(this.data.glueList);
        console.log(res);
        console.log(i ,"数据传输成功")
      },
      fail: err => {
        console.log(err);
        console.log("数据传输失败");
      }
    })
    }
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