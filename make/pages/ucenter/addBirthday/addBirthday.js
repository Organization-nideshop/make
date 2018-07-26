var getDate= new Date();

const date = new Date()
const years = []
const months = []
const days = []

for (let i = 1990; i <= date.getFullYear(); i++) {
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
        showPicker:'none'
    },
    goToPage:function (e) {
        var url = e.currentTarget.dataset.id;
        wx.navigateTo({
            url:url
        })
    },
    bindDateChange:function (e) {
        console.log('picker发送选择改变，携带值为', e.detail.value);
        console.log(this.data.myDate);
        this.setData({
            date: e.detail.value,
            showTips:'none'
        })
    },
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
            showPicker:'none'
        })
    },
    showPicker:function () {
        this.setData({
            showPicker:'block'
        })
    }
})