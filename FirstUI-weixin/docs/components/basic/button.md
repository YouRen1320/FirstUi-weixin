# Button 按钮

按钮组件，用于触发一个操作。

## 引入

```json
{
  "usingComponents": {
    "fui-button": "/components/firstui/fui-button/fui-button"
  }
}
```

## 代码演示

### 按钮类型

按钮支持 `primary`、`success`、`warning`、`danger`、`link`、`purple`、`gray` 七种类型。

```html
<fui-button text="主要按钮" type="primary"></fui-button>
<fui-button text="成功按钮" type="success"></fui-button>
<fui-button text="警告按钮" type="warning"></fui-button>
<fui-button text="危险按钮" type="danger"></fui-button>
<fui-button text="链接按钮" type="link"></fui-button>
<fui-button text="紫色按钮" type="purple"></fui-button>
<fui-button text="灰色按钮" type="gray"></fui-button>
```

### 朴素按钮

通过 `plain` 属性将按钮设置为朴素按钮。

```html
<fui-button text="朴素按钮" type="primary" plain></fui-button>
```

### 禁用状态

通过 `disabled` 属性禁用按钮。

```html
<fui-button text="禁用按钮" disabled></fui-button>
```

### 按钮尺寸

通过 `btnSize` 属性设置按钮尺寸，可选值为 `medium`、`small`、`mini`。

```html
<fui-button text="中等按钮" btnSize="medium"></fui-button>
<fui-button text="小型按钮" btnSize="small"></fui-button>
<fui-button text="迷你按钮" btnSize="mini"></fui-button>
```

### 自定义颜色

通过 `background` 和 `color` 属性自定义按钮颜色。

```html
<fui-button text="自定义按钮" background="#8A2BE2" color="#fff"></fui-button>
```

### 加载状态

通过 `loading` 属性设置按钮加载状态。

```html
<fui-button text="加载中..." loading></fui-button>
```

## Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 按钮类型，可选值为 `primary` `success` `warning` `danger` `link` `purple` `gray` | String | `primary` |
| background | 按钮背景色，设置后 type 属性失效 | String | - |
| text | 按钮文本 | String | - |
| color | 按钮文字颜色 | String | `#fff` |
| disabledBackground | 禁用状态背景色 | String | - |
| disabledColor | 禁用状态文字颜色 | String | - |
| btnSize | 按钮尺寸，可选值为 `medium` `small` `mini` | String | - |
| width | 按钮宽度 | String | `100%` |
| height | 按钮高度 | String | `96rpx` |
| size | 字体大小，单位 rpx | Number | `32` |
| bold | 是否加粗文字 | Boolean | `false` |
| margin | 外边距 | String | `0` |
| radius | 圆角大小 | String | `16rpx` |
| plain | 是否为朴素按钮 | Boolean | `false` |
| disabled | 是否禁用 | Boolean | `false` |
| loading | 是否显示加载状态 | Boolean | `false` |
| formType | 用于 form 组件，可选值为 `submit` `reset` | String | - |
| openType | 微信开放能力 | String | - |

## Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 点击按钮时触发 | `{ index }` |
| getuserinfo | 用户信息回调 | `detail` |
| getphonenumber | 获取手机号回调 | `detail` |
| contact | 客服消息回调 | `detail` |
| opensetting | 打开设置回调 | `detail` |
| chooseavatar | 选择头像回调 | `detail` |
| launchapp | 打开 APP 回调 | `detail` |
| error | 错误回调 | `detail` |

## Slots

| 名称 | 说明 |
| --- | --- |
| default | 按钮内容，会覆盖 text 属性 |
