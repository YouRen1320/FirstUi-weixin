
Page({
  onInput(e) {
    //e.detail.value
    console.log(e.detail)
  },
  onComplete(e) {
    //e.detail.value
    console.log(e.detail)
    wx.fui.toast(`您输入的验证码为：${e.detail.value}`)
  },
  vip() {
    wx.fui.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
  }
})