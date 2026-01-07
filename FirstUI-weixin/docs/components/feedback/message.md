# Message 消息提示

顶部消息提示组件。

## 引入

```json
{
  "usingComponents": {
    "fui-message": "/components/firstui/fui-message/fui-message"
  }
}
```

## 代码演示

### 基础用法

```html
<fui-message id="fui-message"></fui-message>
```

```js
Page({
  showMessage() {
    this.selectComponent('#fui-message').show({
      text: '这是一条消息提示'
    })
  }
})
```

### 不同类型

```js
// 成功消息
this.selectComponent('#fui-message').show({
  text: '操作成功',
  type: 'success'
})

// 警告消息
this.selectComponent('#fui-message').show({
  text: '警告信息',
  type: 'warning'
})

// 错误消息
this.selectComponent('#fui-message').show({
  text: '错误信息',
  type: 'error'
})
```

## Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| zIndex | z-index | Number | `1001` |

## Methods

### show(options)

显示消息。

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| text | 提示文字 | String | - |
| type | 类型 `success` `warning` `error` `info` | String | `info` |
| duration | 显示时长 | Number | `2000` |
