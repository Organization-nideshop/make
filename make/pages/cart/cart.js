// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // cartGoods:[],
    cartGoods: [{
      'id':'2dedfweopndgfds213213231',
      'goods_name': '草莓洛丽塔',
      'list_pic_url': '../../static/img/good-item3.jpg',
      'size': '6英寸',
      'type': '0',
      'distrType': '0',
      'price_info': '168',
      'old_price_info': '189',
      'number': '1',
      'actType': '1',
      'activity': '直降',
    },
      {
        'id': '2dedfweopndgfds21321321',
        'goods_name': '彩虹生日帽',
        'list_pic_url': '../../static/img/parts3.jpg',
        'size': '',
        'type': '1',
        'distrType': '0',
        'price_info': '5.00',
        'old_price_info': '5.00',
        'number': '3',
        'actType':'',
        'activity': '',
      }],
      totalPrice:null,
    totalDisprice:null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.setNavigationBarTitle({
      title: '购物车'
    })
    this.getAll();
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
  getAll: function () {
    var that = this;
    var price = 0.00;
    var disprice=0.00;
    for (var i = 0; i < that.data.cartGoods.length; i++) {
      price += (parseInt(that.data.cartGoods[i].number) * parseInt(that.data.cartGoods[i].price_info));
      disprice += (parseInt(that.data.cartGoods[i].number) * (parseInt(that.data.cartGoods[i].old_price_info) - parseInt(that.data.cartGoods[i].price_info)));

    }
    this.setData({
      totalPrice: price.toFixed(2),
      totalDisprice: disprice.toFixed(2)
      
    })
  }
  ,
  updateCarts: function (id, number) {
    var that = this;
    for (var i = 0; i < that.data.cartGoods.length; i++) {

      if (id == that.data.cartGoods[i].id)
        that.data.cartGoods[i].number = number;
    }
    this.getAll();
  },
  addNumber: function (event) {
    let itemIndex = event.target.dataset.itemIndex;
    let cartItem = this.data.cartGoods[itemIndex];
    let number = parseInt(cartItem.number) + 1;
    cartItem.number = number;
    this.setData({
      cartGoods: this.data.cartGoods
    });
    this.updateCarts(cartItem.id, number);
  },
  cutNumber: function (event) {
    let itemIndex = event.target.dataset.itemIndex;
    let cartItem = this.data.cartGoods[itemIndex];
    let number = (parseInt(cartItem.number) - 1 > 1) ? parseInt(cartItem.number) - 1 : 1;
    cartItem.number = number;
    this.setData({
      cartGoods: this.data.cartGoods
    });
    this.updateCarts(cartItem.id, number);
  }, del:function(event){
    let itemIndex = event.target.dataset.itemIndex;
    console.log("itemIndex:"+itemIndex);
    this.data.cartGoods.splice(itemIndex, 1);
    this.setData({
      cartGoods: this.data.cartGoods
    });
  }, checkoutOrder:function(){
    wx.navigateTo({
      url: '../../pages/checkout/checkout',
    })
  }
})