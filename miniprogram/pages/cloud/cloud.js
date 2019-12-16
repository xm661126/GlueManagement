// miniprogram/pages/cloud/cloud.js
const db = wx.cloud.database();
Page({
  data: {
    result_date: '',
    inputText: null,
    userName: '',
    userAge: '',
    userPwd: " ",
    userNameInput: '',
    search_res: '',
  },
  insert: function() {
    /*     db.collection('user').add({
          data: {
            name: 'jerry',
            age: 20
          },
          success: res=>{
            console.log(res);
          },
          fail: err =>{
            console.log(err);
          }
        }) */
    db.collection('user').add({
      data: {
        name: "james",
        age: 23
      }
    }).then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    })
  },

  update: function() {
    db.collection('user').doc('7799745c5df1970f0271bf4d44db1a19').update({
      data: {
        age: 6
      }
    }).then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    })
  },
  search: function() {
    db.collection('user').where({
      name: 'james'
    }).get().then(res => {
      console.log(res.data[0].age);
      this.setData({
        nowSearch_res: res.data[0].age
      })

    }).catch(err => {
      console.log(err);
    })
  },
  delete: function() {
    db.collection('user').doc('72527ac65dee003a01a628e93e27a0de').remove().then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    })
  },

  sum: function() {
    wx.cloud, callFunction({
      name: 'sum',
      data: {
        a: 2,
        b: 3
      }
    }).then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    });
  },
  getOpenId: function() {
    wx.cloud.callFunction({
      name: 'login'
    }).then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    });
  },
  batchDelete: function() {
    wx.cloud.callFunction({
      name: 'batchDelete'
    }).then(res => {
      console.log(res);
    }).catch(err => {
      console.error(err);
    })
  },


  userNameInput: function(e) {
    this.setData({
      userName: e.detail.value
    })
  },
  userAgeInput: function(e) {
    this.setData({
      userAge: e.detail.value
    })
  },

  inputBtnClick: function(e) {
    console.log("输入：" + this.data.userName);
    console.log("输入：" + this.data.userAge);
    this.setData({
      name: userName,
      age: userAge
    })
    db.collection('user').add({
      data: {
        name: userName,
        age: userAge
      }
    }).then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    })
  },

})