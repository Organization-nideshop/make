// pages/ucenter/applyInvoice/applyInvoice.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      orderInfo:[
          {
              oid:'1',
              consumeDate:'2018-08-09 10:33',
              consumeType:'充值',
              applyAmount:'0.01'
          },
          {
              oid:'2',
              consumeDate:'2018-08-09 10:33',
              consumeType:'充值',
              applyAmount:'0.01'
          },
          {
              oid:'3',
              consumeDate:'2018-08-09 10:33',
              consumeType:'充值',
              applyAmount:'0.01'
          },
          {
              oid:'4',
              consumeDate:'2018-08-09 10:33',
              consumeType:'充值',
              applyAmount:'0.01'
          },
      ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
  makeOutInvoice:function () {
      wx.navigateTo({
          url:'../makeOutInvoice/makeOutInvoice'
      })
  }
})