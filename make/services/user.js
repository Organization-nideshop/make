/**
 * 用户相关服务
 */
const util = require('../utils/util.js');
const api = require('../config/api.js');
/**
 * 调用微信登录
 */
function loginByWeixin() {
  let code = null;
  return new Promise(function (resolve, reject) {
    return util.login().then((res) => {
      code = res.code;
      return util.getUserInfo();
    }).then(
    //   (userInfo) => {
    //   //登录远程服务器
    //   util.request(api.AuthLoginByWeixin, { code: code, userInfo: userInfo }, 'POST').then(res => {
    //     if (res.errno === 0) {
    //       //存储用户信息
    //       wx.setStorageSync('userInfo', res.data.userInfo);
    //       wx.setStorageSync('token', res.data.token);
    //       resolve(res);
    //     } else {
    //       reject(res);
    //     }
    //   }).catch((err) => {
    //     reject(err);
    //   });
    // }
    ).catch((err) => {
      reject(err);
    })
  });
}

/**
 * 判断用户是否登录
 */
function checkLogin() {
  return new Promise(function (resolve, reject) {
    if (wx.getStorageSync('userInfo') && wx.getStorageSync('token')) {

      util.checkSession().then(() => {
        resolve(true);
      }).catch(() => {
        reject(false);
      });

    } else {
      //reject(false);
      loginByWeixin();
    }
  });
}

function checkLocation() {
  //检查是否选择订购城市
  //wx.setStorageSync("location", "西安");
  var location = wx.getStorageSync('location');
  if (location) {
    return {'location' : location,'status':false};
  } else {
    return { 'location': '无', 'status': true };
  }
}

module.exports = {
  loginByWeixin,
  checkLogin,
  checkLocation,
};











