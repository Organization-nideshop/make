Page({
    data:{

    },
    goToPage:function (e) {
        var url = e.currentTarget.dataset.id;
        wx.navigateTo({
            url:url
        })
    }
})