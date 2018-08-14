var QQMapWX = require('../../lib/wxParse/qqmap-wx-jssdk.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
    isFold: true,
    currentCity: '',
    checkedIndex:0,
    longitude: 120.28429,
    latitude: 31.546863,
    markers: [{
      id: 1,
      longitude: 120.28429,
      latitude: 31.52853,
       name: '当前位置',
      iconPath: '../../static/images/current.png',
      width:30,
      height:40
    }, {
        longitude: 120.288785,
        latitude: 31.558965,
        iconPath: '../../static/images/target.png',
        width: 30,
        height: 40
      }, {
        longitude: 120.281781,
        latitude: 31.548888,
        iconPath: '../../static/images/target.png',
        width: 30,
        height: 40
      }],
    // covers: [{
    //   longitude: 120.288785,
    //   latitude: 31.558965,
    //   iconPath: '../../static/images/target.png',
    //   width: 30,
    //   height: 40
    // }, {
    //     longitude: 120.281781,
    //     latitude: 31.548888,
    //     iconPath: '../../static/images/target.png',
    //     width: 30,
    //     height: 40
    // }],
    storeList:[{
        id:'0',
        list_pic_url:'../../static/img/store.png',
        store_name:'西安音乐学院',
        adress:'显示雁塔区 长安立交',
        distance:'1.9',
      }, {
        id: '1',
        list_pic_url: '../../static/img/store.png',
        store_name: '西安音乐学院',
        adress: '显示雁塔区 长安立交',
        distance: '1.9',
      }, {
        id: '2',
        list_pic_url: '../../static/img/store.png',
        store_name: '西安音乐学院',
        adress: '显示雁塔区 长安立交',
        distance: '1.9',
      }, {
        id: '3',
        list_pic_url: '../../static/img/store.png',
        store_name: '西安音乐学院',
        adress: '显示雁塔区 长安立交',
        distance: '1.9',
      }, {
        id: '4',
        list_pic_url: '../../static/img/store.png',
        store_name: '西安音乐学院',
        adress: '显示雁塔区 长安立交',
        distance: '1.9',
      }, {
        id: '5',
        list_pic_url: '../../static/img/store.png',
        store_name: '西安音乐学院',
        adress: '显示雁塔区 长安立交',
        distance: '1.9',
      }, {
        id: '6',
        list_pic_url: '../../static/img/store.png',
        store_name: '西安音乐学院',
        adress: '显示雁塔区 长安立交',
        distance: '1.9',
      },]
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.setNavigationBarTitle({
      title: '选择门店'
    })
    var latitude = options.latitude;
    var longitude = options.longitude;
    console.log(latitude + "store");
    console.log(longitude + "store");
    var that = this;
    // that.markers[0].latitude = latitude;
    // that.markers[0].longitude = longitude;
    that.setData({
      latitude: latitude,
      longitude: longitude,
      
    });
    this.getLocation();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    var that = this;
    that.mapCtx = wx.createMapContext('myMap')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    var that = this;
    that.getLocation();
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
  getLocation: function() {
    var that = this
    // 实例化腾讯地图API核心类
    var qqmapsdk = new QQMapWX({
      // key: 'KF6BZ-5DVC2-UR4UR-CIJUP-3KHMJ-L3B2A' // 必填

      key:'P2KBZ-ISAWD-MBW4Q-HV2GI-KIGLJ-L6F3E'
    });
    //根据坐标获取当前位置名称，显示在顶部:腾讯地图逆地址解析
    qqmapsdk.reverseGeocoder({
      location: {
        latitude: that.data.latitude,
        longitude: that.data.longitude
      },
      success: function(addressRes) {
        that.setData({
          currentCity: addressRes.result.address_component.city
        })
      },
      fail:function(res){
        console.log(res);
      },
      complete:function(res){
        console.log(res);
      }
    })
  },
  showAll: function (e) {
    this.setData({
      isFold: !this.data.isFold,
    })
  },
  checkedIndex:function(e){
    // var that = this;
    this.setData({
      checkedIndex: e.currentTarget.dataset.itemIndex
    });
  }
})