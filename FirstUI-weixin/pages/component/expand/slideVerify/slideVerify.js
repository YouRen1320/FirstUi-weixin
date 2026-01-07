
let sv
Page({
  onReady:function(){
    sv = this.selectComponent('#sv')
  },
  vip() {
    wx.fui.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
  },
  success() {
    wx.fui.toast('验证通过！')
  },
  fail() {
    wx.fui.toast('验证失败！')
  },
  reset() {
    sv && sv.reset()
    wx.fui.toast('重置成功！')
  }
})