// pages/goodsList/goodsList.js
var util = require('../../utils/util.js');
var api = require('../../config/api.js');
var wxList = require('../../lib/wxParse/wxList.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    selectId:0,
    allNum:10,
    cartNumber:2,
    page:0,
    pageNumber:6,
    navList: [{
        id: 0,
        name: '人气推荐',
        subNumber: 0,
      }, {
        id: 1,
        name: '蛋糕',
        subNavList: [{
            id: 1,
            name: '欧式蛋糕'
          },
          {
            id: 2,
            name: '寿庆蛋糕'
          },
          {
            id: 3,
            name: '儿童蛋糕'
          },
          {
            id: 4,
            name: '水果蛋糕'
          },
          {
            id: 5,
            name: '稀奶油蛋糕'
          },
        ],
        subNumber: 5,
      },
      {
        id: 2,
        name: '切块',
        subNumber: 0,
      },
      {
        id: 3,
        name: '面包',
        subNumber: 0,
      },
      {
        id: 4,
        name: '中点',
        subNumber: 0,
      },
      {
        id: 5,
        name: '饮品',
        subNumber: 0,
      }
    ],
    categoryList: [],
    currentCategory: {
      id: 0,
      subId: 1,
      goodList: [{
          id: 0,
          title: '卡布奇诺',
          subtitle: '直降10元',
          pic_url:'../../static/img/1.jpg',
          price_info: 179,
          old_price_info:189,
          actType: 1,
          activity: '直降',
          number: 2,
          spec:[
            {
              name: "卡布奇诺",
              size:'6寸',
              price:'188',
              number:'1'
            }, {
              name: "卡布奇诺",
              size: '8寸',
              price: '238',
              number: '1'
            }, {
              name: "卡布奇诺",
              size: '10寸',
              price: '288',
              number: '0'
            }
          ]
        },
        {
          id: 1,
          title: '卡布奇诺',
          subtitle: '',
          pic_url: '../../static/img/2.jpg',
          price_info: 189,
          old_price_info: 189,
          actType: 0,
          activity: '',
          number: 0
        },
        {
          id: 2,
          title: '卡布奇诺',
          subtitle: '满88减10',
          pic_url: '../../static/img/3.jpg',
          price_info: 189,
          old_price_info: 199,
          actType: 2,
          activity: '满减',
          number: 0
        },
        {
          id: 3,
          title: '蓝莓乳酪',
          subtitle: '',
          pic_url: '../../static/img/1.jpg',
          price_info: 189,
          old_price_info: 189,
          actType: 0,
          activity: '',
          number: 0
        },
        {
          id: 4,
          title: '卡布奇诺',
          subtitle: '',
          pic_url: '../../static/img/2.jpg',
          price_info: 189,
          old_price_info: 189,
          actType: 0,
          activity: '',
          number: 0
        },
        {
          id: 5,
          title: '蓝莓乳酪',
          subtitle: '',
          pic_url: '../../static/img/3.jpg',
          price_info: 189,
          old_price_info: 189,
          actType: 0,
          activity: '',
          number: 0
        }
      ], 
       
    },
    scrollLeft: 0,
    scrollTop: 0,
    scrollHeight: 0,
    // cart: [{ id: 0, num: 2 }, { id: 2, num: 1 }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.setNavigationBarTitle({
      title: '商城'
    })
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
    console.log("下拉刷新事件");
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    console.log("上拉触底事件");
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  getList: function() {
    var that = this;
    util.request(api.ApiRootUrl + 'api/catalog/' + that.data.currentCategory.cat_id)
      .then(function(res) {
        that.setData({
          categoryList: res.data,
        });
      });
  },
  switchCate: function(event) {
    var that = this;
    var currentTarget = event.currentTarget;
    if (this.data.currentCategory.id == event.currentTarget.dataset.id) {
      return false;
    }
    var arry = this.data.currentCategory;
    arry.id = event.currentTarget.dataset.id;
    // currentCategory.id

    if (event.currentTarget.dataset.subnumber == 0) {
      arry.subId = null;
    } else {
      arry.subId = 1;
    }

    this.setData({
      currentCategory: arry
    });
  },
  switchSubCate: function(event) {
    var that = this;
    var currentTarget = event.currentTarget;
    if (this.data.currentCategory.id == event.currentTarget.dataset.id) {
      if (this.data.currentCategory.subId == event.currentTarget.dataset.subid) {
        return false;
      }
      var arry = this.data.currentCategory;
      arry.subId = event.currentTarget.dataset.subid;
      this.setData({
        currentCategory: arry
      });
    }
  }, moreLoad:function(){
    var that=this;
    that.setData({
      currentCategory: {
        id: 1,
        subId: 1,
        goodList: [{
          id: 0,
          title: '卡布奇诺',
          subtitle: '直降10元',
          pic_url: '../../static/img/1.jpg',
          price_info: 179,
          old_price_info: 189,
          actType: 1,
          activity: '直降',
          number: 1
        },
        {
          id: 1,
          title: '卡布奇诺',
          subtitle: '',
          pic_url: '../../static/img/2.jpg',
          price_info: 189,
          old_price_info: 189,
          actType: 0,
          activity: '',
          number: 0
        },
        {
          id: 2,
          title: '卡布奇诺',
          subtitle: '满88减10',
          pic_url: '../../static/img/3.jpg',
          price_info: 189,
          old_price_info: 199,
          actType: 2,
          activity: '满减',
          number: 0
        },
        {
          id: 3,
          title: '蓝莓乳酪',
          subtitle: '',
          pic_url: '../../static/img/1.jpg',
          price_info: 189,
          old_price_info: 189,
          actType: 0,
          activity: '',
          number: 0
        },
        {
          id: 4,
          title: '卡布奇诺',
          subtitle: '',
          pic_url: '../../static/img/2.jpg',
          price_info: 189,
          old_price_info: 189,
          actType: 0,
          activity: '',
          number: 0
        },
        {
          id: 5,
          title: '蓝莓乳酪',
          subtitle: '',
          pic_url: '../../static/img/3.jpg',
          price_info: 189,
          old_price_info: 189,
          actType: 0,
          activity: '',
          number: 0
          },{
            id: 6,
            title: '卡布奇诺',
            subtitle: '直降10元',
            pic_url: '../../static/img/1.jpg',
            price_info: 179,
            old_price_info: 189,
            actType: 1,
            activity: '直降',
            number: 1
          },
          {
            id: 7,
            title: '卡布奇诺',
            subtitle: '',
            pic_url: '../../static/img/2.jpg',
            price_info: 189,
            old_price_info: 189,
            actType: 0,
            activity: '',
            number: 0
          },
          {
            id: 8,
            title: '卡布奇诺',
            subtitle: '满88减10',
            pic_url: '../../static/img/3.jpg',
            price_info: 189,
            old_price_info: 199,
            actType: 2,
            activity: '满减',
            number: 0
          },
          {
            id: 9,
            title: '蓝莓乳酪',
            subtitle: '',
            pic_url: '../../static/img/1.jpg',
            price_info: 189,
            old_price_info: 189,
            actType: 0,
            activity: '',
            number: 0
          }
        ]}
    });
  }, cutNumber:function(event){
    let itemIndex = event.target.dataset.itemIndex;
    let categoryId = event.target.dataset.categoryId;
    let subId = event.target.dataset.subId;
    var spec = currentCategory.goodList[itemIndex].spec;
    if (spec.length>0){
      console.log("规格弹出框");
    }else{
      console.log("添加数量");
    }
    wxList.cutNumber(itemIndex);
  }, addNumber: function (event) {
    let itemIndex = event.target.dataset.itemIndex;
    let categoryId = event.target.dataset.categoryId;
    let subId = event.target.dataset.subId;
    var spec = currentCategory.goodList[itemIndex].spec;
    if (spec.length > 0) {
      console.log("规格弹出框");
    } else {
      console.log("减少数量");
    }
  }
})