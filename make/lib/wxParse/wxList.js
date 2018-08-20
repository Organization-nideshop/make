///////弹出框
function showModal(type, target) {
  var that = target;
  // 显示遮罩层 type 1商品规格弹出框 2购物车弹出框
  var animation = wx.createAnimation({
    duration: 200,
    timingFunction: "linear",
    delay: 0
  })
  that.animation = animation
  animation.translateY(300).step()

  if (parseInt(type) == 1) {
    that.data.specPopupData.animationData = animation.export(),
      that.data.specPopupData.showModalStatus1 = true;
    that.setData({
      specPopupData: that.data.specPopupData
    })
  } else {
    that.data.cartPopupData.animationData = animation.export(),
      that.data.cartPopupData.showModalStatus2 = true;
    that.setData({
      cartPopupData: that.data.cartPopupData
    })
  }

  setTimeout(function() {
    animation.translateY(0).step()
    if (parseInt(type) == 1) {
      that.data.specPopupData.animationData = animation.export(),
        that.setData({
          specPopupData: that.data.specPopupData
        })
    } else {
      that.data.cartPopupData.animationData = animation.export(),
        that.setData({
          cartPopupData: that.data.cartPopupData
        })
    }

  }.bind(that), 200)
}

function hideModal(type, target) {
  var that = target;
  // 隐藏遮罩层
  var animation = wx.createAnimation({
    duration: 200,
    timingFunction: "linear",
    delay: 0
  })
  that.animation = animation
  animation.translateY(300).step()
  if (parseInt(type) == 1) {
    that.data.specPopupData.animationData = animation.export(),
      that.setData({
        specPopupData: that.data.specPopupData
      })
  } else {
    that.data.cartPopupData.animationData = animation.export(),
      that.setData({
        cartPopupData: that.data.cartPopupData
      })
  }

  that.setData({
    animationData: animation.export(),
  })
  setTimeout(function() {
    animation.translateY(0).step()
    if (parseInt(type) == 1) {
      that.data.specPopupData.animationData = animation.export(),
        that.data.specPopupData.showModalStatus1 = false;
      that.setData({
        specPopupData: that.data.specPopupData
      })
    } else {
      that.data.cartPopupData.animationData = animation.export(),
        that.data.cartPopupData.showModalStatus2 = false;
      that.setData({
        cartPopupData: that.data.cartPopupData
      })
    }
  }.bind(that), 200)
}

///////加减规格
function addNumber(itemIndex, itemCategoryid, itemSubid, target) {
  var that = target
  var spec = that.data.currentCategory.goodList[itemIndex].spec;
  if (typeof(spec) != "undefined" && spec.length > 0) {
    showModal(1, that);
  } else {
    // 添加数量
    var goodItem = that.data.currentCategory.goodList[itemIndex]
    let number = parseInt(goodItem.number) + 1;
    goodItem.number = number;
    that.setData({
      currentCategory: that.data.currentCategory
    });
    // 购物车添加数量
    updateCarts(goodItem.id, number, that);
  }
}

function cutNumber(itemIndex, itemCategoryid, itemSubid, target) {
  var that = target
  var spec = that.data.currentCategory.goodList[itemIndex].spec;
  if (typeof(spec) != "undefined" && spec.length > 0) {
    showModal(1, this);
  } else {
    // 减少数量
    var goodItem = that.data.currentCategory.goodList[itemIndex]
    let number = (parseInt(goodItem.number) - 1 > -1) ? parseInt(goodItem.number) - 1 : 0;
    goodItem.number = number;
    that.setData({
      currentCategory: that.data.currentCategory
    });
    // 购物车减少数量
    updateCarts(goodItem.id, number, that);
  }
}
//////更新购物车
function updateCarts(id, number, target) {
  var that = target;
  for (var i = 0; i < that.data.cartGoods.length; i++) {
    if (id == that.data.cartGoods[i].id)
      that.data.cartGoods[i].number = number;
  }
  //计算购物车总数量
  getAll(that);
}
/////计算总数量
function getAll(target) {
  var that = target;
  var price = 0.00;
  var disprice = 0.00;
  var cartNumber = 0;
  for (var i = 0; i < that.data.cartGoods.length; i++) {
    price += (parseInt(that.data.cartGoods[i].number) * parseInt(that.data.cartGoods[i].price_info));
    disprice += (parseInt(that.data.cartGoods[i].number) * (parseInt(that.data.cartGoods[i].old_price_info) - parseInt(that.data.cartGoods[i].price_info)));
    cartNumber += parseInt(that.data.cartGoods[i].number);

  }
  that.setData({
    totalPrice: price.toFixed(2),
    totalDisprice: disprice.toFixed(2),
    cartNumber: cartNumber
  })
}

//////排序
function openSortFilter(currentId, target) {
  var that = target;
  switch (currentId) {
    case 'salesSort':
      that.setData({
        'currentSortType': 'sales',
        'categoryFilter': false
      });

      // that.getGoodsList();
      break;
    case 'priceSort':
      let tmpSortOrder = 'asc';
      if (that.data.currentSortOrder == 'asc') {
        tmpSortOrder = 'desc';
      }
      that.setData({
        'currentSortType': 'price',
        'currentSortOrder': tmpSortOrder,
        'categoryFilter': false
      });

      // that.getGoodsList();
      break;
    default:
      //综合排序
      that.setData({
        'currentSortType': 'default',
        'categoryFilter': false
      });
      // that.getGoodsList();
  }
}

module.exports = {
  showModal: showModal,
  hideModal: hideModal,
  addNumber: addNumber,
  cutNumber: cutNumber,
  updateCarts: updateCarts,
  getAll: getAll,
  openSortFilter: openSortFilter,
}