
Page({
  vip() {
    wx.fui.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
  },
  href(e) {
    let type = Number(e.currentTarget.dataset.type)
    wx.fui.href(`../result-eg/result-eg?type=${type}`)
  }
})