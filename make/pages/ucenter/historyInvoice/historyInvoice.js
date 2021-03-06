// pages/ucenter/historyInvoice/historyInvoice.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      _id:1,
      invoiceInfo:[
          {
              order:'个人',
              status:'已开票',
              invoiceTitle:'诈骗',
              invoiceType:'电子发票',
              applyDate:'2018-7-28 3:16:36 PM',
              invoicePrice:'100'
          }
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
    orderByStatus:function (e) {
        var id = parseInt(e.currentTarget.dataset.id);
        var that = this;
        that.setData({
            _id:id
        })
    },
    previewInvoice:function () {
        wx.navigateTo({
            url:'../../ucenter/invoiceDetail/invoiceDetail'
        })
    }
})