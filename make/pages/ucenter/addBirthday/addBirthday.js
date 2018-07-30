var getDate= new Date();

const date = new Date()
const years = []
const months = []
const days = []

for (let i = 1900; i <= date.getFullYear(); i++) {
    years.push(i)
}

for (let i = 1 ; i <= 12; i++) {
    months.push(i)
}

for (let i = 1 ; i <= 31; i++) {
    days.push(i)
}

Page({
    data:{
        /*date:'',
        myDate:getDate.getFullYear() + '-' + (getDate.getMonth() + 1) + '-' + getDate.getDate(),
        showTips:'block'*/
        years: years,
        months: months,
        days: days,
        showDate:'',
        value: [9999, 1, 1],
        showTips:'block',
        // showPicker:'none'
    },
    goToPage:function (e) {
        var url = e.currentTarget.dataset.id;
        wx.navigateTo({
            url:url
        })
    },
    /*bindDateChange:function (e) {
        console.log('picker发送选择改变，携带值为', e.detail.value);
        console.log(this.data.myDate);
        this.setData({
            date: e.detail.value,
            showTips:'none'
        })
    },*/
    onLoad:function () {
        console.log(this.data.myDate+"biaoji");
    },

    bindChange: function(e) {
        const val = e.detail.value
        this.setData({
            /*year: this.data.years[val[0]],
            month: this.data.months[val[1]],
            day: this.data.days[val[2]],*/
            showDate: this.data.years[val[0]]+'-'+this.data.months[val[1]]+'-'+this.data.days[val[2]],
            showTips:'none',
            // showPicker:'none'
        })
    },
    /*showPicker:function () {
        this.setData({
            showPicker:'block'
        })
    }*/
    showPicker:function () {
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
})