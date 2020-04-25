---
title: 输入框
---

# input

<ClientOnly>
  <input-demo-1></input-demo-1>
</ClientOnly>

::: details 查看代码

```html
<g-input value="中文"></g-input>
<g-input value="中文" disabled></g-input>
<g-input icon="ren" placeholder="输入用户名"></g-input>
<g-input value="中文" error="错误消息"></g-input>
```

:::

支持双向绑定
<ClientOnly>
<input-demo-2></input-demo-2>
</ClientOnly>

::: details 查看代码

```html
<g-input v-model="value"></g-input>
<div>value: {{ value }}</div>
<script>
  export default {
    data() {
      return {
        value: '1',
      }
    },
  }
</script>
```

:::

# Attributes

| 参数     |      说明      |    类型 |     可选值 |  默认 |
| -------- | :------------: | ------: | ---------: | ----: |
| value    | value 绑定属性 |  String |         -- |    -- |
| disabled |      禁用      | Boolean | true,false | false |
| error    |    错误消息    |  String |         -- |    -- |
| icon     |  左侧图标名称  |  String |         -- |    -- |
