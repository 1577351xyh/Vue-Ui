<template>
  <div style="padding-top: 16px;">
    <h2>布局</h2>
    <p>
      <strong>预览</strong>
    </p>
    <g-page
      :totalPage="20"
      :currentPage.sync="currentPageNub"
      @update:currentPage="changePage"
    ></g-page>
    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
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
      currentPageNub: 1,
      content: `
      <g-page :totalPage="20" :currentPage.sync="currentPage" @pageSize="pageSize"></g-page>
      data:{
        currentPage:1,
      }
      methods:{
        pageSize(page){
          //当前页码
          console.log(page)
        }
      }`
        .replace(/^ {8}/gm, '')
        .trim()
    }
  },
  methods: {
    changePage() {
      //当前页码
      console.log(this.currentPageNub)
    }
  }
}
</script>
