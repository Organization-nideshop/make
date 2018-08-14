// pages/checkout/checkout.js
var user = require('../../services/user.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    actualPrice:'179',
    checkedAddress:{
      id:'1',
      name:"莉莉",
      is_default:1,
      mobile:'15251639367',
      full_region:'江苏省',
      address:'无锡市南长区清扬路茂业天地B1202',
    },
    checkedGoodsList:[{
      id:'0',
      list_pic_url:'../../static/img/good_pic.jpg',
      goods_name:'草莓蛋糕',
      number:'1',
      parts:'每份含6套餐具',
      retail_price:'168',
    }, {
        id: '1',
        list_pic_url: '../../static/img/good_pic.jpg',
        goods_name: '黑森林',
        number: '2',
        parts: '每份含6套餐具',
        retail_price: '50',
      }
    ],
    couponList:[],
    goodsTotalPrice:'179',
    freightPrice:'0.00',
     _typeDistribution:1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '结算'
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }, 
  changeDistr: function(event){
    var key = event.currentTarget.dataset.key;
    var that = this;
    console.log(key);
    that.setData({
      _typeDistribution:key
    });
  },
  checkAdress:function(){
    wx.navigateTo({
      url: '../../pages/ucenter/address/address?type=0&id=0',
    })
  }, 
  checkCoupon:function(){
    wx.navigateTo({
      url: '../../pages/ucenter/couponList/couponList',
    })
  },
  checkStore:function(){
    var that = this;
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude
        console.log("latitude", latitude);
        console.log("longitude", longitude);
        that.setData({
          latitude: latitude,
          longitude: longitude
        });
        wx.navigateTo({
          url: '../../pages/store/store?latitude=' + latitude +'&longitude=' + longitude
        })
      }
    })
  }
})