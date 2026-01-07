# Icon 图标

图标组件，支持自定义图标。

## 引入

```json
{
  "usingComponents": {
    "fui-icon": "/components/firstui/fui-icon/fui-icon"
  }
}
```

## 代码演示

### 基础用法

通过 `name` 属性指定图标名称。

```html
<fui-icon name="home"></fui-icon>
<fui-icon name="search"></fui-icon>
<fui-icon name="setting"></fui-icon>
```

### 图标颜色

通过 `color` 属性设置图标颜色。

```html
<fui-icon name="home" color="#ff0000"></fui-icon>
<fui-icon name="home" color="#00ff00"></fui-icon>
<fui-icon name="home" color="#0000ff"></fui-icon>
```

### 图标大小

通过 `size` 属性设置图标大小，单位为 rpx。

```html
<fui-icon name="home" size="32"></fui-icon>
<fui-icon name="home" size="48"></fui-icon>
<fui-icon name="home" size="64"></fui-icon>
```

### 自定义图标

支持使用自定义图标，通过 `customPrefix` 和 `name` 配合使用。

```html
<fui-icon customPrefix="my-icon" name="custom-icon"></fui-icon>
```

## Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| name | 图标名称 | String | - |
| size | 图标大小，单位 rpx | Number | `48` |
| color | 图标颜色 | String | - |
| customPrefix | 自定义图标前缀 | String | `fui-icon` |
| fontFamily | 字体名称 | String | - |

## Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 点击图标时触发 | `event` |
