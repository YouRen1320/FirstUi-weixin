
import $fui from '../../../components/firstui/fui-clipboard/index';
Page({
  data: {
    resUrl: wx.fui.resUrl(),
    menus: [{
      icon: 'vip',
      title: 'VIP的优势？'
    }, {
      icon: 'difference',
      title: '商用版的区别？'
    }, {
      icon: 'date',
      title: 'VIP的有效期？'
    }],
    transShow: false,
    styles: {
      position: 'fixed',
      bottom: 0,
      top: 0,
      left: 0,
      right: 0,
      display: 'flex',
      'justify-content': 'center',
      'align-items': 'center',
      backgroundColor: 'rgba(0,0,0,0.6)'
    }
  },
  href(e) {
    let index = Number(e.currentTarget.dataset.index)
    let title = [
      '会员除了获取商业版组件源码外与非会员有什么其他优势？',
      '开源版与商业版有什么区别?',
      '会员的有效期是多久?'
    ][index];
    let idx = [10, 9, 14][index];
    wx.fui.href(`../qa/qa?index=${idx}&title=${title}`)
  },
  purchase() {
    this.setData({
      transShow: true
    })
  },
  handleClick() {
    this.setData({
      transShow: false
    })
  },
  getLink(e) {
    $fui.getClipboardData('https://www.firstui.cn/', res => {
      wx.fui.toast('链接复制成功');
      this.setData({
        transShow: false
      })
    });
  }
})