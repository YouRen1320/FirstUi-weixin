
import $fui from '../../../components/firstui/fui-clipboard/index';
Page({
  data: {
    resUrl: wx.fui.resUrl(),
    menus: [{
      text: '分享好友',
      background: '#F2FCF6',
      src: 'share',
      page: '/pages/my/share/share'
    }, {
      text: '赞赏FirstUI',
      background: '#FFFBF2',
      src: 'appreciate',
      page: 'appreciate'
    }, {
      text: '意见反馈',
      background: '#F6F7FF',
      src: 'proposal',
      page: 'feedback'
    }, {
      text: '我要合作',
      background: '#FFF4F4',
      src: 'cooperation',
      page: '/pages/my/cooperate/cooperate'
    }],
    list: [{
      text: '功能介绍',
      src: 'edition',
      page: '/pages/my/updated/updated'
    }, {
      text: '开源地址',
      src: 'address',
      page: '/pages/my/website/website'
    }, {
      text: '帮助中心',
      src: 'help',
      page: '/pages/my/help/help'
    }, {
      text: '关于我们',
      src: 'aboutus',
      page: '/pages/my/about/about'
    }]
  },
  href(e) {
    let page = e.currentTarget.dataset.page
    if (page === 'appreciate') {
      let urls = `${this.data.resUrl}/common/img_wxpay.png`
      wx.previewImage({
        urls: [urls]
      });
    } else {
      if (page === 'feedback') return;
      wx.fui.href(page)
    }
  },
  getLink(e) {
    let link = e.currentTarget.dataset.link
    $fui.getClipboardData(link, res => {
      wx.fui.toast('链接复制成功');
    });
  },
  onShareAppMessage: function () {
    return {
      title: 'First UI组件库'
    }
  }
})