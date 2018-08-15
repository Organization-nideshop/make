// pages/ucenter/invoice/invoice.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showAnswer: false,
    itemIndex: '',
    qnaList: [{
        id: 1,
        question: '1.什么是电子发票？',
        answer: '电子发票是税务局认可的有效付款凭证,支持企业报销，请先确认所属公司是否支持电子发票报销。',
        show: false
      },
      {
        id: 2,
        question: '2.我是否可以使用电子发票报销？',
        answer: '电子发票是税务局认可的有效付款凭证,支持企业报销，请先确认所属公司是否支持电子发票报销。',
        show: false
      },
      {
        id: 3,
        question: '3.我可否定义电子发票的开票内容，如购买商品选择餐饮消费？',
        answer: '不可以，根据税法相关规定开票内容为实际购买产品明细。',
        show: false
      },
    ]
  },

  showAnswer: function(e) {
    var that = this;
    var index = e.currentTarget.dataset.index;
    var show = true;
    if (that.data.qnaList[index].show) {
      that.data.qnaList[index].show = false;
    } else {
      that.data.qnaList[index].show = true;
    }
    that.setData({
      qnaList: that.data.qnaList
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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
  /*showFrom(e) {
    var param = e.currentTarget.dataset.param;
    this.setData({
      isShowFrom: param == 1 ? (this.data.isShowFrom ? false : true) : false
    });
  }*/
})