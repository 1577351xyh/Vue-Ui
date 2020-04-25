<template>
  <div style="padding-top: 16px;">
    <p>
      <strong>左右两栏布局，右侧主体部分三栏</strong>
    </p>

    <g-layout style="color: white; overflow:hidden; margin-bottom:50px;">
      <g-sider style=" background:#ddd; width:200px; color: black;" closeButton>
        sider
      </g-sider>
      <g-layout>
        <g-header style="height: 50px; background:lightskyblue;">
          header
        </g-header>
        <g-content style="height: 100px; background:deepskyblue;">
          content
        </g-content>
        <g-footer style="height: 50px; background:lightskyblue;">
          footer
        </g-footer>
      </g-layout>
    </g-layout>
  </div>
</template>
<style scoped>
* {
  box-sizing: border-box;
}
</style>
<script>
import GLayout from '../../../src/layout/layout'
import GHeader from '../../../src/layout/header'
import GFooter from '../../../src/layout/footer'
import GContent from '../../../src/layout/content'
import GSider from '../../../src/layout/sider'

export default {
  components: { GLayout, GHeader, GFooter, GContent, GSider },
  data() {
    return {}
  },
}
</script>
