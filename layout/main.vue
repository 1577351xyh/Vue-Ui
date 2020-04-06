<template>
  <div class="main-cnt">
    <!-- 左侧导航栏 -->
    <leftNav></leftNav>
    <!-- 右侧导航栏 -->
    <!-- 底部前进后退导航 -->
  </div>
</template>
<script>
import leftNav from '/component/main-menu.vue'
export default {
  data() {
    return {}
  },
  components: {
    leftNav,
  },
}
</script>
<style lang="less" scope>
.main-cnt {
  max-width: 1240px;
  margin:0 auto;
}
</style>
