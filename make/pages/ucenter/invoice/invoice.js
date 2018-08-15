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
      {
        id: 4,
        question: '4.开票金额就是订单金额吗？',
        answer: '所有商品仅按顾客实际支付现金、支付宝、微信支付、银行卡的支付方式开具发票，不包括蛋糕卡、优惠券、储值卡、积分等方式支付的金额部分。',
        show: false
      },
      {
        id: 5,
        question: '5.多个订单合并开电子发票是否支持？',
        answer: '不支持，暂时无法满足您的需求',
        show: false
      },
      {
        id: 6,
        question: '6.我的电子发票抬头写错了，需要重开发票如何操作？',
        answer: '不可以，已开具的电子发票不支持重开发票',
        show: false
      },
      {
        id: 7,
        question: '7.开具电子发票后是否可以换开纸质发票？',
        answer: '不可以，已开具的电子发票不可以换纸质发票',
        show: false
      },
      {
        id: 8,
        question: '8.顾客下单后，什么时间能申请电子发票？',
        answer: '一般在提货,签收后0-2个工作日即可申请电子发票',
        show: false
      },
      {
        id: 9,
        question: '9.已经收到的电子发票，请问还可以修改发票内容吗？',
        answer: '不可以，已收到的电子发票是不能再修改发票',
        show: false
      },
      {
        id: 10,
        question: '10.申请电子发票有效期时间为多久？',
        answer: '一个月',
        show: false
      },
      {
        id: 11,
        question: '11.纸质发票说明',
        answer: '纸质发票可在申请开具后15个工作日（节假日除外）至申请领取发票门店进行发票认领，如有特殊情况请及时与领取门店进行联系',
        show: false
      },
    ]
  },

  showAnswer: function(e) {
    var that = this;
    var index = e.currentTarget.dataset.index;
    // var show = true;
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