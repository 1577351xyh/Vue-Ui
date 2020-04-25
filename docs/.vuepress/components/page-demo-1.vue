<template>
  <div style="padding-top: 16px;">
    <p>
      <strong>预览</strong>
    </p>
    <g-page
      :totalPage="20"
      :currentPage.sync="currentPage"
      @update:currentPage="changePage"
    ></g-page>
  </div>
</template>
<style scoped>
* {
  box-sizing: border-box;
}
</style>
<script>
import GPage from '../../../src/page/page'

export default {
  components: { GPage },
  data() {
    return {
      currentPage: 1,
    }
  },
  methods: {
    changePage() {
      //当前页码
      console.log(this.currentPage)
    }
  }
}
</script>
