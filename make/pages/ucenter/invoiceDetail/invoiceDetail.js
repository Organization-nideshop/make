// pages/ucenter/invoiceDetail/invoiceDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      invoiceInfo: {
          applyDate:'2018-7-28 3:16:36 PM',
          order:'个人',
          invoiceTitle:'诈骗',
          invoiceType:'增值税普通发票',
          invoiceProperty:'电子发票',
          invoicePrice:'100',
          bankName:'招商',
          bankAccount:'456789',
          address:'faweljfaw',
          mobile:'13124324234',
          status:'已开票'
      }
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
    backToHistoryInvoice:function () {
        wx.navigateBack({
            delta:1
        })
    }
})