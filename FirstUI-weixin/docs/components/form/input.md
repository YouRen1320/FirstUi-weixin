# Input 输入框

输入框组件，用于接收用户输入。

## 引入

```json
{
  "usingComponents": {
    "fui-input": "/components/firstui/fui-input/fui-input"
  }
}
```

## 代码演示

### 基础用法

```html
<fui-input placeholder="请输入内容" bind:input="onInput"></fui-input>
```

### 输入框类型

```html
<fui-input type="text" placeholder="文本输入"></fui-input>
<fui-input type="number" placeholder="数字输入"></fui-input>
<fui-input type="digit" placeholder="带小数点数字"></fui-input>
<fui-input type="idcard" placeholder="身份证输入"></fui-input>
```

### 密码输入

```html
<fui-input password placeholder="请输入密码"></fui-input>
```

### 禁用状态

```html
<fui-input disabled value="禁用状态"></fui-input>
```

### 带清除按钮

```html
<fui-input clearable bind:clear="onClear"></fui-input>
```

### 输入框边框

```html
<fui-input inputBorder borderColor="#e5e5e5" radius="8rpx"></fui-input>
```

## Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 输入框的值 | String | - |
| type | 输入类型，可选值为 `text` `number` `digit` `idcard` | String | `text` |
| password | 是否为密码输入框 | Boolean | `false` |
| placeholder | 占位提示文字 | String | - |
| placeholderStyle | 占位符样式 | String | - |
| disabled | 是否禁用 | Boolean | `false` |
| readonly | 是否只读 | Boolean | `false` |
| maxlength | 最大输入长度 | Number | `140` |
| clearable | 是否显示清除按钮 | Boolean | `false` |
| inputBorder | 是否显示边框 | Boolean | `false` |
| borderColor | 边框颜色 | String | - |
| focus | 是否自动聚焦 | Boolean | `false` |
| textAlign | 文本对齐方式 | String | `left` |
| min | 最小值（type 为 number/digit 时有效） | Number | - |
| max | 最大值（type 为 number/digit 时有效） | Number | - |

## Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| input | 输入时触发 | `{ value }` |
| focus | 聚焦时触发 | `event` |
| blur | 失焦时触发 | `event` |
| confirm | 点击完成按钮时触发 | `{ value }` |
| clear | 点击清除按钮时触发 | - |
