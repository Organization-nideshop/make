var util = require('../../../utils/util.js');
var api = require('../../../config/api.js');
var user = require('../../../services/user.js');
var app = getApp();

Page({
    data: {
        uname:'用户名',
        mobile:'133****6765',
        balance:'123',
        score:'300',
        growVal:'普卡',
        animationData:{},
        modalShow:'',
        _animationData:{},
        _modalShow:'',
        orderAmount:'2',
        menuList:[
            {
                id:1,
                imgUrl:'../../../static/images/my_15.png',
                pageUrl:''
            },
            {
                id:2,
                imgUrl:'../../../static/images/my_17.png',
                pageUrl:''
            },
            {
                id:3,
                imgUrl:'../../../static/images/my_19.png',
                pageUrl:'../birthManager/birthManager'
            },
            {
                id:4,
                imgUrl:'../../../static/images/my_19.png',
                pageUrl:'../birthManager/birthManager'
            },
        ],
        userList:[
            {
                id:1,
                uListTitle:'门店支付',
                pageUrl: '../order/order'

            },
            {
                id:2,
                uListTitle:'我的订单',
                pageUrl: '../order/order'
            },
            {
                id:3,
                uListTitle:'余额充值',
                pageUrl: '../charge/charge'

            },
            {
                id:4,
                uListTitle:'购物车',
                pageUrl: '../order/order'

            },
            {
                id:5,
                uListTitle:'电子发票',
                pageUrl:'../order/order'
            },
            {
                id:6,
                uListTitle:'交易明细',
                pageUrl:'../chargeDetail/chargeDetail'
            },
            {
                id:7,
                uListTitle:'设置',
                pageUrl: '../set/set'
            },
        ]
    },
    onLoad: function (options) {
    },
    onReady: function () {
    },
    onShow: function () {
    },
    onHide: function () {
        // 页面隐藏
    },
    onUnload: function () {
        // 页面关闭
    },
    goToPage:function(e){
        var pageUrl = e.currentTarget.dataset.id;
        wx.navigateTo({
        url: pageUrl,
        })
    },
    showCmpView:function () {
        // this.showModal('animationData');
        this.showModal();
    },
    showModal:function () {
        console.log("1111");
        var animation = wx.createAnimation({
            duration:100,
            timingFunction:"linear",
            delay:0
        })
        this.animation = animation;
        animation.translateY(300).step();
        this.setData({
            animationData:animation.export(),
            modalShow:true
        })
        setTimeout(function () {
            animation.translateY(0).step();
            this.setData({
                animationData:animation.export(),
                modalShow:true
            })
        }.bind(this,100))
    },
    modalHide:function () {
        this.hideModal();
    },
    hideModal:function () {
        console.log("2222");
        var animation = wx.createAnimation({
            duration:100,
            timingFunction:"linear",
            delay:0
        })
        this.animation = animation;
        animation.translateY(300).step();
        this.setData({
            animationData:animation.export(),
            modalShow:false
        })
        setTimeout(function () {
            animation.translateY(0).step();
            this.setData({
                animationData:animation.export(),
                modalShow:false
            })
        }.bind(this,100))
    },

    clickMe:function () {
        // this.showModal('animationData');
        this._showModal();
    },
    _showModal:function () {
        console.log("1111");
        var animation = wx.createAnimation({
            duration:100,
            timingFunction:"linear",
            delay:0
        })
        this.animation = animation;
        animation.translateY(300).step();
        this.setData({
            _animationData:animation.export(),
            _modalShow:true
        })
        setTimeout(function () {
            animation.translateY(0).step();
            this.setData({
                _animationData:animation.export(),
                _modalShow:true
            })
        }.bind(this,100))
    },
    _modalHide:function () {
        this._hideModal();
    },
    _hideModal:function () {
        console.log("2222");
        var animation = wx.createAnimation({
            duration:100,
            timingFunction:"linear",
            delay:0
        })
        this.animation = animation;
        animation.translateY(300).step();
        this.setData({
            _animationData:animation.export(),
            _modalShow:false
        })
        setTimeout(function () {
            animation.translateY(0).step();
            this.setData({
                _animationData:animation.export(),
                _modalShow:false
            })
        }.bind(this,100))
    },
})