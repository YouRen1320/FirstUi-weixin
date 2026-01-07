# 快速上手

本节将介绍如何在微信小程序中使用 FirstUI 组件库。

## 引入组件

### 方式一：页面级引入

在页面的 `json` 文件中引入组件：

```json
{
  "usingComponents": {
    "fui-button": "/components/firstui/fui-button/fui-button"
  }
}
```

### 方式二：全局引入

在根目录 `app.json` 文件中全局引入：

```json
{
  "usingComponents": {
    "fui-button": "components/firstui/fui-button/fui-button"
  }
}
```

## 使用组件

引入组件后，可以在页面中直接使用：

```html
<fui-button text="默认按钮"></fui-button>
```

## 示例

### 基础按钮

```html
<fui-button text="主要按钮" type="primary"></fui-button>
<fui-button text="成功按钮" type="success"></fui-button>
<fui-button text="警告按钮" type="warning"></fui-button>
<fui-button text="危险按钮" type="danger"></fui-button>
```

### 朴素按钮

```html
<fui-button text="朴素按钮" type="primary" plain></fui-button>
```

### 禁用按钮

```html
<fui-button text="禁用按钮" disabled></fui-button>
```
