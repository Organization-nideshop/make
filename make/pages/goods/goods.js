var util = require('../../utils/util.js');
var api = require('../../config/api.js');
var WxParse = require('../../lib/wxParse/wxParse.js');
//获取应用实例
const app = getApp();
Page({
    data: {
        id: 0,
        goods: {},
        gallery: [
            {id:1,img_url:'../../static/img/good-item1.jpg'},
            {id:2,img_url:'../../static/img/good-item2.jpg'},
            {id:3,img_url:'../../static/img/good-item3.jpg'}
        ],
        menuList:[
            {
                id:1,
                tips:'2-4人食',
                size:'6英寸'
            },
            {
                id:2,
                tips:'3-6人食',
                size:'8英寸'
            },
            {
                id:3,
                tips:'4-8人食',
                size:'10英寸'
            },
            {
                id:4,
                tips:'2-4人食',
                size:'12英寸'
            },
            {
                id:5,
                tips:'2-4人食',
                size:'14英寸'
            },
        ],
        selected:'1',
    },
    selectGoodsSize:function (e) {
        var id = e.currentTarget.dataset.id;
        this.setData({
            selected:id
        })
    },
    onLoad: function (options) {
        // 页面初始化 options为页面跳转所带来的参数
        this.setData({
            id: parseInt(options.id)

        });
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
})
