
Page({
  data: {
    panelData: {
      src: '/static/images/common/img_logo.png',
      title: '基础使用',
      desc: 'First UI组件库，是基于uni-app开发的一款轻量、全面可靠的跨平台移动端组件库。'
    },
    panelData2: {
      head: '带标题的列表',
      src: '/static/images/common/logo.png',
      title: 'First UI组件库',
      desc: 'First UI是一套基于uni-app开发的组件化、可复用、易扩展、低耦合的跨平台移动端UI 组件库。'
    },
    panelData3: {
      head: 'First UI介绍',
      list: [{
        src: '/static/images/common/logo.png',
        title: 'First UI组件库',
        desc: 'First UI 是一套基于uni-app开发的组件化、可复用、易扩展、低耦合的跨平台移动端UI 组件库。'
      }, {
        src: '/static/images/common/logo.png',
        title: 'First UI跨平台UI组件库',
        desc: 'First UI组件库，是基于uni-app开发的一款轻量、全面可靠的跨平台移动端组件库。'
      }]
    },
    panelData4: {
      head: '设置图片大小',
      list: [{
        src: '/static/images/common/img_logo.png',
        title: 'First UI组件库'
      }, {
        src: '/static/images/common/img_logo.png',
        title: 'First UI跨平台UI组件库'
      }]
    },
    panelData5: {
      head: '附加信息',
      list: [{
        title: 'First UI组件库',
        desc: 'First UI组件库，是基于uni-app开发的一款轻量、全面可靠的跨平台移动端组件库。',
        source: '开源中国',
        time: '2021-08-09'
      }, {
        title: 'First UI跨平台UI组件库',
        desc: 'First UI组件库，是基于uni-app开发的一款轻量、全面可靠的跨平台移动端组件库。',
        source: 'GitHub',
        time: '2021-08-09',
        extra: 'Apache License 2.0'
      }]
    }
  },
  itemClick(e) {
    console.log(e)
  },
  vip() {
    wx.fui.href("/pages/my/qa/qa?index=2&title=VIP专属内容")
  }
})