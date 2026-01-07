
Page({
  data: {
    items: [{
      text: 'First UI（App-vue）',
      src: '/static/images/common/logo.png'
    }, {
      text: 'First UI（App-Nvue）',
      src: '/static/images/common/logo.png'
    }, {
      text: 'First UI（微信小程序）',
      src: '/static/images/common/logo.png',
      //设置默认选中
			checked: true
    }, {
      text: 'First UI（支付宝小程序，禁用选择）',
      src: '/static/images/common/logo.png',
      disabled: true
    }, {
      text: 'First UI（百度小程序）',
      src: '/static/images/common/logo.png'
    }, {
      text: 'First UI（字节小程序）',
      src: '/static/images/common/logo.png'
    }, {
      text: 'First UI（QQ小程序）',
      src: '/static/images/common/logo.png'
    }, {
      text: 'First UI（H5）',
      src: '/static/images/common/icon_tabbar.png'
    }],
    //需要设置默认选中时使用items数据格式
    items1: ['中国银行', '中国建设银行', '中国工商银行', '中国农业银行', '中国邮政储蓄银行'],
    show: false,
    show1: false,
    type: 'select',
    result: ''
  },
  vip() {
    wx.fui.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
  },
  btnClick(e) {
    let type = Number(e.currentTarget.dataset.type)
    if (type === 2) {
      this.setData({
        show1: true
      })
    } else {
      this.setData({
        type: type === 1 ? 'select' : 'list'
      }, () => {
        setTimeout(() => {
          this.setData({
            show: true
          })
        }, 80)
      })
    }
  },
  onTap(e) {
    //仅type=list时有效
    console.log(e.detail)
    this.setData({
      result: JSON.stringify(e.detail)
    })
    this.onClose()

  },
  onConfirm(e) {
    //仅type=select时有效
    console.log(e.detail)
    this.setData({
      result: JSON.stringify(e.detail)
    })
    this.onClose()
  },
  onClose() {
    this.setData({
      show: false,
      show1: false
    })
  }
})