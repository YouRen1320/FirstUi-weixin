
import richtext from './index.js'
Page({
  data: {
    html: richtext.html,
    md: richtext.md
  },

  vip() {
    wx.fui.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
  },
  preview(e) {
    console.log(e.detail)
  },
  atap(e) {
    console.log(e)
    wx.fui.toast(e.detail.value)
  }
})