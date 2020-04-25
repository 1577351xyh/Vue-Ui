---
title: Toast 通知
---

# Toast

<ClientOnly>
  <toast-demo-1></toast-demo-1>
</ClientOnly>

::: details 查看代码

```html
<g-button @click="$toast('点击弹出提示')">上方弹出</g-button>
<g-button @click="$toast('点击弹出提示', {position:'middle'})"
  >中间弹出</g-button
>
<g-button @click="$toast('点击弹出提示', {position:'bottom'})"
  >下方弹出</g-button
>
```

:::

<ClientOnly>
  <toast-demo-2></toast-demo-2>
</ClientOnly>

::: details 查看代码

```html
<script>
  import plugin from '../../../src/toast/plugin'
  import Vue from 'vue'
  Vue.use(plugin)
  export default {
    data() {
      return {}
    },
    methods: {
      onClickButton() {
        this.$toast('toast信息', {
          closeButton: {
            text: '知道了',
            callback: () => {
              console.log('回调触发了')
            },
          },
        })
      },
    },
  }
</script>
```

:::

# Attributes

| 参数           |       说明       |   类型 |               可选值 |  默认 |
| -------------- | :--------------: | -----: | -------------------: | ----: |
| autoClose      |   是否自动关闭   | Bolean |           true,false | false |
| autoCloseDelay | 延迟多少秒后关闭 | Number |                   -- |  3000 |
| closeButton    |   事件触发对象   | Object |                   -- |    -- |
| position       |  Toast 展示位置  | String | top,bottom,middle -- |   top |
