// pages/search/search.js
var util = require('../../utils/util.js');
var api = require('../../config/api.js');
var wxList = require('../../lib/wxParse/wxList.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentSortType: "default",
    allNum:10,
    cartNumber:2,
    keywrod: '',
    searchStatus: false,
    currentCategory: {
      id: 0,
      subId: 1,
      goodList: [{
        id: 0,
        title: '卡布奇诺',
        subtitle: '直降10元',
        describe: '坚果的外表下，隐藏着一颗樱桃甜心，搭配浓浓的优选进口奶油',
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
    helpKeyword: [],
    historyKeyword: ['面包','芝士','草莓','蛋糕','肉松','草莓肉松蓝莓酱芝士夹心小蛋糕'],
    categoryFilter: false,
    currentSortOrder: '',
    filterCategory: [],
    defaultKeyword: {},
    hotKeyword: [{ id: 0, keyword: '面包' }, { id: 1, keyword: '甜甜圈' }, { id: 2, keyword: '蛋糕' }, { id: 3, keyword: '芝士' }, { id: 3, keyword: '芝士面包包包包' }, { id: 3, keyword: '草莓蓝莓各种莓的甜甜圈' }],
    page: 1,
    size: 20,
    currentSortOrder: 'desc',
    categoryId: 0,
    cartPopupData: {
      showModalStatus2: false,
      animationData: null,
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
      cartPrice: {
        price: 188,
        old_price: 198,
        discount: 10
      }
    },
    specPopupData: {
      showModalStatus1: false,
      animationData: null,
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
      categoryId: 0,
      subId: 1,
    },
  },
  //事件处理函数
  closeSearch: function () {
    wx.navigateBack()
  },
  // clearKeyword: function () {
  //   this.setData({
  //     keyword: '',
  //     searchStatus: false
  //   });
  // },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '搜索'
    })
    // this.getSearchKeyword();
  },
  // getSearchKeyword() {
  //   let that = this;
  //   util.request(api.SearchIndex).then(function (res) {
  //     if (res.errno === 0) {
  //       that.setData({
  //         historyKeyword: res.data.historyKeywordList,
  //         defaultKeyword: res.data.defaultKeyword,
  //         hotKeyword: res.data.hotKeywordList
  //       });
  //     }
  //   });
  // },
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
  
  },inputChange: function (e) {

    this.setData({
      keyword: e.detail.value,
      searchStatus: false
    });
    this.getHelpKeyword();
  },
  getHelpKeyword: function () {
    let that = this;
    util.request(api.SearchHelper, { keyword: that.data.keyword }).then(function (res) {
      if (res.errno === 0) {
        that.setData({
          helpKeyword: res.data
        });
      }
    });
  },
  inputFocus: function () {
    this.setData({
      searchStatus: false,
      goodsList: []
    });

    if (this.data.keyword) {
      this.getHelpKeyword();
    }
  },
  clearHistory: function () {
    this.setData({
      historyKeyword: []
    })

    util.request(api.SearchClearHistory, {}, 'POST')
      .then(function (res) {
        console.log('清除成功');
      });
  },
  getGoodsList: function () {
    let that = this;
    // util.request(api.GoodsList, { keyword: that.data.keyword, page: that.data.page, size: that.data.size, sort: that.data.currentSortType, order: that.data.currentSortOrder, categoryId: that.data.categoryId }).then(function (res) {
    //   if (res.errno === 0) {
    //     that.setData({
    //       searchStatus: true,
    //       categoryFilter: false,
    //       goodsList: res.data.data,
    //       filterCategory: res.data.filterCategory,
    //       page: res.data.currentPage,
    //       size: res.data.numsPerPage
    //     });
    //   }

    //   //重新获取关键词
    //   that.getSearchKeyword();
    // });
    that.setData({
      searchStatus: true,
      categoryFilter: false,
      // goodsList: [],
      // filterCategory: res.data.filterCategory,
      // page: res.data.currentPage,
      // size: res.data.numsPerPage
    });
  },
  onKeywordTap: function (event) {

    this.getSearchResult(event.target.dataset.keyword);

  },
  getSearchResult(keyword) {
    this.setData({
      keyword: keyword,
      page: 1,
      categoryId: 0,
      goodsList: []
    });

    this.getGoodsList();
  }, openSortFilter: function (event) {
    let currentId = event.currentTarget.id;
    wxList.openSortFilter(currentId, this);
  },

  
  // openSortFilter: function (event) {
  //   let currentId = event.currentTarget.id;
  //   switch (currentId) {
  //     case 'salesSort':
  //       // this.setData({
  //       //   'categoryFilter': !this.data.categoryFilter,
  //       //   'currentSortOrder': 'asc'
  //       // });
  //       // break;
  //       let sortOrder = 'asc';
  //       if (this.data.currentSortOrder == 'asc') {
  //         sortOrder = 'desc';
  //       }
  //       this.setData({
  //         'currentSortType': 'sales',
  //         'currentSortOrder': sortOrder,
  //         'categoryFilter': false
  //       });

  //       this.getGoodsList();
  //       break;
  //     case 'priceSort':
  //       let tmpSortOrder = 'asc';
  //       if (this.data.currentSortOrder == 'asc') {
  //         tmpSortOrder = 'desc';
  //       }
  //       this.setData({
  //         'currentSortType': 'price',
  //         'currentSortOrder': tmpSortOrder,
  //         'categoryFilter': false
  //       });

  //       this.getGoodsList();
  //       break;
  //     default:
  //       //综合排序
  //       this.setData({
  //         'currentSortType': 'default',
  //         'currentSortOrder': 'desc',
  //         'categoryFilter': false
  //       });
  //       this.getGoodsList();
  //   }
  // },
  // selectCategory: function (event) {
  //   let currentIndex = event.target.dataset.categoryIndex;
  //   let filterCategory = this.data.filterCategory;
  //   let currentCategory = null;
  //   for (let key in filterCategory) {
  //     if (key == currentIndex) {
  //       filterCategory[key].selected = true;
  //       currentCategory = filterCategory[key];
  //     } else {
  //       filterCategory[key].selected = false;
  //     }
  //   }
  //   this.setData({
  //     'filterCategory': filterCategory,
  //     'categoryFilter': false,
  //     categoryId: currentCategory.id,
  //     page: 1,
  //     goodsList: []
  //   });
  //   this.getGoodsList();
  // },
  onKeywordConfirm(event) {
    this.getSearchResult(event.detail.value);
  }, 
  moreLoad: function () {
    var that = this;
    that.setData({
        goodsList: [{
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
        }, {
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
        ]
    });
  }, addNumber: function (event) {
    let itemIndex = event.target.dataset.itemIndex;
    let categoryId = event.target.dataset.itemCategoryid;
    let subId = event.target.dataset.itemSubid;
    wxList.addNumber(itemIndex, categoryId, subId, this);
  },
  cutNumber: function (event) {
    let itemIndex = event.target.dataset.itemIndex;
    let categoryId = event.target.dataset.itemCategoryid;
    let subId = event.target.dataset.itemSubid;
    wxList.cutNumber(itemIndex, categoryId, subId, this);
  },
  showCart: function () {
    wxList.showModal(2, this);
  }
  , hideCarOrSpec: function (event) {
    let type = event.currentTarget.dataset.type;
    wxList.hideModal(type, this);
  },
  checkoutOrder: function () {
    wx.navigateTo({
      url: '../../pages/checkout/checkout',
    })
  }
})