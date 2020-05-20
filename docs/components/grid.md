---
title: Grid 网格布局
---

# Grid 网格

<ClientOnly>
<grid-demo-1></grid-demo-1>
</ClientOnly>

::: details 查看代码

```html
<g-row class="demoRow">
  <g-col span="8">
    <div class="demoCol">8</div>
  </g-col>
  <g-col span="8">
    <div class="demoCol">8</div>
  </g-col>
  <g-col span="8">
    <div class="demoCol">8</div>
  </g-col>
</g-row>
<g-row class="demoRow">
  <g-col span="6">
    <div class="demoCol">6</div>
  </g-col>
  <g-col span="6">
    <div class="demoCol">6</div>
  </g-col>
  <g-col span="6">
    <div class="demoCol">6</div>
  </g-col>
  <g-col span="6">
    <div class="demoCol">6</div>
  </g-col>
</g-row>
<g-row class="demoRow">
  <g-col span="4">
    <div class="demoCol">4</div>
  </g-col>
  <g-col span="4">
    <div class="demoCol">4</div>
  </g-col>
  <g-col span="4">
    <div class="demoCol">4</div>
  </g-col>
  <g-col span="4">
    <div class="demoCol">4</div>
  </g-col>
  <g-col span="4">
    <div class="demoCol">4</div>
  </g-col>
  <g-col span="4">
    <div class="demoCol">4</div>
  </g-col>
</g-row>
<g-row class="demoRow">
  <g-col span="2">
    <div class="demoCol">2</div>
  </g-col>
  <g-col span="2">
    <div class="demoCol">2</div>
  </g-col>
  <g-col span="2">
    <div class="demoCol">2</div>
  </g-col>
  <g-col span="2">
    <div class="demoCol">2</div>
  </g-col>
  <g-col span="2">
    <div class="demoCol">2</div>
  </g-col>
  <g-col span="2">
    <div class="demoCol">2</div>
  </g-col>
  <g-col span="2">
    <div class="demoCol">2</div>
  </g-col>
  <g-col span="2">
    <div class="demoCol">2</div>
  </g-col>
  <g-col span="2">
    <div class="demoCol">2</div>
  </g-col>
  <g-col span="2">
    <div class="demoCol">2</div>
  </g-col>
  <g-col span="2">
    <div class="demoCol">2</div>
  </g-col>
  <g-col span="2">
    <div class="demoCol">2</div>
  </g-col>
</g-row>
```

:::

<ClientOnly>
  <grid-demo-2></grid-demo-2>
</ClientOnly>

::: details 查看代码

```html
<g-row class="demoRow" gutter="10">
  <g-col span="8">
    <div class="demoCol">8</div>
  </g-col>
  <g-col span="8">
    <div class="demoCol">8</div>
  </g-col>
  <g-col span="8">
    <div class="demoCol">8</div>
  </g-col>
</g-row>
<g-row class="demoRow" gutter="10">
  <g-col span="6">
    <div class="demoCol">6</div>
  </g-col>
  <g-col span="6">
    <div class="demoCol">6</div>
  </g-col>
  <g-col span="6">
    <div class="demoCol">6</div>
  </g-col>
  <g-col span="6">
    <div class="demoCol">6</div>
  </g-col>
</g-row>
```

:::

# Attributes

所占宽度=span/24

col 组件的 span 相加需要等于 24

| 参数   |         说明          |            类型 | 可选值 | 默认 |
| ------ | :-------------------: | --------------: | -----: | ---: |
| span   |    宽度 = span/24     |          Number |     -- |   -- |
| gutter | 栅格的间隙，单位为 px | String , Number |     -- |   -- |
