<template>
  <div class="main-menu-inner">
    <ul>
      <li v-for="(item, index) in routers" :key="index">
        <p class="main-menu-title">{{ item.title }}</p>
        <div
          class="nav-item"
          v-for="(itemChildren, index) in item.children"
          @click="Go(itemChildren.path)"
          :key="index"
        >
          {{ itemChildren.title }}
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import { router } from '/utils/config.js'
import { uuid } from '/utils/common.js'

export default {
  data() {
    return {}
  },
  methods: {
    Go(path) {
      console.log(this)
      this.$router.push(path)
    },
  },
  created() {
    console.log(router)
  },
  computed: {
    routers() {
      return router
    },
  },
}
</script>
<style lang="less" scope>
.main-menu-inner {
  height: 100%;
  margin-top: 10px;
  max-height: 100vh;
  overflow: hidden;
  max-width: 260px;
  border-right: 1px solid #dcdfe6;
  padding-left: 20px;
  .main-menu-title {
    font-size: 16px;
    color: #333;
    line-height: 40px;
    height: 40px;
    margin: 0;
    padding: 0;
    text-decoration: none;
    display: block;
    position: relative;
    transition: 0.15s ease-out;
    cursor: pointer;
    font-weight: 700;
  }
  .nav-item {
    display: block;
    height: 40px;
    color: #444;
    line-height: 40px;
    cursor: pointer;
    font-size: 14px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    padding-left: 20px;
    font-weight: 400;
  }
  .nav-item:hover {
    color: #409eff;
  }
}
</style>
