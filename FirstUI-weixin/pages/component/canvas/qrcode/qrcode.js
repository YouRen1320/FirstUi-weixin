
Page({
  data: {
    val: 'https://doc.firstui.cn',
    value: ''
  },
  onLoad() {
    this.setData({
      value: this.data.val
    })
  },
  vip() {
    wx.fui.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
  },
  qrcode() {
    this.setData({
      value: this.data.val
    })
  }
})