Page({
    data:{
        comingDate:'222',
        relationship:'母亲',
        birthday:'06月12日',
        constellation:'双子座',
        remindDate:'2',
        addInfoTips:'添加生日信息后，会提前收到消息提醒！去添加那个TA吧~'
    },
    showBirthDetails:function () {
        wx.navigateTo({
            url:'../birthDetails/birthDetails'
        })
    },
    goToAddBirthday:function (e) {
        var url = e.currentTarget.dataset.id;
        wx.navigateTo({
            url:url
        })
    }
})