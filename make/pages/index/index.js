const util = require('../../utils/util.js');
const api = require('../../config/api.js');
const user = require('../../services/user.js');

//获取应用实例
const app = getApp()
Page({
  data: {
    item: {
      index: 0,
      msg: 'this is a template',
      time: '2017-10-2'
    },
    showModalStatus: app.globalData.location["status"],
    showModalLocation: app.globalData.location["location"],
    city_list: [{ 'id': '0','name': '铜川哈哈' }, { 'id': '0', 'name': '吉林' }, { 'id': '0', 'name': '西安' }, { 'id': '0', 'name':'哈尔滨哈'},{'id':'0','name':'牡丹江'},{'id':'0','name':'四平'},{'id':'0','name':'咸阳'},{'id':'0','name':'韩城'},{'id':'0','name':'佳木斯'},{'id':'0','name':'辽源'},{'id':'0','name':'宝鸡'},{'id':'0','name':'兴平'},{'id':'0','name':'长春市'},{'id':'0','name':'成都'},{'id':'0','name':'渭南'},{'id':'0','name':'沈阳'},{'id':'0','name':'北京'}],
    newGoods: [],
    hotGoods: [],
    topics: [{ 'scene_pic_url': '../../static/img/banner1.png', 'title': '蓝莓乳酪', 'price_info': '¥165', 'old_price_info': '¥198', 'subtitle': '春季新品直降165元', 'activity': '3人拼团', 'time': '距离结束仅剩10天6小时10分2秒' }, { 'scene_pic_url': '../../static/img/banner2.png', 'title': '蓝莓乳酪', 'price_info': '¥165', 'old_price_info': '¥198', 'subtitle': '春季新品直降165元', 'activity': '3人拼团', 'time': '距离结束仅剩10天6小时10分2秒' }, { 'scene_pic_url': '../../static/img/banner3.png', 'title': '蓝莓乳酪', 'price_info': '¥165', 'old_price_info': '¥198', 'subtitle': '春季新品直降165元', 'activity': '3人拼团', 'time': '距离结束仅剩10天6小时10分2秒' }],
    brands: [],
    floorGoods: [],
    banner: [{ 'link': '#', 'image_url':'../../static/img/banner1.png' }, 
      { 'link': '#', 'image_url': '../../static/img/banner2.png' }, 
      { 'link': '#', 'image_url': '../../static/img/banner3.png'}],
    channel: [{ 'link': '#', 'icon_url': '../../static/img/ico1.png','name':'蛋糕' },
      { 'link': '#', 'icon_url': '../../static/img/ico2.png', 'name': '夏日特饮'  },
      { 'link': '#', 'icon_url': '../../static/img/ico3.png', 'name': '面包'  },
      { 'link': '#', 'icon_url': '../../static/img/ico4.png', 'name': '节日'  }]
      
  }, 

  getIndexData: function () {
    let that = this;
    util.request(api.IndexUrl).then(function (res) {
      if (res.errno === 0) {
        that.setData({
          newGoods: res.data.newGoodsList,
          hotGoods: res.data.hotGoodsList,
          brand: res.data.brandList,
          floorGoods: res.data.categoryList
        });
      }
    });
  },
  onLoad: function (options) {
    this.getIndexData();
    wx.setNavigationBarTitle({
      title: '首页'
    })
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }, 
  selectCity: function (e) {
    // 选择城市
    this.setData({
      showModalLocation: e.currentTarget.dataset.name,
      showModalStatus: true,
    });
    wx.setStorageSync("location", e.currentTarget.dataset.name );
    app.globalData.location = user.checkLocation();
    this.hideModal();
  }, 
  showCity: function () {
    // 显示遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationData: animation.export(),
      showModalStatus: true
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export()
      })
    }.bind(this), 200)
  },
  hideModal: function () {
    // 隐藏遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationData: animation.export(),
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export(),
        showModalStatus: false
      })
    }.bind(this), 200)
  }
  
})
