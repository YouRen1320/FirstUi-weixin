# Theme 主题配置

FirstUI 通过 CSS 变量 (`fui-theme.wxss`) 来管理全局主题色，支持自定义主题。

文件路径：`components/firstui/fui-theme/fui-theme.wxss`。

## 使用方式

在 `app.wxss` 中引入：

```css
@import './components/firstui/fui-theme/fui-theme.wxss';
```

## 变量列表

你可以通过修改这些变量来全局改变组件库的颜色风格。

### 行为相关颜色

```css
--fui-color-primary: #465CFF;  /* 主色 */
--fui-color-success: #09BE4F;  /* 成功 */
--fui-color-warning: #FFB703;  /* 警告 */
--fui-color-danger: #FF2B2B;   /* 危险 */
--fui-color-purple: #6831FF;   /* 紫色 */
```

### 文字颜色

```css
--fui-color-title: #181818;    /* 标题 */
--fui-color-section: #333333;  /* 正文 */
--fui-color-subtitle: #7F7F7F; /* 副标题 */
--fui-color-label: #B2B2B2;    /* 标签/描述 */
--fui-color-minor: #CCCCCC;    /* 次要/禁用 */
```

### 间距与圆角

```css
--fui-border-radius-sm: 16rpx;
--fui-border-radius-base: 24rpx;
--fui-spacing-row-base: 24rpx;
--fui-spacing-col-base: 16rpx;
```

更多变量请查看源文件。
