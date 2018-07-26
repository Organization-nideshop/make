var util = require('../../../utils/util.js');
var api = require('../../../config/api.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: 0,
    scrollTop: 0,
    scrollHeight: 0,
    page: 1,
    size: 10000,
    orderList: [],
    switchOrIndex:0,
    listOrDetail:'list',//默认显示list 0，显示详情 1
    orderDetail: {},
    showModalStatus:false,
    commentList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.setNavigationBarTitle({
      title: '订单列表'
    })

    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          scrollHeight: res.windowHeight
        });
      }
    });
    that.getCategoryInfo();
  },
  /*payOrder() {
    wx.redirectTo({
      url: '/pages/pay/pay',
    })
  },*/
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
  getCategoryInfo: function () {
    let that = this;
    if (that.data.id==0){
      that.setData({
        orderList:[
        {
          'id': '0',
          'order_sn': 'yasdfs11113432423ded',
          'order_status_text': '待付款',
          'actual_price': '42.00',
          'type': '预定订单',
          'goodsList': [{
            'shop': '微信店(陕西)',
            'list_pic_url': '../../../static/img/banner1.png',
            'goods_name': '240g 八宝粽子',
            'goods_price': '19.80',
            'number': '2'
          }]
        },
        {
          'id': '0',
          'order_sn': 'yasdfs11113432423ded',
          'order_status_text': '待收货',
          'actual_price': '42.00',
          'type': '预定订单',
          'goodsList': [
            {
              'shop': '微信店(陕西)',
              'list_pic_url': '../../../static/img/banner2.png',
              'goods_name': '640g 黑米粽子',
              'goods_price': '10.80',
              'number': '1'
            }]
        }, {
          'id': '0',
          'order_sn': 'yasdfs11113432423ded',
          'order_status_text': '待收货',
          'actual_price': '42.00',
          'type': '预定订单',
          'goodsList': [
            {
              'shop': '微信店(陕西)',
              'list_pic_url': '../../../static/img/banner2.png',
              'goods_name': '640g 黑米粽子',
              'goods_price': '10.80',
              'number': '1'
            }]
        }, {
          'id': '0',
          'order_sn': 'yasdfs11113432423ded',
          'order_status_text': '待评论',
          'actual_price': '42.00',
          'type': '预定订单',
          'goodsList': [
            {
              'shop': '微信店(陕西)',
              'list_pic_url': '../../../static/img/banner2.png',
              'goods_name': '640g 黑米粽子',
              'goods_price': '10.80',
              'number': '1'
            }]
        }
        ]
      });
    } else if (that.data.id == 1){
      that.setData({
        orderList: [
          {
            'id': '0',
            'order_sn': 'yasdfs11113432423ded',
            'order_status_text': '待付款',
            'actual_price': '42.00',
            'type': '预定订单',
            'goodsList': [{
              'shop': '微信店(陕西)',
              'list_pic_url': '../../../static/img/banner1.png',
              'goods_name': '240g 八宝粽子',
              'goods_price': '19.80',
              'number': '2'
            }]
          }
        ]
      });
    } else if (that.data.id == 2){
      that.setData({
        orderList: [
          {
            'id': '0',
            'order_sn': 'yasdfs11113432423ded',
            'order_status_text': '待收货',
            'actual_price': '42.00',
            'type': '预定订单',
            'goodsList': [
              {
                'shop': '微信店(陕西)',
                'list_pic_url': '../../../static/img/banner2.png',
                'goods_name': '640g 黑米粽子',
                'goods_price': '10.80',
                'number': '1'
              }]
          }, {
            'id': '0',
            'order_sn': 'yasdfs11113432423ded',
            'order_status_text': '待收货',
            'actual_price': '42.00',
            'type': '预定订单',
            'goodsList': [
              {
                'shop': '微信店(陕西)',
                'list_pic_url': '../../../static/img/banner2.png',
                'goods_name': '640g 黑米粽子',
                'goods_price': '10.80',
                'number': '1'
              }]
          }
        ]
      });
    } else{
      that.setData({
        orderList: [
           {
            'id': '0',
            'order_sn': 'yasdfs11113432423ded',
            'order_status_text': '待评论',
            'actual_price': '42.00',
            'type': '预定订单',
            'goodsList': [
              {
                'shop': '微信店(陕西)',
                'list_pic_url': '../../../static/img/banner2.png',
                'goods_name': '640g 黑米粽子',
                'goods_price': '10.80',
                'number': '1'
              }]
          }
        ]
      });

    }
  },
  switchOrder: function (event) {
    var that = this;
    that.setData({
      listOrDetail: 'list'
    })
    if (that.data.id == event.currentTarget.dataset.index) {
      return false;
    }
    var clientX = event.detail.x;
    var currentTarget = event.currentTarget;
    if (clientX < 60) {
      that.setData({
        scrollLeft: currentTarget.offsetLeft - 60
      });
    } else if (clientX > 330) {
      that.setData({
        scrollLeft: currentTarget.offsetLeft
      });
    }
    that.setData({
      id: event.currentTarget.dataset.index
    });
    console.log(that.data.id);
    that.getCategoryInfo();
  },
  showDetail: function (e) {
   // e.currentTarget.dataset.ordersn;
    var that = this;
    that.setData({
      listOrDetail: 'detail',
      orderDetail:{
          'id': '0',
          'order_sn': 'yasdfs11113432423ded',
          'order_status': '0',
          'order_status_text': '待付款',
          'discount':'10.00',
          'actual_price': '42.00',
          'type': '预定订单',
          'shop': '微信店(陕西)',
          'list_pic_url': '../../../static/img/banner2.png',
          'goods_name': '640g 黑米粽子',
          'goods_price': '10.80',
          'number':2,
          'distribution': '到店自提',
          'store_name': '纬二十九街店',
          'telephone': '',
          'pu_time': '2018/4/18 14:20:00',
          'order_time': '2018/4/19 11:20:20',
          'remarks': '备注是请确保新鲜'
        }
    })
  },conentComment: function(){
    var that=this;
    that.setData({
      commentList:[
        { 'id': '0', 'value': '口味', 'type': [{ 'type_id': '0', 'type_name': '偏淡', 'checked': 'true' }, { 'type_id': '1', 'type_name': '适中', 'checked': '' }, { 'type_id': '2', 'type_name': '偏重', 'checked': ''}]},
        { 'id': '1', 'value': '新鲜度', 'type': [{ 'type_id': '0', 'type_name': '不新鲜', 'checked': 'true' }, { 'type_id': '1', 'type_name': '适中', 'checked': '' }, { 'type_id': '2', 'type_name': '非常棒', 'checked': ''}] },
        { 'id': '2', 'value': '包装', 'type': [{ 'type_id': '0', 'type_name': '非常棒', 'checked': 'true' }, { 'type_id': '1', 'type_name': '建议改进', 'checked': ''}] },
        { 'id': '3', 'value': '服务', 'type': [{ 'type_id': '0', 'type_name': '很好', 'checked': 'true' }, { 'type_id': '1', 'type_name': '一般', 'checked': ''}, { 'type_id': '2', 'type_name': '差', 'checked': '' }] }
      ]
    });
  },
  orderComment: function () {
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
    this.conentComment();
  },
  hideComment: function () {
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
  },
})