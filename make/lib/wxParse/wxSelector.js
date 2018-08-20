//时间选择器——打开
function showModal(target) {
  var that = target;
  var animation = wx.createAnimation({
    duration: 100,
    timingFunction: "linear",
    delay: 0
  })
  that.animation = animation;
  animation.translateY(300).step();
  that.data.dateSelectorData.animationData = animation.export();
  that.data.dateSelectorData.modalShow = true;

  that.setData({
    dateSelectorData: that.data.dateSelectorData
  })
  setTimeout(function () {
    animation.translateY(0).step();
    that.data.dateSelectorData.animationData = animation.export();
    that.setData({
      dateSelectorData: that.data.dateSelectorData
    })
  }.bind(that, 100))
}
//时间选择器——关闭&确定
function hideModal(type,target) {
  var that = target;
  
  if (type==1){
    const val = that.data.dateSelectorData.value;
    let year = that.data.dateSelectorData.years[val[0]];
    let month = that.data.dateSelectorData.months[val[1]];
    let day = that.data.dateSelectorData.days[val[2]];
    let hour = that.data.dateSelectorData.hours[val[3]]
    that.setData({
      showDate: year + '-' + month + '-' + day + ' ' + hour,
    })
 }

  var animation = wx.createAnimation({
    duration: 100,
    timingFunction: "linear",
    delay: 0
  })
  that.animation = animation;
  animation.translateY(300).step();

  that.data.dateSelectorData.modalShow = false;
  that.data.dateSelectorData.animationData = animation.export();
  that.setData({
    dateSelectorData: that.data.dateSelectorData
  })
  setTimeout(function () {
    animation.translateY(0).step();
    that.data.dateSelectorData.animationData = animation.export();
    that.setData({
      dateSelectorData: that.data.dateSelectorData
    })
  }.bind(that, 100))
}
//时间选择器——获取年月日
function getTimes(target) {
  var that = target;
  const date = new Date();
  const years = [];

  that.data.dateSelectorData.value[0] = date.getFullYear() - that.data.dateSelectorData.year;
  for (let i = that.data.dateSelectorData.year; i <= date.getFullYear(); i++) {
    years.push(i)
  }
  that.data.dateSelectorData.years = years;
  that.data.dateSelectorData.value = that.data.dateSelectorData.value;
  that.setData({
    dateSelectorData: that.data.dateSelectorData
  });
  //时间选择器——获取月日时
  getTime(target);
}

function getTime(target) {
  var that = target;
  var year = that.data.dateSelectorData.year;
  var month = that.data.dateSelectorData.month;
  var day = that.data.dateSelectorData.day;

  const date = new Date();
  const months = [];
  const days = [];
  const hours = [];
  //月
  var limtMonth = year == date.getFullYear() ? (date.getMonth() + 1) : 12;
  for (let i = 1; i <= limtMonth; i++) {
    months.push(i < 10 ? "0" + i.toString() : i.toString())
  }
  // 日
  var d = new Date(year, month, 0);
  var limtDay = (year == date.getFullYear() && month == date.getMonth() + 1) ? date.getDate() : d.getDate();
  for (let i = 1; i <= limtDay; i++) {
    days.push(i < 10 ? "0" + i.toString() : i.toString())
  }
  //时
  var limtDay = (year == date.getFullYear() && month == date.getMonth() + 1 && day == date.getDate()) ? date.getHours() : 24;
  for (let i = 1; i <= limtDay; i++) {
    hours.push(i < 10 ? "0" + i.toString() : i.toString())
  }

  that.data.dateSelectorData.months = months;
  that.data.dateSelectorData.days = days;
  that.data.dateSelectorData.hours = hours;
  that.setData({
    dateSelectorData: that.data.dateSelectorData
  });
}
//时间选择器——选择变化
function bindChange( val,target) {
  var that = target;
  var year = that.data.dateSelectorData.years[val[0]];
  var month = that.data.dateSelectorData.months[val[1]];
  var day = that.data.dateSelectorData.days[val[2]];
  var hour = that.data.dateSelectorData.hours[val[3]];

  var old_year = that.data.dateSelectorData.year;
  var old_month = that.data.dateSelectorData.month;
  var old_day = that.data.dateSelectorData.day;
  var old_hour = that.data.dateSelectorData.hour;

  that.data.dateSelectorData.year = year;
  that.data.dateSelectorData.month = month;
  that.data.dateSelectorData.day = day;
  that.data.dateSelectorData.hour = hour;
  that.data.dateSelectorData.value = val;

  that.setData({
    dateSelectorData: that.data.dateSelectorData,
  });

  if (old_year != year || old_month != month || old_day != day) {
    //时间选择器——获取月日时
    getTime(target);
  }
}

module.exports = {
  showModal: showModal,
  hideModal: hideModal,
  getTimes: getTimes,
  getTime: getTime,
  bindChange:bindChange,
}