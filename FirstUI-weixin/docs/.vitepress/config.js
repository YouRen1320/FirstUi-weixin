import { defineConfig } from "vitepress";

export default defineConfig({
  title: "FirstUI",
  description: "FirstUI 微信小程序组件库文档",
  lang: "zh-CN",

  themeConfig: {
    logo: "/logo.png",

    nav: [
      { text: "指南", link: "/guide/" },
      { text: "组件", link: "/components/basic/button" },
      {
        text: "相关链接",
        items: [
          { text: "官网", link: "https://www.firstui.cn" },
          { text: "GitHub", link: "https://github.com/FirstUI/FirstUI-weixin" },
        ],
      },
    ],

    sidebar: {
      "/guide/": [
        {
          text: "开始",
          items: [
            { text: "介绍", link: "/guide/" },
            { text: "安装", link: "/guide/installation" },
            { text: "快速上手", link: "/guide/quickstart" },
          ],
        },
      ],
      "/components/": [
        {
          text: "基础组件",
          collapsed: false,
          items: [
            { text: "Button 按钮", link: "/components/basic/button" },
            { text: "Icon 图标", link: "/components/basic/icon" },
            { text: "Text 文本", link: "/components/basic/text" },
            { text: "Badge 徽章", link: "/components/basic/badge" },
            { text: "Tag 标签", link: "/components/basic/tag" },
            { text: "Avatar 头像", link: "/components/basic/avatar" },
          ],
        },
        {
          text: "表单组件",
          collapsed: false,
          items: [
            { text: "Input 输入框", link: "/components/form/input" },
            { text: "Textarea 多行输入框", link: "/components/form/textarea" },
            { text: "Checkbox 复选框", link: "/components/form/checkbox" },
            { text: "Radio 单选框", link: "/components/form/radio" },
            { text: "Switch 开关", link: "/components/form/switch" },
            { text: "Picker 选择器", link: "/components/form/picker" },
            {
              text: "DatePicker 日期选择器",
              link: "/components/form/datepicker",
            },
            { text: "Upload 图片上传", link: "/components/form/upload" },
          ],
        },
        {
          text: "布局组件",
          collapsed: false,
          items: [
            { text: "Grid 宫格", link: "/components/layout/grid" },
            { text: "List 列表", link: "/components/layout/list" },
            { text: "Card 卡片", link: "/components/layout/card" },
            { text: "Panel 面板", link: "/components/layout/panel" },
            { text: "Collapse 折叠面板", link: "/components/layout/collapse" },
            { text: "Divider 分割线", link: "/components/layout/divider" },
          ],
        },
        {
          text: "导航组件",
          collapsed: false,
          items: [
            { text: "Tabs 标签页", link: "/components/navigation/tabs" },
            { text: "NavBar 导航栏", link: "/components/navigation/navbar" },
            { text: "Tabbar 标签栏", link: "/components/navigation/tabbar" },
            { text: "Steps 步骤条", link: "/components/navigation/steps" },
            {
              text: "Pagination 分页器",
              link: "/components/navigation/pagination",
            },
          ],
        },
        {
          text: "反馈组件",
          collapsed: false,
          items: [
            { text: "Toast 轻提示", link: "/components/feedback/toast" },
            { text: "Modal 模态框", link: "/components/feedback/modal" },
            { text: "Dialog 对话框", link: "/components/feedback/dialog" },
            { text: "Loading 加载", link: "/components/feedback/loading" },
            { text: "Message 消息提示", link: "/components/feedback/message" },
            {
              text: "ActionSheet 上拉菜单",
              link: "/components/feedback/actionsheet",
            },
          ],
        },
        {
          text: "数据展示",
          collapsed: false,
          items: [
            { text: "Table 表格", link: "/components/data/table" },
            { text: "Progress 进度条", link: "/components/data/progress" },
            { text: "Empty 空状态", link: "/components/data/empty" },
            { text: "Waterfall 瀑布流", link: "/components/data/waterfall" },
            { text: "Calendar 日历", link: "/components/data/calendar" },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/FirstUI/FirstUI-weixin" },
    ],

    footer: {
      message: "FirstUI 微信小程序组件库",
      copyright: "Copyright © 2024 FirstUI",
    },

    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      },
    },
  },
});
