# Modal 模态框

模态框组件。

## 引入

```json
{
  "usingComponents": {
    "fui-modal": "/components/firstui/fui-modal/fui-modal"
  }
}
```

## 代码演示

### 基础用法

```html
<fui-modal 
  show="{{show}}" 
  title="标题"
  content="这是一段内容"
  bind:click="onClick">
</fui-modal>
```

### 自定义按钮

```html
<fui-modal 
  show="{{show}}"
  title="提示"
  content="确定要删除吗？"
  buttons="{{buttons}}"
  bind:click="onClick">
</fui-modal>
```

```js
Page({
  data: {
    buttons: [
      { text: '取消' },
      { text: '确定', color: '#5B8FF9' }
    ]
  }
})
```

### 自定义内容

```html
<fui-modal show="{{show}}">
  <view>自定义内容</view>
</fui-modal>
```

## Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| show | 是否显示 | Boolean | `false` |
| title | 标题 | String | `提示` |
| content | 内容 | String | - |
| buttons | 按钮列表 | Array | - |
| showCancel | 是否显示取消按钮 | Boolean | `true` |
| cancelText | 取消按钮文字 | String | `取消` |
| confirmText | 确认按钮文字 | String | `确定` |
| confirmColor | 确认按钮颜色 | String | `#5B8FF9` |
| top | 上下偏移距离 | String | - |
| padding | 内边距 | String | - |

## Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 点击按钮时触发 | `{ index }` |
| cancel | 点击取消按钮时触发 | - |
| confirm | 点击确认按钮时触发 | - |
| close | 关闭时触发 | - |

## Slots

| 名称 | 说明 |
| --- | --- |
| default | 自定义内容 |
