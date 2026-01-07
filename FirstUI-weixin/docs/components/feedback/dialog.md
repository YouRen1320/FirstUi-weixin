# Dialog 对话框

对话框组件。

## 引入

```json
{
  "usingComponents": {
    "fui-dialog": "/components/firstui/fui-dialog/fui-dialog"
  }
}
```

## 代码演示

### 基础用法

```html
<fui-dialog 
  show="{{show}}"
  title="提示"
  content="确定要删除吗？"
  bind:click="onDialogClick">
</fui-dialog>
```

### 带输入框

```html
<fui-dialog 
  show="{{show}}"
  title="请输入"
  showInput
  bind:click="onDialogClick">
</fui-dialog>
```

## Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| show | 是否显示 | Boolean | `false` |
| title | 标题 | String | `提示` |
| content | 内容 | String | - |
| showCancel | 是否显示取消按钮 | Boolean | `true` |
| cancelText | 取消按钮文字 | String | `取消` |
| confirmText | 确认按钮文字 | String | `确定` |
| showInput | 是否显示输入框 | Boolean | `false` |
| placeholder | 输入框占位符 | String | - |

## Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 点击按钮时触发 | `{ index, value }` |
| cancel | 点击取消按钮时触发 | - |
| confirm | 点击确认按钮时触发 | `{ value }` |
