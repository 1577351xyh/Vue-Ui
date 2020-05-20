---
title: Nav 导航栏
---

# 导航栏

<ClientOnly>
  <nav-demo-1></nav-demo-1>
</ClientOnly>

::: details 查看代码

```html
<g-nav :selected.sync="selected">
  <g-nav-item name="home">首页</g-nav-item>
  <g-sub-nav name="about">
    <template slot="title">关于</template>
    <g-nav-item name="culture">企业文化</g-nav-item>
    <g-nav-item name="tim">团队</g-nav-item>
    <g-sub-nav name="contacts">
      <template slot="title">联系方式</template>
      <g-nav-item name="wechat">微信</g-nav-item>
      <g-nav-item name="qq">qq</g-nav-item>
      <g-sub-nav name="phone">
        <template slot="title">手机</template>
        <g-nav-item name="cn">移动</g-nav-item>
        <g-nav-item name="cm">电信</g-nav-item>
      </g-sub-nav>
    </g-sub-nav>
  </g-sub-nav>
  <g-nav-item name="team">团队</g-nav-item>
</g-nav>
<script>
  export default {
    data() {
      return {
        selected: ['home'],
      }
    },
  }
</script>
```

:::

# Attributes

| 参数     |      说明      |  类型 | 可选值 | 默认 |
| -------- | :------------: | ----: | -----: | ---: |
| selected | 当前选中的 nav | Array |     -- |   -- |
