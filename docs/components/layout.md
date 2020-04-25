---
title: Layout 布局
---

# Layout 布局

<ClientOnly>
  <layout-demo-1></layout-demo-1>
</ClientOnly>

::: details 查看代码

```html
<g-layout style="color: white; margin-bottom:50px;">
  <g-header style="height: 50px; background:lightskyblue;">
    header
  </g-header>
  <g-content style="height: 100px; background:deepskyblue;">
    content
  </g-content>
  <g-footer style="height: 50px; background:lightskyblue;">
    footer
  </g-footer>
</g-layout>
```

:::

<ClientOnly>
  <layout-demo-2></layout-demo-2>
</ClientOnly>

::: details 查看代码

```html
<g-layout style="color: white; overflow:hidden; margin-bottom:50px;">
  <g-header style="height: 50px; background:lightskyblue;">
    header
  </g-header>
  <g-layout>
    <g-sider
      style="height: 100px; background:#ddd; width:200px; color: black;"
      closeButton
    >
      sider
    </g-sider>
    <g-content style="height: 100px; background:#bbb;">
      content
    </g-content>
  </g-layout>
  <g-footer style="height: 50px; background:lightskyblue;">
    footer
  </g-footer>
</g-layout>
```

:::

<ClientOnly>
  <layout-demo-3></layout-demo-3>
</ClientOnly>

::: details 查看代码

```html
<g-layout style="color: white; overflow:hidden; margin-bottom:50px;">
  <g-sider style=" background:#ddd; width:200px; color: black;" closeButton>
    sider
  </g-sider>
  <g-layout>
    <g-header style="height: 50px; background:lightskyblue;">
      header
    </g-header>
    <g-content style="height: 100px; background:deepskyblue;">
      content
    </g-content>
    <g-footer style="height: 50px; background:lightskyblue;">
      footer
    </g-footer>
  </g-layout>
</g-layout>
```

:::

# Attributes

组件将被渲染为 button 标签，因此你可以使用所有的 button 原生属性。

g-button-group 的子元素必须是 g-button,否则会报错;

| 参数        |       说明       |    类型 |     可选值 | 默认 |
| ----------- | :--------------: | ------: | ---------: | ---: |
| closeButton | 是否显示关闭按钮 | Boolean | true,false |   -- |
