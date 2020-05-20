---
title: Scroll 无限滚动
---

# Scroll 滚动

<ClientOnly>
  <scroll-demo-1></scroll-demo-1>
</ClientOnly>

::: details 查看代码

```html
<Scroll @scrollLoad="scrollLoad">
  <li class="gulu-list-item" v-for="(item, index) in arr" :key="index">
    {{ item }}
  </li>
</Scroll>

<script>
  export default {
    data() {
      return {}
    },
    scrollLoad() {
      console.log('触底了')
      setTimeout(() => {
        this.arr = this.arr.concat(this.arr)
      }, 500)
    },
  }
</script>
<style lang="scss" scoped>
  .gulu-list-item {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    background: #e8f3fe;
    margin: 10px;
    color: #7dbcfc;
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
