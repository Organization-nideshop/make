var util = require('../../utils/util.js');
var api = require('../../config/api.js');
var WxParse = require('../../lib/wxParse/wxParse.js');
//获取应用实例
const app = getApp();
Page({
    data: {
        id: 0,
        goods: {
            id: 2,
            title: '草莓洛丽塔',
            subtitle: '满88减10',
            pic_url: [
                {id:1,img_url:'../../static/img/good-item1.jpg'},
                {id:2,img_url:'../../static/img/good-item2.jpg'},
                {id:3,img_url:'../../static/img/good-item3.jpg'}
            ],
            price_info: 189,
            old_price_info: 199,
            actType: 2,
            activity: '满减',
            number:0,
            type:'水果蛋糕',
            parets:'内含6套餐具',
            sweetness:'○○',
            scene:'情人节、生日、聚会',
            ship:'商家配送 用户自提',
            orderTime:'2',
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
        },
        selected:'1',
        cart:[{id:0,num:2},{id:1,num:2}],
    },
    selectGoodsSize:function (e) {
        var id = e.currentTarget.dataset.id;
        this.setData({
            selected:id
        })
    },
    addNumber: function (event) {
        let cartItem = this.data.goods;
        let number = parseInt(cartItem.number) + 1;
        cartItem.number = number;
        this.setData({
            goods: cartItem
        });
    },
    cutNumber: function (event) {
        let cartItem = this.data.goods;
        let number = (parseInt(cartItem.number) - 1 > 1) ? parseInt(cartItem.number) - 1 : 1;
        cartItem.number = number;
        this.setData({
            goods: cartItem
        });
    },
    backToTop: function (e) {  // 一键回到顶部
        wx.pageScrollTo({
            scrollTop: 0,
            duration: 400
        });
    },
    goToCart:function () {
        wx.navigateTo({
            url:'../cart/cart'
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
