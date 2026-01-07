
Page({
  vip() {
    wx.fui.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
  },
  href(e) {
    let type = Number(e.currentTarget.dataset.type)
    let url = type == 1 ? '../singleInput-A/singleInput-A' : '../singleInput-B/singleInput-B'
    wx.fui.href(url)
  },
  dk() {
    wx.fui.href('../digitalKeyboard/digitalKeyboard')
  }
})