// pages/parts/parts.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    parts: [{
      'id': '2dedfweopndgfds213213231',
      'parts_name': '桃心生日帽',
      'list_pic_url': '../../static/img/parts1.jpg',
      'spec': '',
      'price_info': '5.00',
      'content': '桃心生日帽，祝你生日快乐',
      'number': '1'
    },
    {
      'id': '2dedfweopndgfds21321321',
      'parts_name': '餐盘',
      'list_pic_url': '../../static/img/parts2.jpg',
      'spec': '(6人份)',
      'price_info': '5.00',
      'content': '餐盘（6人份）',
      'number': '2'
      },
      {
        'id': '2dedfweopndgfds21321325',
        'parts_name': '彩虹生日帽',
        'list_pic_url': '../../static/img/parts3.jpg',
        'spec': '(6人份)',
        'price_info': '5.00',
        'content': '彩虹生日帽（6人份）',
        'number': '2'
      }],
    totalPrice:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '配件'
    })
    this.getAll();
    
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
  getAll:function(){
    var that = this;
    var price=0.00;
    for (var i = 0; i < that.data.parts.length; i++) {
      price += (parseInt(that.data.parts[i].number) * parseInt(that.data.parts[i].price_info));
       
    }
    this.setData({
      totalPrice: price.toFixed(2)
    })
  }
  ,
  updateParts: function (id, number) {
    var that=this;
    for (var i = 0; i < that.data.parts.length; i++) {

      if(id==that.data.parts[i].id)
        that.data.parts[i].number=number;
    }
    this.getAll();
  },
  addNumber: function (event){
    let itemIndex = event.target.dataset.itemIndex;
    let cartItem = this.data.parts[itemIndex];
    let number = parseInt(cartItem.number) + 1;
    cartItem.number = number;
    this.setData({
      parts: this.data.parts
    });
    this.updateParts(cartItem.id, number);
  },
  cutNumber: function (event) {
    let itemIndex = event.target.dataset.itemIndex;
    let cartItem = this.data.parts[itemIndex];
    let number = (parseInt(cartItem.number) - 1 > 1) ? parseInt(cartItem.number) - 1 : 1;
    cartItem.number = number;
    this.setData({
      parts: this.data.parts
    });
     this.updateParts(cartItem.id, number);
  }
})