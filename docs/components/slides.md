---
title: Slides 轮播图
---

# Slides

<ClientOnly>
  <slides-demo-1></slides-demo-1>
</ClientOnly>

::: details 查看代码

```html
<g-slides :selected.sync="selected" autoplay>
  <g-slides-item name="1">
    <div class="box">1</div>
  </g-slides-item>
  <g-slides-item name="2">
    <div class="box">2</div>
  </g-slides-item>
  <g-slides-item name="3">
    <div class="box">3</div>
  </g-slides-item>
</g-slides>

<script>
  export default {
    data() {
      return {
        selected: '1',
      }
    },
  }
</script>
<style lang="scss" scoped>
  .box {
    height: 300px;
    width: 400px;
    background: blue;
    color: white;
    font-size: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
```

:::

# Attributes

在有限的空间内循环播放图片、文字等内容

| 参数     |          说明           |    类型 |     可选值 | 默认 |
| -------- | :---------------------: | ------: | ---------: | ---: |
| selected | 默认第一个展示的 slides |  String |         -- |   -- |
| autoplay |        自动轮播         | Boolean | true,false | 3000 |
