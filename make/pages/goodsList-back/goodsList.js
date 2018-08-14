var util = require('../../utils/util.js');
var api = require('../../config/api.js');

Page({
    data: {
        navList: [
            {
                id:1,
                name:'蛋糕',
                ctgDetail:[
                    {cid:1,cname:'欧式蛋糕'},
                    {cid:2,cname:'寿庆蛋糕'},
                    {cid:3,cname:'儿童蛋糕'},
                    {cid:4,cname:'水果蛋糕'},
                    {cid:5,cname:'稀奶油蛋糕'},
                ]
            },
            {id:2,name:'切块'},
            {id:3,name:'面包'},
            {id:4,name:'中点'},
            {id:5,name:'饮品'}
        ],
        categoryList: [],
        currentCategory: {
            subCategoryList:[
                {
                  id:1,
                  name:'卡布奇诺',
                  price:179,
                  status:{id:1,name:'直降'},//直降
                  pre_price:189,
                  priceChange:'直降10元',
                  type:0,
                },
                {
                  id:2,
                  name:'蓝莓乳酪',
                  price:'189',
                  status: 0,//不参与活动
                  pre_price: 189,
                  priceChange: 0,
                  type:1,
                },
              ]
        },
        scrollLeft: 0,
        scrollTop: 0,
        goodsCount: 0,
        scrollHeight: 0
    },
    onLoad: function (options) {

    },
    onReady: function () {
        // 页面渲染完成
    },
    onShow: function () {
        // 页面显示
    },
    onHide: function () {
        // 页面隐藏
    },
    onUnload: function () {
        // 页面关闭
    },
    getList: function () {

    },
    switchCate: function (event) {

    }
})