---
title: buttom 按钮
---

<!-- ::: theorem 牛顿第一定律
假若施加于某物体的外力为零，则该物体的运动速度不变。
```html
<ul>
  <li v-for="todo in todos" :key="todo.id">
    {{ todo.text }}
  </li>
</ul>
``` -->
<!-- ::: -->

# 按钮

常用的操作按钮

<ClientOnly>
  <button-demo-1></button-demo-1>
</ClientOnly>

::: details 查看代码

```html
<g-button>默认按钮</g-button>
<g-button icon="settings" iconPosition="right">默认按钮</g-button>
<g-button :loading="true">默认按钮</g-button>
<g-button disabled>默认按钮</g-button>
```

:::

<ClientOnly>
  <button-demo-2></button-demo-2>
</ClientOnly>

::: details 查看代码

```html
<g-button-group>
  <g-button>选项一</g-button>
  <g-button>选项二</g-button>
  <g-button>选项三</g-button>
  <g-button>选项四</g-button>
</g-button-group>
<g-button-group>
  <g-button icon="left"></g-button>
  <g-button>选项</g-button>
  <g-button icon="right"></g-button>
</g-button-group>
```

:::

# Attributes

组件将被渲染为 button 标签，因此你可以使用所有的 button 原生属性。

g-button-group 的子元素必须是 g-button,否则会报错;

| 参数         |         说明          |    类型 |     可选值 | 默认 |
| ------------ | :-------------------: | ------: | ---------: | ---: |
| icon         |      icon 图标名      |  String |         -- |   -- |
| iconPosition |       icon 位置       |  String | left,right |   -- |
| loading      | 带 loading 效果的按钮 | Boolean |         -- |   -- |
