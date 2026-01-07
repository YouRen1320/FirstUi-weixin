# ActionSheet 上拉菜单

上拉菜单组件。

## 引入

```json
{
  "usingComponents": {
    "fui-actionsheet": "/components/firstui/fui-actionsheet/fui-actionsheet"
  }
}
```

## 代码演示

### 基础用法

```html
<fui-actionsheet 
  show="{{show}}"
  itemList="{{itemList}}"
  bind:click="onClick"
  bind:cancel="onCancel">
</fui-actionsheet>
```

```js
Page({
  data: {
    show: false,
    itemList: [
      { text: '选项1' },
      { text: '选项2' },
      { text: '选项3' }
    ]
  }
})
```

### 带标题

```html
<fui-actionsheet 
  show="{{show}}"
  title="请选择"
  itemList="{{itemList}}">
</fui-actionsheet>
```

## Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| show | 是否显示 | Boolean | `false` |
| itemList | 菜单项列表 | Array | `[]` |
| title | 标题 | String | - |
| cancelText | 取消按钮文字 | String | `取消` |
| showCancel | 是否显示取消按钮 | Boolean | `true` |

## Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 点击菜单项时触发 | `{ index, item }` |
| cancel | 点击取消时触发 | - |
