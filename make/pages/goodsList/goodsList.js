// pages/goodsList/goodsList.js
var util = require('../../utils/util.js');
var api = require('../../config/api.js');
var wxList = require('../../lib/wxParse/wxList.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentSortType:"default",
    totalPrice: 0.00,
    totalDisprice: 0.00,
    cartNumber: 3,
    selectId:0,
    allNum:10,
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
          describe:'坚果的外表下，隐藏着一颗樱桃甜心，搭配浓浓的优选进口奶油',
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
              price:'179',
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
          number: 1
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
    cartGoods: [{
      'id': '0',
      'goods_name': '卡布奇诺',
      'list_pic_url': '../../static/img/1.jpg',
      'size': '6英寸',
      'type': '0',
      'distrType': '0',
      'price_info': '188',
      'old_price_info': '189',
      'number': '2',
      'actType': '1',
      'activity': '直降',
    }, {
        'id': '1',
        'goods_name': '卡布奇诺',
        'list_pic_url': '../../static/img/2.jpg',
        'size': '6英寸',
        'type': '0',
        'distrType': '0',
        'price_info': '189',
        'old_price_info': '189',
        'number': '2',
        'actType': '1',
        'activity': '',
      }],
    specDetail: {
      id: 0,
      title: '卡布奇诺',
      subtitle: '直降10元',
      describe: '坚果的外表下，隐藏着一颗樱桃甜心，搭配浓浓的优选进口奶油,24小时光照，晒完正面晒反面',
      pic_url: '../../static/img/1.jpg',
      price_info: 179,
      old_price_info: 189,
      actType: 1,
      activity: '直降',
      number: 2,
      spec: [
        {
          name: "卡布奇诺",
          size: '6寸',
          price: '179',
          number: '1'
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
    scrollLeft: 0,
    scrollTop: 0,
    scrollHeight: 0,
    cartPopupData:{
      showModalStatus2:false,
      animationData:null,
      cartGoods: [{
        'id': '0',
        'goods_name': '卡布奇诺',
        'list_pic_url': '../../static/img/1.jpg',
        'size': '6英寸',
        'type': '0',
        'distrType': '0',
        'price_info': '188',
        'old_price_info': '198',
        'number': '1',
        'actType': '1',
        'activity': '直降',
      }, {
        'id': '1',
        'goods_name': '卡布奇诺',
        'list_pic_url': '../../static/img/2.jpg',
        'size': '6英寸',
        'type': '0',
        'distrType': '0',
        'price_info': '189',
        'old_price_info': '189',
        'number': '0',
        'actType': '1',
        'activity': '',
      }],
      cartPrice:{
        price:188,
        old_price:198,
        discount:10
      }
    },
    specPopupData:{
      showModalStatus1:false,
      animationData:null,
      specDetail: {
        id: 0,
        title: '卡布奇诺',
        subtitle: '直降10元',
        describe: '坚果的外表下，隐藏着一颗樱桃甜心，搭配浓浓的优选进口奶油,24小时光照，晒完正面晒反面',
        pic_url: '../../static/img/1.jpg',
        price_info: 179,
        old_price_info: 189,
        actType: 1,
        activity: '直降',
        number: 2,
        spec: [
          {
            name: "卡布奇诺",
            size: '6寸',
            price: '179',
            number: '1'
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
      categoryId:0,
      subId:1,
    },
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
  }, 
  addNumber: function (event){
   let itemIndex = event.target.dataset.itemIndex;
   let categoryId = event.target.dataset.itemCategoryid;
   let subId = event.target.dataset.itemSubid;
   wxList.addNumber(itemIndex, categoryId, subId,this);
  },
  cutNumber: function (event){
    let itemIndex = event.target.dataset.itemIndex;
    let categoryId = event.target.dataset.itemCategoryid;
    let subId = event.target.dataset.itemSubid;
    wxList.cutNumber(itemIndex, categoryId, subId, this);
  },
  showCart:function(){
    wxList.showModal(2,this);
  }
  , hideCarOrSpec:function(event){
    let type = event.currentTarget.dataset.type;
    wxList.hideModal(type, this);
  },
  checkoutOrder: function () {
    wx.navigateTo({
      url: '../../pages/checkout/checkout',
    })
  }, openSortFilter: function (event) {
    let currentId = event.currentTarget.id;
    wxList.openSortFilter(currentId, this);
  }
})