
Page({
  onTap(e) {
    console.log(e.detail)
    wx.fui.toast(String(e.detail.text))
  }
})