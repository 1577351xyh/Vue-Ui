<template>
  <div>
    <headers></headers>
    <router-view></router-view>
  </div>
</template>
<script>
import headers from '../component/nav.vue'
export default {
  data() {
    return {}
  },
  components: {
    headers,
  },
}
</script>
<style lang="less" scope></style>
