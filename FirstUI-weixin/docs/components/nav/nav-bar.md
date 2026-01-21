# NavBar 导航栏

顶部导航栏，支持自定义内容。

## 基础使用

```html
<fui-nav-bar title="标题"></fui-nav-bar>
```

## 带返回按钮与菜单

```html
<fui-nav-bar title="标题" bindleftClick="back" bindrightClick="menu">
  <fui-icon name="arrowleft" slot="left"></fui-icon>
  <fui-icon name="plus" slot="right"></fui-icon>
</fui-nav-bar>
```

## 自定义内容

```html
<fui-nav-bar custom>
  <view>自定义搜索栏...</view>
</fui-nav-bar>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| title | 标题 | string | - | - |
| background | 背景颜色 | string | - | - |
| color | 标题颜色 | string | - | - |
| splitLine | 是否显示分割线 | boolean | false | - |
| statusBar | 是否预留状态栏高度 | boolean | true | - |
| isFixed | 是否固定在顶部 | boolean | false | - |
| custom | 是否自定义内容 | boolean | false | - |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| leftClick | 点击左侧区域触发 | - |
| rightClick | 点击右侧区域触发 | - |
| titleClick | 点击标题触发 | - |
| init | 初始化完成触发 | `{ windowWidth, height, statusBarHeight, left, btnWidth, btnHeight }` |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| default | 中间内容 (custom=true) |
| left | 左侧内容 |
| right | 右侧内容 |
