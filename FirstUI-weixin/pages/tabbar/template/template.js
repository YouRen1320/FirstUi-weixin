
import templateData from './index.js';
Page({
  data: {
    resUrl: wx.fui.resUrl(),
    templateData: templateData
  },
  href(e) {
    let page = e.currentTarget.dataset.page
    if (page) {
      wx.navigateToMiniProgram({
        appId: 'wx2d7de1c876758f9c',
        path: page
      });
    } else {
      wx.navigateToMiniProgram({
        appId: 'wx2d7de1c876758f9c'
      });
    }
  },
  onShareAppMessage: function () {
    return {
      title: 'First UI组件库'
    }
  }
})