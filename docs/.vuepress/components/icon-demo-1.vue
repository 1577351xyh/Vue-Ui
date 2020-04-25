<template>
  <div style="padding-top: 16px;">
    <p>
      <strong>预览</strong>
    </p>
    <div class="flex">
      <span>
        <g-icon name="left"></g-icon>
      </span>
      <span>
        <g-icon name="right"></g-icon>
      </span>
      <span>
        <g-icon name="settings"></g-icon>
      </span>
      <span>
        <g-icon name="xia"></g-icon>
      </span>
      <span>
        <g-icon name="shang"></g-icon>
      </span>
      <span>
        <g-icon name="loading"></g-icon>
      </span>
      <span>
        <g-icon name="ren"></g-icon>
      </span>
      <span>
        <g-icon name="mima"></g-icon>
      </span>
    </div>
  </div>
</template>
<script>
import Icon from '../../../src/icon/icon'

export default {
  components: {
    'g-icon': Icon,
  },
  data() {
    return {}
  },
}
</script>
<style lang="less">
.flex {
  display: flex;
  justify-content: flex-start;
  span{
    margin-right: 10px;
  }
}
</style>
