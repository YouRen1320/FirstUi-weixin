# Tabbar 标签栏

底部标签栏组件。

## 引入

```json
{
  "usingComponents": {
    "fui-tabbar": "/components/firstui/fui-tabbar/fui-tabbar"
  }
}
```

## 代码演示

### 基础用法

```html
<fui-tabbar 
  tabbar="{{tabbar}}" 
  current="{{0}}"
  bind:click="onTabChange">
</fui-tabbar>
```

```js
Page({
  data: {
    tabbar: [
      { text: '首页', icon: 'home', selectedIcon: 'home-fill' },
      { text: '分类', icon: 'category', selectedIcon: 'category-fill' },
      { text: '购物车', icon: 'cart', selectedIcon: 'cart-fill' },
      { text: '我的', icon: 'my', selectedIcon: 'my-fill' }
    ]
  }
})
```

### 带徽章

```html
<fui-tabbar 
  tabbar="{{tabbar}}"
  current="{{0}}">
</fui-tabbar>
```

```js
Page({
  data: {
    tabbar: [
      { text: '首页', icon: 'home' },
      { text: '消息', icon: 'message', badge: '99+' },
      { text: '我的', icon: 'my', dot: true }
    ]
  }
})
```

## Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| tabbar | 标签栏数据 | Array | `[]` |
| current | 当前选中索引 | Number | `0` |
| color | 默认文字颜色 | String | `#333` |
| activeColor | 选中态文字颜色 | String | `#5B8FF9` |
| background | 背景色 | String | `#fff` |
| isFixed | 是否固定在底部 | Boolean | `true` |
| safeArea | 是否适配安全区域 | Boolean | `true` |

## Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 点击标签时触发 | `{ index, item }` |
