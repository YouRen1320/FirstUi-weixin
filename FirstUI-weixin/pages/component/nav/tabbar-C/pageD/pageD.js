
import $fui from '../../../../../components/firstui/fui-clipboard/index';
let app = getApp()
Component({
  properties: {

  },
  data: {
    version: app.globalData.version
  },
  methods: {
    getLink(e) {
      $fui.getClipboardData('https://github.com/FirstUI/FirstUI', res => {
        wx.fui.toast('GitHub地址复制成功');
      });
    },
    href(e){
      let page=e.currentTarget.dataset.page
      wx.fui.href(page)
    }
  }
})