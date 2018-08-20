// pages/checkout/checkout.js
var wxSelector = require('../../lib/wxParse/wxSelector.js');
var user = require('../../services/user.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    actualPrice: '179',
    checkedAddress: {
      id: '1',
      name: "莉莉",
      is_default: 1,
      mobile: '15251639367',
      full_region: '江苏省',
      address: '无锡市南长区清扬路茂业天地B1202',
    },
    checkedGoodsList: [{
      id: '0',
      list_pic_url: '../../static/img/good-item3.jpg',
      goods_name: '草莓蛋糕',
      number: '1',
      parts: '每份含6套餐具',
      retail_price: '168',
    }, {
      id: '1',
      list_pic_url: '../../static/img/good-item3.jpg',
      goods_name: '黑森林',
      number: '2',
      parts: '每份含6套餐具',
      retail_price: '50',
    }],
    couponList: [],
    goodsTotalPrice: '179',
    freightPrice: '0.00',
    _typeDistribution: 1,
    showDate: '',
    dateSelectorData: {
      modalShow: false,
      animationData: null,
      value: [9999, 0, 0, 0],
      year: 1900,
      month: '01',
      day: '01',
      hour: '01',
      years: [],
      months: [],
      days: [],
      hours: [],
    } //时间选择器——数据
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.setNavigationBarTitle({
      title: '结算'
    });
    //时间选择器——数据
    wxSelector.getTimes(this);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

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

  },
  changeDistr: function(event) {
    var key = event.currentTarget.dataset.key;
    var that = this;
    console.log(key);
    that.setData({
      _typeDistribution: key
    });
  },
  checkAdress: function() {
    wx.navigateTo({
      url: '../../pages/ucenter/address/address?type=0&id=0',
    })
  },
  checkCoupon: function() {
    wx.navigateTo({
      url: '../../pages/ucenter/couponList/couponList',
    })
  },
  checkStore: function() {
    var that = this;
    wx.getLocation({
      type: 'wgs84',
      success: function(res) {
        var latitude = res.latitude
        var longitude = res.longitude
        console.log("latitude", latitude);
        console.log("longitude", longitude);
        that.setData({
          latitude: latitude,
          longitude: longitude
        });
        wx.navigateTo({
          url: '../../pages/store/store?latitude=' + latitude + '&longitude=' + longitude
        })
      }
    })
  },
  bindChange: function(e) {
    //时间选择器——变化
    const val = e.detail.value;
    wxSelector.bindChange(val, this);
  },
  showPicker: function() {
    //时间选择器——打开
    wxSelector.showModal(this);
  },
  hidePicker: function(event) {
    //时间选择器——关闭
    let type = event.currentTarget.dataset.key;
    wxSelector.hideModal(type, this);
  },
  showModal: function(event) {
    const type = event.currentTarget.dataset.key;
    // 显示遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    type == "1" ? this.setData({
      animationData1: animation.export(),
      showModalStatus1: true
    }) : this.setData({
      animationData2: animation.export(),
      showModalStatus2: true
    });
    setTimeout(function() {
      animation.translateY(0).step()
      type == "1" ? this.setData({
        animationData1: animation.export()
      }) : this.setData({
        animationData2: animation.export()
      });

    }.bind(this), 200)
  },
  hideModal: function(event) {
    const type = event.currentTarget.dataset.key;
    // 隐藏遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    
    type == "1" ? this.setData({
      animationData1: animation.export(),
    }) : this.setData({
      animationData2: animation.export(),
    });
    setTimeout(function() {
      animation.translateY(0).step()
      type == "1" ? this.setData({
        animationData1: animation.export(),
        showModalStatus1: false
      }) : this.setData({
        animationData2: animation.export(),
          showModalStatus2: false
      });

    }.bind(this), 200)
  },
})