// pages/ucenter/evaluate/evaluate.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    upLoadImg: [],
    uploadFlag: null,
    jsonstr: [],
    imgSize: 0,
    imgNum: 0,
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
  selectImg: function() {
    var that = this;
    var upLoadImg = that.data.upLoadImg;
    var imgSize = that.data.imgSize;
    if (upLoadImg.length >= 9) {
      wx.showToast({
        title: '最多上传9张图片',
        icon: 'none',
      })
      return;
    }
    //选择图片
    wx.chooseImage({
      // count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function(res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths;
        var tempFiles = res.tempFiles;
        console.log("daxiao", tempFiles[0].size);

        var upLoadImg = that.data.upLoadImg;
        var count = 9 - upLoadImg.length;
        if (tempFilePaths.length < count) {
          count = tempFilePaths.length;
        }

        for (var i = 0; i < count; i++) {
          var arr = {
            // id: i,
            imgUrl: tempFilePaths[i],
            size: tempFiles[i].size,
            uploadFlag: 0
          }
          upLoadImg.push(arr);

          that.setData({
            upLoadImg: upLoadImg,
            jsonstr: arr
          });
        }
        console.log(that.data.upLoadImg);
        that.imgSizeOrNum();
      }
    })

  },
  //上传图片
  uploadImg: function() {
    var that = this;
    var uploadImgCount = 0;
    var imgArr = that.data.upLoadImg;
    if (imgArr.length == 0) {
      wx.showToast({
        title: '请先选中文件再点击上传',
        icon: 'none',
      })
      return false;
    }
    for (var i = 0; i < imgArr.length; i++) {
      if (imgArr[i].uploadFlag == 0) {
        imgArr[i].uploadFlag = 1;
      }
    }
    that.setData({
      upLoadImg: imgArr,
      imgSize: 0,
      imgNum: 0
    });
    console.log(that.data.upLoadImg);
  },
  imgSizeOrNum: function() {
    var that = this;
    var arr = that.data.upLoadImg;
    var size = 0;
    var num = 0;
    for (var i=0; i < arr.length; i++) {
      if (parseInt(arr[i].uploadFlag) == 0) {
        size += parseInt(arr[i].size);
        num += 1;
      }
    }
    that.setData({
      imgSize: (size/1000).toFixed(2),
      imgNum: num
    });
  }, 
  showProgress:function(){
    
  }
  // setTimeout("alert('对不起, 要你久候')", 3000)
})