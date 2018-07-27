//var signDate = [];
Page({
    data:{
        ischeck:0,
        animationData:{},
        modalShow:'',
        signDate:[{id:1,date:2}],
        date:[
            {day: '05/23'},
            {day: '05/24'},
            {day: '05/25'},
            {day: '05/26'},
            {day: '05/27'},
            {day: '05/28'},
            {day: '05/29'},
        ]
    },
    signIn:function () {
        this.setData({
            ischeck:1
        })
    },
    showSignRecords:function () {
        // this.showModal('animationData');
        this.showModal();
    },
    showModal:function () {
        this.createDate();
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
    backToPage:function () {
        wx.navigateBack({
            delta:1
        })
    },

    onLoad:function () {


    },createDate:function(){
        var that = this;
        var date = new Date();
        var days;
        var month = date.getMonth() + 1;
        console.log(month);
        if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
            days = 31;
        } else if (month == 2) {
            var year = date.getFullYear();
            if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
                days = 29;
            } else {
                days = 28;
            }
        } else {
            days = 30;
        }
        var jsonstr = [];
        for (var i = 0; i < days; i++) {

            
            //var jsonarray = eval('(' + jsonstr + ')');
            var arr =
                {
                    id: i,
                    date: i + 1
                }
            
            jsonstr.push(arr);
            //signDate.push(i+1);
        }
        that.setData({
          signDate: jsonstr
        })
        console.log(that.data.signDate)
    }
})