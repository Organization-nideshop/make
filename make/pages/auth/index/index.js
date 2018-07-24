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


      /*app.globalData.encryptedData = res.encryptedData;
      app.globalData.iv = res.iv;
      app.globalData.userInfo = res.userInfo;
      app.globalData.hasLogin = true;
      wx.login({
        success: function (loginRes) {
          console.log(loginRes);
          if (loginRes.code) {
            app.globalData.userInfo = res.userInfo;
            var lData = "{\"code\": \"" + loginRes.code + "\", \"rawData\": " + res.rawData + " }";
            wx.request({
              url: app.getFullUrl(config.loginUrl),
              data: lData,
              method: 'post',
              success: function (res2) {
                console.log(res2);
                app.globalData.id = res2.data.returnData.id
                app.globalData.session = res2.data.returnData.session
                wx.switchTab({
                  url: '../goods/index'
                })
              }
            })
          }
        }
      })*/

    } else {
      layer.layer.alert('授权登录失败', this);
    }
  },

});
