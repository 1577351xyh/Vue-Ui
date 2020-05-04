<template>
  <div class="gulu-step" :class="{ activeClass }">
    <!-- <g-icon name=""></g-icon> -->
    <div class="gulu-step-head">
      <div class="gulu-icon">{{ index }}</div>
      <div class="gulu-line"></div>
    </div>
    <div class="gulu-step-centent">
      <span>{{ title }}</span>
      <span>{{ description }}</span>
    </div>
  </div>
</template>
<script>
// import GICon from '@/icon/icon'
export default {
  props: {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  data() {
    return {
      active: false,
      index: null,
    }
  },
  computed: {
    activeClass() {
      return this.active
    },
  },
  components: {
    // GICon,
  },
}
</script>
<style lang="less" scope>
@import url('./style/step.less');
</style>
