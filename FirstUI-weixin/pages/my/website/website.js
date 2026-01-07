
import $fui from '../../../components/firstui/fui-clipboard/index';
Page({
  data: {
    resUrl: wx.fui.resUrl(),
    links: [{
      img: 'website',
      name: 'First UI 官网地址',
      link: 'https://www.firstui.cn/'
    }, {
      img: 'file',
      name: 'First UI 文档地址',
      link: 'https://doc.firstui.cn/'
    }, {
      img: 'github',
      name: 'GitHub 地址',
      link: 'https://github.com/FirstUI/FirstUI'
    }, {
      img: 'uni',
      name: 'UniApp 插件市场地址',
      link: 'https://ext.dcloud.net.cn/publisher?id=766365'
    }]
  },
  getLink(e) {
    const item = this.data.links[e.detail.index]
    $fui.getClipboardData(item.link, res => {
      wx.fui.toast(`${item.name}复制成功`);
    });
  }
})