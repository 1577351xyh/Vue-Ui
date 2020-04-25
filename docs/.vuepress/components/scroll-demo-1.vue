<template>
  <div style="padding-top: 16px;">
    <h2>简单用法</h2>
    <p>滑动至底部时,加载更多数据</p>
    <p>
      <strong>预览</strong>
    </p>
    <g-scroll @scrollLoad="scrollLoad">
      <li class="gulu-list-item" v-for="(item, index) in arr" :key="index">
        {{ item }}
      </li>
    </g-scroll>
  </div>
</template>
<script>
// import GScroll from '@/Scroll/scroll'
import GScroll from '../../../src/Scroll/scroll'

export default {
  components: {
    GScroll,
  },
  data() {
    return {
      arr: [1, 2, 3, 4, 5, 6, 7, 8, 10],
    }
  },
  methods: {
    scrollLoad() {
      console.log('触底了')
      setTimeout(() => {
        this.arr = this.arr.concat(this.arr)
      }, 500)
    },
  },
}
</script>
<style>
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
