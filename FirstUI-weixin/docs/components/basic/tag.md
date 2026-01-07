# Tag 标签

标签组件，用于标记和分类。

## 引入

```json
{
  "usingComponents": {
    "fui-tag": "/components/firstui/fui-tag/fui-tag"
  }
}
```

## 代码演示

### 标签类型

```html
<fui-tag text="主要" type="primary"></fui-tag>
<fui-tag text="成功" type="success"></fui-tag>
<fui-tag text="警告" type="warning"></fui-tag>
<fui-tag text="危险" type="danger"></fui-tag>
```

### 朴素标签

通过 `plain` 属性设置为朴素标签。

```html
<fui-tag text="朴素标签" type="primary" plain></fui-tag>
```

### 标签尺寸

通过 `size` 属性设置标签尺寸。

```html
<fui-tag text="小号" size="small"></fui-tag>
<fui-tag text="默认" size="medium"></fui-tag>
<fui-tag text="大号" size="large"></fui-tag>
```

### 可关闭标签

通过 `closable` 属性设置可关闭的标签。

```html
<fui-tag text="可关闭" closable bind:close="handleClose"></fui-tag>
```

## Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| text | 标签文本 | String | - |
| type | 标签类型，可选值为 `primary` `success` `warning` `danger` | String | `primary` |
| size | 标签尺寸，可选值为 `small` `medium` `large` | String | `medium` |
| plain | 是否为朴素标签 | Boolean | `false` |
| closable | 是否可关闭 | Boolean | `false` |
| background | 背景颜色 | String | - |
| color | 文字颜色 | String | - |
| borderColor | 边框颜色 | String | - |

## Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 点击标签时触发 | `event` |
| close | 关闭标签时触发 | `event` |
