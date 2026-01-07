
Page({
  data: {
    resUrl: wx.fui.resUrl(),
    ques: [
      '我只想用某个组件可以吗？',
      '某些平台当我使用 textarea 等组件时层级太高遮挡其他组件，如何解决？',
      '为什么文档或示例中有些组件在GitHub或npm下载的包中无法找到？',
      '组件支持Nvue、支付宝小程序...吗？',
      '组件支持vue3吗？'
    ],
    bugs: [
      '方法未定义?',
      '编译到微信小程序样式混乱?',
      '编译到微信小程序报错?',
      '小程序运行报错?'
    ],
    members: [
      '开源版与商业版有什么区别?',
      '会员除了获取商业版组件源码外与非会员有什么其他优势？',
      '个人会员和企业会员有什么区别？',
      '商业版本的版权解释说明是什么？',
      '如何开通会员，会员源码如何获取?',
      '会员的有效期是多久?',
      '能否代购商业授权？',
      '购买会员可以开发票吗？'
    ]
  },
  search() {
    wx.fui.toast('暂不提供搜索功能~')
  },
  href(e) {
    let type = Number(e.currentTarget.dataset.type)
    if (type === 1) {
      wx.fui.href('../webview/webview')
    } else if (type === 2) {
      wx.fui.href('../updated/updated')
    } else {
      wx.fui.href('../vip/vip')
    }
  },
  detail(e) {
    let dataset = e.currentTarget.dataset
    wx.fui.href(`../qa/qa?index=${dataset.index}&title=${dataset.title}`)
  }
})