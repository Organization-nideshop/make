var getDate= new Date();
Page({
    data:{
        date:'1988-6-22',
        myDate:getDate.getFullYear() + '-' + (getDate.getMonth() + 1) + '-' + getDate.getDate(),
    },
    bindDateChange:function (e) {
        console.log('picker发送选择改变，携带值为', e.detail.value);
        console.log(this.data.myDate);
        this.setData({
            date: e.detail.value,
        })
    },
})