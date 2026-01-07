
import layoutData from './layout.data.js';
Page({
  data: {
    layoutData: layoutData,
    resUrl: wx.fui.resUrl()
  },
  href(e) {
    let page = e.currentTarget.dataset.page
    if(page){
      wx.fui.href(page)
    }else{
      wx.fui.href('/pages/common/coding/coding')
    }
  },
  vip(){
    wx.fui.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
  },
  onShareAppMessage: function () {
    return {
      title: 'First UI组件库'
    }
  }
})