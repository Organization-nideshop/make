var wxSelector = require('../../../lib/wxParse/wxSelector.js');

Page({
    data:{
        showDate: '',
        dateSelectorData:{
          modalShow:false,
          animationData:null,
          value: [9999, 0, 0, 0],
          year: 1900,
          month: '01',
          day: '01',
          hour: '01',
          years: [],
          months: [],
          days: [],
          hours: [],
      }//时间选择器——数据
    },
    goToPage:function (e) {
        var url = e.currentTarget.dataset.id;
        wx.navigateTo({
            url:url
        })
    },
    onLoad:function () {
      wx.setNavigationBarTitle({
        title: '添加TA的生日'
      });
      //时间选择器——数据
      wxSelector.getTimes(this);
    },
    bindChange: function (e) {
      //时间选择器——变化
      const val = e.detail.value;
      wxSelector.bindChange(val,this);
    },
    showPicker:function () {
      //时间选择器——打开
      wxSelector.showModal(this);
    },
    hidePicker: function (event) {
      //时间选择器——关闭
      let type=event.currentTarget.dataset.key;
      wxSelector.hideModal(type,this);
    },
    
})