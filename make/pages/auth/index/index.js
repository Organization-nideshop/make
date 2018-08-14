var util = require('../../../utils/util.js');
var app = getApp();
Page({
  data: {

  },
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '授权'
    })
  },
  onGotUserInfo: function (e) {
    var that = this;
    console.log(e)
    var res = e.detail;
    if (res.errMsg == 'getUserInfo:ok') {
      app.globalData.userInfo = res.userInfo;
      wx.navigateBack({ changed: true });//返回上一页
    } else {
      layer.layer.alert('授权登录失败', this);
    }
  },

});
