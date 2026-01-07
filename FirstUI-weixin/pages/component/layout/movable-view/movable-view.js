
Page({
  vip() {
    wx.fui.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
  },
  change(e){
    console.log(e.detail)
  },
  handleClick(){
    wx.fui.toast('点击了~')
  }
})