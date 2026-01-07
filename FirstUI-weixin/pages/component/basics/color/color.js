
import colors from './index.js';
import $fui from '../../../../components/firstui/fui-clipboard/index';
Page({
  data: {
    colors: colors
  },
  getColor(e, color) {
    $fui.getClipboardData(color, res => {
      wx.fui.toast('颜色复制成功');
    });
  }
})