# Empty 空状态

空状态组件。

## 引入

```json
{
  "usingComponents": {
    "fui-empty": "/components/firstui/fui-empty/fui-empty"
  }
}
```

## 代码演示

### 基础用法

```html
<fui-empty text="暂无数据"></fui-empty>
```

### 自定义图片

```html
<fui-empty 
  src="/images/empty.png" 
  text="暂无内容">
</fui-empty>
```

### 带操作按钮

```html
<fui-empty text="暂无数据">
  <fui-button slot="button" text="去添加" type="primary"></fui-button>
</fui-empty>
```

## Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| src | 图片地址 | String | - |
| text | 提示文字 | String | `暂无数据` |
| type | 类型 | String | - |
| color | 文字颜色 | String | `#999` |
| size | 文字大小 | Number/String | `28` |

## Slots

| 名称 | 说明 |
| --- | --- |
| button | 操作按钮 |
