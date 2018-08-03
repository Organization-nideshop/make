Page({
    data:{
        selected:true,
        _selected:false,
        showList:null,
        couponInfo:[
            {
                id:1,
                price:10,
                couponName:'优惠券',
                couponCriteria:'全店满100元使用',
                beginDate:'2018年8月10日',
                endDate:'2018年8月10日',
                rules:
                    {
                        content: '1.10元蛋糕电子券2.可在微商城购买蛋糕类产品3.只可在米旗微商城使用4.一次仅可使用一张代金券'
                    }
                
            },
            {
                id:2,
                price:10,
                couponName:'优惠券',
                couponCriteria:'全店满100元使用',
                beginDate:'2018年8月10日',
                endDate:'2018年8月10日',
                rules:
                    {
                        content: '1.10元蛋糕电子券2.可在微商城购买蛋糕类产品3.只可在米旗微商城使用4.一次仅可使用一张代金券'
                    }
            }
        ],
        uselessCouponInfo:[
            {
                id:1,
                price:10,
                couponName:'优惠券',
                couponCriteria:'全店满200元使用',
                beginDate:'2018年8月10日',
                endDate:'2018年8月10日',
                rules:
                    {
                        content: '1.10元蛋糕电子券2.可在微商城购买蛋糕类产品3.只可在米旗微商城使用4.一次仅可使用一张代金券'
                    }

            },
            {
                id:2,
                price:10,
                couponName:'优惠券',
                couponCriteria:'全店满300元使用',
                beginDate:'2018年8月10日',
                endDate:'2018年8月10日',
                rules:
                    {
                        content: '1.10元蛋糕电子券2.可在微商城购买蛋糕类产品3.只可在米旗微商城使用4.一次仅可使用一张代金券'
                    }
            }
        ]
    },
    showCouponList:function () {
        this.setData({
            selected:true,
            _selected:false
        })
    },
    showUselessCoupon:function () {
        this.setData({
            selected:false,
            _selected:true
        })
    },
    showList:function (e) {
        var that=this;
        var id = e.currentTarget.dataset.id;
        if (that.data.showList===id){
          that.setData({
            showList: null
          })
        }else{
          that.setData({
            showList: id
          })
        } 
    }
})