
import $fui from '../../../../components/firstui/fui-clipboard/index';
Page({
  copy(e) {
    const text = "www.firstui.cn"
    $fui.getClipboardData(text, res => {
      if (res) {
        wx.fui.toast('官网地址复制成功');
      }
    });
  },
  copyText(e) {
    let text = e.currentTarget.dataset.text
    $fui.getClipboardData(text, res => {
      if (res) {
        wx.fui.toast('文档地址复制成功');
      }
    });
  },
  vip() {
    wx.fui.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
  }
})