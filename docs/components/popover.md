---
title: Popover 气泡
---

# Popover 气泡

<ClientOnly>
  <popover-demo-1></popover-demo-1>
</ClientOnly>

::: details 查看代码

```html
<g-popover>
  <g-button>上方弹出</g-button>
  <template slot="content">
    弹出内容
  </template>
</g-popover>
<g-popover position="bottom">
  <g-button>下方弹出</g-button>
  <template slot="content">
    弹出内容
  </template>
</g-popover>
<g-popover position="left">
  <g-button>左边弹出</g-button>
  <template slot="content">
    弹出内容
  </template>
</g-popover>
<g-popover position="right">
  <g-button>右边弹出</g-button>
  <template slot="content">
    弹出内容
  </template>
</g-popover>
<script>
  export default {
    data() {
      return {}
    },
    methods: {
      onClickButton() {
        this.$toast('<strong style="color:red;">加粗的提示</strong>', {
          enableHtml: true,
        })
      },
    },
  }
</script>
```

:::

<ClientOnly>
  <popover-demo-2></popover-demo-2>
</ClientOnly>

::: details 查看代码

```html
<g-popover trigger="hover">
  <g-button>上方弹出</g-button>
  <template slot="content">
    弹出内容
  </template>
</g-popover>
<g-popover position="bottom" trigger="hover">
  <g-button>下方弹出</g-button>
  <template slot="content">
    弹出内容
  </template>
</g-popover>
<g-popover position="left" trigger="hover">
  <g-button>左边弹出</g-button>
  <template slot="content">
    弹出内容
  </template>
</g-popover>
<g-popover position="right" trigger="hover">
  <g-button>右边弹出</g-button>
  <template slot="content">
    弹出内容
  </template>
</g-popover>
```

:::

# Attributes

| 参数     |     说明     |   类型 |                可选值 |  默认 |
| -------- | :----------: | -----: | --------------------: | ----: |
| position |   弹出方向   | String | top,bottom,left,right |   top |
| trigger  | 事件触发形式 | String |           click,hover | click |
