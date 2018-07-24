Page({
    data:{
        items:[
            {name:'section1',value:'充100赠5元',checked:true},
            {name:'section2',value:'充200赠20元'},
            {name:'section3',value:'充300赠40元'},
            {name:'section4',value:'充500赠75元'},
        ],
        chargeTips:[
            {value:'充值成功后会员卡余额实时到账，不能提现、退款；'},
            {value:'所赠电子券自动发放到“优惠券”；'},
            {value:'电子券只有首次充值才送，之后不再赠送；'},
            {value:'使用充值卡充值不享受任何充值赠送。'},
        ],
        animationData:{},
        modalShow:'',
        animationData_:{},
        codeModalShow:''
    },
    goToCharge:function () {
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

    goToCodeCharge:function () {
        this.showCodeChargeModal();
    },
    showCodeChargeModal:function () {
        var animation = wx.createAnimation({
            duration:100,
            timingFunction:"linear",
            delay:0
        })
        this.animation = animation;
        animation.translateY(300).step();
        this.setData({
            animationData_:animation.export(),
            codeModalShow:true
        })
        setTimeout(function () {
            animation.translateY(0).step();
            this.setData({
                animationData_:animation.export(),
                codeModalShow:true
            })
        }.bind(this,100))
    },
    codeModalHide:function () {
        this.hideCodeModal();
    },
    hideCodeModal:function () {
        console.log("2222");
        var animation = wx.createAnimation({
            duration:100,
            timingFunction:"linear",
            delay:0
        })
        this.animation = animation;
        animation.translateY(300).step();
        this.setData({
            animationData_:animation.export(),
            codeModalShow:false
        })
        setTimeout(function () {
            animation.translateY(0).step();
            this.setData({
                animationData_:animation.export(),
                codeModalShow:false
            })
        }.bind(this,100))
    },
})