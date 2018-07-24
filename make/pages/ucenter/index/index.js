var util = require('../../../utils/util.js');
var api = require('../../../config/api.js');
var user = require('../../../services/user.js');
var app = getApp();

Page({
  data: {
      uname:'用户名',
      mobile:'133****6765',
      balance:'123',
      score:'300',
      growVal:'普卡',
      menuList:[
          {
              id:1,
              title:'购物车',
              imgUrl:'../../../static/images/icon1_06.png',
              pageUrl:''
          },
          {
              id:2,
              title:'门店支付',
              imgUrl:'../../../static/images/icon1_08.png',
              pageUrl:''
          },{
              id:3,
              title:'生日管家',
              imgUrl:'../../../static/images/icon1_03.png',
              pageUrl:'../birthManager/birthManager'
          },{
              id:4,
              title:'签到',
              imgUrl:'../../../static/images/icon1_14.png',
              pageUrl:''
          },{
              id:5,
              title:'交易明细',
              imgUrl:'../../../static/images/icon1_11.png',
              pageUrl:'../chargeDetail/chargeDetail'
          }
      ],
      userList:[
          {
              id:1,
              uListTitle:'我的订单',
              pageUrl: '../order/order'
          },
          {
              id:2,
              uListTitle:'我的优惠券',
              pageUrl: '../order/order'
          },{
              id:3,
              uListTitle:'交易明细',
              pageUrl:'../chargeDetail/chargeDetail'
          },{
              id:4,
              uListTitle:'余额充值',
              pageUrl: '../order/order'
          },{
              id:5,
              uListTitle:'待支付',
              pageUrl: '../order/order'
          },{
              id:6,
              uListTitle:'设置',
              pageUrl: '../order/order'
          },
      ]
  },
  onLoad: function (options) {
  },
  onReady: function () {
  },
  onShow: function () {
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
  goToPage:function(e){
    var pageUrl = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: pageUrl,
    })
  }
})