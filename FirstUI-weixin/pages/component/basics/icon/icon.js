
import icons from './index.js';
import $fui from '../../../../components/firstui/fui-clipboard/index';
Page({
  data: {
    icons: icons
  },
  getName(e) {
    const name = this.data.icons[e.detail.index]
    if (!name) return;
    $fui.getClipboardData(name, res => {
      wx.fui.toast('图标名称复制成功');
    });
  }
})