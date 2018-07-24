Page({
    data:{
        _num:0,
        balance:5.62,
        consumeTime:'2018-5-25 14:20',
        consumePlace:'消费店（陕西）',
        consumeMoney:'19.80'
    },
    toggle:function (e) {
        console.log(e.currentTarget.dataset.num)
        this.setData({
            _num:e.currentTarget.dataset.num
        })
    }
})