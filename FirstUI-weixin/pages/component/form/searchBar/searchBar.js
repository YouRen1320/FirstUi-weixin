
Page({
  vip() {
    wx.fui.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
  },
  search(e) {
    //输入框值
    console.log(e.detail.value)
    wx.fui.toast(`搜索关键词:${e.detail.value}`)
    //搜索逻辑自行处理
    //...
  },
  onClick() {
    wx.fui.toast('跳转至搜索页面~')
  },
  back(){
    wx.navigateBack()
  }
})